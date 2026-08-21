import { resendEmail } from "../models/resendAPI.js";

const escapeHtml = (text = '') => {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
};

export const handleContact = async (req, res) => {
  try {
    const { username, email, message } = req.cleanData;

    const safeUsername = escapeHtml(username);
    const safeMessage = escapeHtml(message);

    // শুধুমাত্র আপনার ইমেইলে নোটিফিকেশন মেসেজ যাবে
    await resendEmail({
      to: process.env.EMAIL_TO,
      subject: `📩 New Contact: ${username}`,
      text: `Name: ${username}\nEmail: ${email}\nMessage: ${message}\nSent at: ${new Date().toLocaleString()}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2 style="color: #8b5cf6;">New Contact Message</h2>
          <p><strong>Name:</strong> ${safeUsername}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Message:</strong></p>
          <p style="background: #f3f4f6; padding: 15px; border-radius: 5px; white-space: pre-wrap;">
            ${safeMessage}
          </p>
          <hr>
          <p style="color: #6b7280; font-size: 12px;">
            Sent at: ${new Date().toLocaleString()}
          </p>
        </div>
      `
    });

    return res.json({
      success: true,
      message: "Message sent successfully! We'll get back to you soon."
    });

  } catch (error) {
    console.error('Contact error:', error);
    return res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again later.'
    });
  }
};