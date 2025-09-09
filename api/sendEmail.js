import dotenv from "dotenv";
import { Resend } from "resend";

// force dotenv to load from root .env
dotenv.config({ path: "../.env" });

console.log("Loaded API key:", process.env.RESEND_API_KEY); // should NOT be undefined

const resend = new Resend(process.env.RESEND_API_KEY);


testEmail();
