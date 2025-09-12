// api/sendEmail.js
import { Resend } from "resend";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, message } = req.body;

    const resend = new Resend(process.env.RESEND_API_KEY);

    const data = await resend.emails.send({
      from: "onboarding@resend.dev", // must be a verified sender
      to: "202201493@daiict.ac.in",  // replace with your verified email
      subject: `Message from ${name}`,
      text: `${message}\n\nSender email: ${email}`,
    });

    return res.status(200).json({
      success: true,
      id: data.id,
      message: "Email sent successfully!",
    });
  } catch (err) {
    console.error("Email error:", err);
    return res.status(500).json({ success: false, error: err.message });
  }
}
