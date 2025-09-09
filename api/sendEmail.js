import dotenv from "dotenv";
import { Resend } from "resend";

// force dotenv to load from root .env
dotenv.config({ path: "../.env" });

console.log("Loaded API key:", process.env.RESEND_API_KEY); // should NOT be undefined

const resend = new Resend(process.env.RESEND_API_KEY);

async function testEmail() {
  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "202201493@daiict.ac.in", // must match verified one
      subject: "Test Email",
      text: "Hello world"
    });    
  } catch (err) {
    console.error("Error:", err);
  }
}

testEmail();
