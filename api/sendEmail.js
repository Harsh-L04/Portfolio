// Send email using Resend
const data = await resend.emails.send({
    from: "Portfolio Contact <onboarding@resend.dev>", // ← This can stay the same
    to: "202201493@dau.ac.in", // ← REPLACE THIS with your email
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
    // ... rest of the email config
  });