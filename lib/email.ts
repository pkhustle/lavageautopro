import nodemailer from 'nodemailer';
import { LOCATIONS } from './constants';

// Configure email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  from?: string;
}

/**
 * Send an email using the configured transporter
 */
export async function sendEmail({ to, subject, html, from }: EmailOptions) {
  console.log('=== Email sending process started ===');
  console.log('Email configuration check:');
  console.log('- EMAIL_USER:', process.env.EMAIL_USER ? 'Set' : 'NOT SET');
  console.log('- EMAIL_PASS:', process.env.EMAIL_PASS ? 'Set (length: ' + process.env.EMAIL_PASS.length + ')' : 'NOT SET');
  
  const mailOptions = {
    from: from || process.env.EMAIL_USER || 'noreply@lavageautointerieur.ca',
    to,
    subject,
    html
  };

  console.log('Mail options:', {
    from: mailOptions.from,
    to: mailOptions.to,
    subject: mailOptions.subject,
    htmlLength: html.length
  });

  try {
    console.log('Attempting to send email via nodemailer...');
    const result = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', result.messageId);
    return result;
  } catch (error) {
    console.error('Nodemailer error:', error);
    
    // Provide more specific error information
    if (error instanceof Error) {
      console.error('Error name:', error.name);
      console.error('Error message:', error.message);
      
      // Check for common Gmail authentication errors
      if (error.message.includes('Invalid login')) {
        throw new Error('Gmail authentication failed. Please check your EMAIL_USER and EMAIL_PASS environment variables.');
      }
      if (error.message.includes('Username and Password not accepted')) {
        throw new Error('Gmail credentials rejected. Make sure you are using an App Password, not your regular Gmail password.');
      }
      if (error.message.includes('ENOTFOUND')) {
        throw new Error('Network error: Unable to connect to Gmail servers. Check your internet connection.');
      }
    }
    
    throw error;
  }
}

/**
 * Generate HTML for contact form notification email
 */
export function generateContactEmailHtml(formData: {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  service: string;
  city?: string;
  message: string;
}) {
  const { firstName, lastName, email, phone, service, city, message } = formData;
  
  return `
    <h1>Nouveau message de contact</h1>
    <p><strong>Nom:</strong> ${firstName} ${lastName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Téléphone:</strong> ${phone || 'Non fourni'}</p>
    <p><strong>Service:</strong> ${service}</p>
    <p><strong>Ville:</strong> ${city ? LOCATIONS.find(l => l.id === city)?.name || city : 'Non fournie'}</p>
    <p><strong>Message:</strong></p>
    <p>${message}</p>
  `;
}
