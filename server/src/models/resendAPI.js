import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();


const resend = new Resend(process.env.RESEND_API_KEY);

export const resendEmail = async ({ to, subject, text, html }) => {
  try {
    const data = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>', 
      to: [to], 
      subject,
      text,
      html,
    });

    return { success: true, id: data.id };
  } catch (error) {
    console.error('Resend Error:', error);
    throw new Error('Failed to send email');
  }
};