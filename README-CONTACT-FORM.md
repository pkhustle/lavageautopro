# Contact Form Configuration

This document explains how to configure the contact form to:
1. Add subscribers to MailerLite
2. Send email notifications when someone submits the form

## Email Notifications Setup

The contact form is configured to send email notifications to `komp76@gmail.com` when someone submits the form. To enable this functionality, you need to set up email credentials in the `.env.local` file.

### Setting up Gmail for sending emails

1. **Enable 2-Step Verification on your Google account**
   - Go to your [Google Account](https://myaccount.google.com/)
   - Select "Security" from the left menu
   - Under "Signing in to Google," select "2-Step Verification" and follow the steps

2. **Generate an App Password**
   - After enabling 2-Step Verification, go to [App Passwords](https://myaccount.google.com/apppasswords)
   - Select "Mail" as the app and "Other (Custom name)" as the device
   - Enter a name like "Lavage Auto Website" and click "Generate"
   - Google will display a 16-character password - copy this password

3. **Update the `.env.local` file**
   - Open the `.env.local` file in the root of your project
   - Update the following values:
     ```
     EMAIL_USER=your-gmail-address@gmail.com
     EMAIL_PASS=your-16-character-app-password
     ```
   - Save the file

## MailerLite Integration

The contact form is already configured to add subscribers to your MailerLite account using the API key and group ID provided. The integration:

- Adds the email address to your MailerLite subscriber list
- Includes the first name, last name, and selected service as custom fields
- Tags the subscriber with "contact_form" as the source

### Customizing MailerLite Integration

If you need to modify the MailerLite integration:

1. **API Key**: The API key is stored in `lib/mailerlite.ts`
2. **Group ID**: The default group ID is also in `lib/mailerlite.ts`
3. **Custom Fields**: You can modify the fields sent to MailerLite in the `app/api/contact/route.ts` file

## Testing the Form

To test the contact form:

1. Make sure you've set up the email credentials in `.env.local`
2. Run the development server with `npm run dev`
3. Navigate to the contact page
4. Fill out and submit the form
5. Check your email at `komp76@gmail.com` for the notification
6. Verify that the subscriber was added to your MailerLite account

## Troubleshooting

If you encounter issues:

- **Email not sending**: Check that your Gmail app password is correct and that you've enabled 2-Step Verification
- **MailerLite subscription failing**: Verify that your API key is valid and that the group ID exists in your MailerLite account
- **Form submission errors**: Check the browser console and server logs for error messages

For any other issues, refer to the Next.js documentation on API routes and the Nodemailer documentation for email configuration.
