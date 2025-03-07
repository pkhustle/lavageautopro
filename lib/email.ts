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
  const mailOptions = {
    from: from || process.env.EMAIL_USER || 'noreply@lavageautointerieur.ca',
    to,
    subject,
    html
  };

  return transporter.sendMail(mailOptions);
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
