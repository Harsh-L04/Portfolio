// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();
const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);

app.use(cors());
app.use(express.json());

app.post("/api/sendEmail", async (req, res) => {
    try {
      const { name, email, message } = req.body;
      console.log("Incoming message:", { name, email, message });
  
      const data = await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "202201493@daiict.ac.in",  // replace with your verified email
        subject: `Message from ${name}`,
        text: `${message}\n\nSender email: ${email}`,
      });
  
      console.log("Email sent:", data);
  
      return res.status(200).json({
        success: true,
        id: data.id,
        message: "Email sent successfully!",
      });
    } catch (err) {
      console.error("Email error:", err);
  
      return res.status(500).json({
        success: false,
        error: err.message,
      });
    }
  });
  
app.listen(5000, () => console.log("Server running on http://localhost:5000"));
