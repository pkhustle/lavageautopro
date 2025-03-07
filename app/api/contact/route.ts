import { NextResponse } from 'next/server';
import { sendEmail, generateContactEmailHtml } from '../../../lib/email';
import { subscribe } from '../../../lib/mailerlite';

export async function POST(request: Request) {
    try {
        const formData = await request.formData();
        
        // Extract form fields
        const firstName = formData.get('firstName') as string;
        const lastName = formData.get('lastName') as string;
        const email = formData.get('email') as string;
        const phone = formData.get('phone') as string;
        const service = formData.get('service') as string;
        const city = formData.get('city') as string;
        const message = formData.get('message') as string;
        
        // Validate required fields
        if (!firstName || !lastName || !email || !service || !message) {
            return NextResponse.json(
                { error: 'Tous les champs requis doivent être remplis' },
                { status: 400 }
            );
        }
        
        // 1. Subscribe to MailerLite
        try {
            await subscribe({
                email,
                source: 'contact_form',
                fields: {
                    firstName,
                    lastName,
                    service,
                    city
                }
            });
            console.log("MailerLite subscription success for:", email);
        } catch (error) {
            console.error("MailerLite subscription error:", error);
            // Continue with email notification even if MailerLite fails
        }
        
        // 2. Send email notification
        const formDataForEmail = {
            firstName,
            lastName,
            email,
            phone,
            service,
            city,
            message
        };
        
        await sendEmail({
            to: 'komp76@gmail.com',
            subject: 'Nouveau message de contact - Lavage Auto Pro',
            html: generateContactEmailHtml(formDataForEmail)
        });
        
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Form submission error:', error);
        return NextResponse.json(
            { error: 'Une erreur est survenue lors de l\'envoi du formulaire' },
            { status: 500 }
        );
    }
}
