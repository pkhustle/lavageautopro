import { NextResponse } from 'next/server';
import { sendEmail, generateContactEmailHtml } from '../../../lib/email';
import { subscribe } from '../../../lib/mailerlite';

export async function POST(request: Request) {
    try {
        console.log('=== Contact form submission started ===');
        
        const formData = await request.formData();
        
        // Extract form fields
        const firstName = formData.get('firstName') as string;
        const lastName = formData.get('lastName') as string;
        const email = formData.get('email') as string;
        const phone = formData.get('phone') as string;
        const service = formData.get('service') as string;
        const city = formData.get('city') as string;
        const message = formData.get('message') as string;
        
        console.log('Form data extracted:', { firstName, lastName, email, service, city: city || 'not provided' });
        
        // Validate required fields
        if (!firstName || !lastName || !email || !service || !message) {
            console.log('Validation failed - missing required fields');
            return NextResponse.json(
                { error: 'Tous les champs requis doivent être remplis' },
                { status: 400 }
            );
        }
        
        console.log('Form validation passed');
        
        // 1. Subscribe to MailerLite
        let mailerLiteSuccess = false;
        try {
            console.log('Attempting MailerLite subscription...');
            await subscribe({
                email,
                source: 'contact_form',
                fields: {
                    firstName,
                    lastName,
                    service,
                    city,
                    phone,
                    message
                }
            });
            console.log("MailerLite subscription success for:", email);
            mailerLiteSuccess = true;
        } catch (error) {
            console.error("MailerLite subscription error:", error);
            console.error("MailerLite error details:", error instanceof Error ? error.message : 'Unknown error');
            // Continue with email notification even if MailerLite fails
        }
        
        // 2. Send email notification
        console.log('Attempting to send email notification...');
        const formDataForEmail = {
            firstName,
            lastName,
            email,
            phone,
            service,
            city,
            message
        };
        
        try {
            await sendEmail({
                to: 'komp76@gmail.com',
                subject: 'Nouveau message de contact - Lavage Auto Pro',
                html: generateContactEmailHtml(formDataForEmail)
            });
            console.log('Email sent successfully to komp76@gmail.com');
        } catch (emailError) {
            console.error('Email sending failed:', emailError);
            console.error('Email error details:', emailError instanceof Error ? emailError.message : 'Unknown email error');
            
            // Return specific error for email failure
            return NextResponse.json(
                { 
                    error: 'Erreur lors de l\'envoi de l\'email de notification',
                    details: emailError instanceof Error ? emailError.message : 'Unknown error',
                    mailerLiteStatus: mailerLiteSuccess ? 'success' : 'failed'
                },
                { status: 500 }
            );
        }
        
        console.log('=== Contact form submission completed successfully ===');
        return NextResponse.json({ 
            success: true,
            mailerLiteStatus: mailerLiteSuccess ? 'success' : 'failed'
        });
    } catch (error) {
        console.error('=== Form submission error ===');
        console.error('Error:', error);
        console.error('Error details:', error instanceof Error ? error.message : 'Unknown error');
        console.error('Error stack:', error instanceof Error ? error.stack : 'No stack trace');
        
        return NextResponse.json(
            { 
                error: 'Une erreur est survenue lors de l\'envoi du formulaire',
                details: error instanceof Error ? error.message : 'Unknown error'
            },
            { status: 500 }
        );
    }
}
