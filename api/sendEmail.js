// api/sendEmail.js
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  console.log('Function called with method:', req.method);
  
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false, 
      error: "Method not allowed. Use POST." 
    });
  }

  try {
    const { name, email, message } = req.body;
    console.log('Request body:', { name, email, message });

    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: "All fields (name, email, message) are required."
      });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: "Please provide a valid email address."
      });
    }

    // Check if API key exists
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY not found in environment variables');
      return res.status(500).json({
        success: false,
        error: "Server configuration error: Missing API key."
      });
    }

    console.log('Sending email...');

    // Sanitize input
    const sanitizedName = name.replace(/[<>]/g, '');
    const sanitizedMessage = message.replace(/[<>]/g, '');

    // Send email using Resend
    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "harshlad0411@gmail.com", // Replace with your actual email
      subject: `New Portfolio Message from ${sanitizedName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e1e5e9; border-radius: 8px;">
          <h2 style="color: #2563eb; margin-bottom: 20px;">New Contact Form Submission</h2>
          
          <div style="background-color: #f8fafc; padding: 15px; border-radius: 6px; margin-bottom: 15px;">
            <p style="margin: 5px 0;"><strong>Name:</strong> ${sanitizedName}</p>
            <p style="margin: 5px 0;"><strong>Email:</strong> ${email}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 15px; border: 1px solid #e2e8f0; border-radius: 6px;">
            <p style="margin: 5px 0;"><strong>Message:</strong></p>
            <div style="margin-top: 10px; line-height: 1.6;">${sanitizedMessage.replace(/\n/g, '<br>')}</div>
          </div>
          
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #e2e8f0;">
          <p style="color: #64748b; font-size: 12px; margin: 0;">
            This message was sent from your portfolio contact form.
          </p>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${sanitizedName}
Email: ${email}

Message:
${sanitizedMessage}

---
This message was sent from your portfolio contact form.
      `
    });

    console.log('Email sent successfully:', data);

    return res.status(200).json({ 
      success: true, 
      message: "Email sent successfully!",
      data: data
    });

  } catch (error) {
    console.error("Detailed error:", error);
    
    return res.status(500).json({ 
      success: false, 
      error: "Failed to send email. Please try again later.",
      details: error.message
    });
  }
}