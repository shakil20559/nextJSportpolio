import { sendEmail } from '../models/email.js';

// HTML এস্কেপ করার একটি সাধারণ হেলপার ফাংশন
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

    // সিকিউরিটির জন্য ইনপুট ক্লিন করা
    const safeUsername = escapeHtml(username);
    const safeMessage = escapeHtml(message);

    // ১. এডমিন নোটিফিকেশন ইমেইল
    const adminEmailPromise = sendEmail({
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

    // ২. ইউজার অটোরিপ্লাই ইমেইল
    const userEmailPromise = sendEmail({
      to: email,
      subject: '🙏 Thank you for contacting me!',
      text: `Dear ${username},\n\nThank you for reaching out. I have received your message and will get back to you within 24-48 hours.\n\nYour message:\n${message}\n\nBest regards,\nShakil`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2 style="color: #8b5cf6;">Thank You for Reaching Out!</h2>
          <p>Dear ${safeUsername},</p>
          <p>I've received your message and will get back to you within 24-48 hours.</p>
          <div style="background: #f3f4f6; padding: 15px; border-radius: 5px; margin: 20px 0; white-space: pre-wrap;">
            <h4 style="margin-top: 0;">Your Message:</h4>
            <p>${safeMessage}</p>
          </div>
          <hr>
          <p style="color: #6b7280;">Best regards,<br><strong>Shakil</strong></p>
          <p style="color: #9ca3af; font-size: 12px;">This is an automated response.</p>
        </div>
      `
    });

    // দুটো ইমেইল একসাথে সমান্তরালে পাঠানো
    await Promise.all([adminEmailPromise, userEmailPromise]);

    return res.json({
      success: true,
      message: 'Message sent successfully! We\'ll get back to you soon.'
    });

  } catch (error) {
    console.error('Contact error:', error);
    return res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again later.'
    });
  }
};
