import { sendEmail } from '../models/email.js';

export const handleContact = async (req, res) => {
  try {
    const { username, email, message } = req.cleanData;
    
    // 1. Send notification to admin
    await sendEmail({
      to: process.env.EMAIL_TO,
      subject: `📩 New Contact: ${username}`,
      text: `
        Name: ${username}
        Email: ${email}
        Message: ${message}
        
        Sent at: ${new Date().toLocaleString()}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2 style="color: #8b5cf6;">New Contact Message</h2>
          <p><strong>Name:</strong> ${username}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p style="background: #f3f4f6; padding: 15px; border-radius: 5px;">
            ${message}
          </p>
          <hr>
          <p style="color: #6b7280; font-size: 12px;">
            Sent at: ${new Date().toLocaleString()}
          </p>
        </div>
      `
    });
    
    // 2. Send auto-reply to user
    await sendEmail({
      to: email,
      subject: '🙏 Thank you for contacting us!',
      text: `
        Dear ${username},
        
        Thank you for reaching out to us. We've received your message and will get back to you within 24-48 hours.
        
        Your message:
        ${message}
        
        Best regards,
        Your Team
        
        This is an automated response.
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2 style="color: #8b5cf6;">Thank You for Contacting Us!</h2>
          <p>Dear ${username},</p>
          <p>We've received your message and will get back to you within 24-48 hours.</p>
          <div style="background: #f3f4f6; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h4 style="margin-top: 0;">Your Message:</h4>
            <p>${message}</p>
          </div>
          <hr>
          <p style="color: #6b7280;">Best regards,<br><strong>Your Team</strong></p>
          <p style="color: #9ca3af; font-size: 12px;">This is an automated response.</p>
        </div>
      `
    });
    
    res.json({
      success: true,
      message: 'Message sent successfully! We\'ll get back to you soon.'
    });
    
  } catch (error) {
    console.error('Contact error:', error);
    res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again later.'
    });
  }
};