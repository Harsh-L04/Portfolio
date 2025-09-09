import React, { useState, useRef } from "react";
import { Send } from "lucide-react";
import { useTheme } from "../context/Themecontext";
import { motion, useInView } from "framer-motion";
import { containervariants, itemvariants } from "../utils/helper";

export default function Contact() {
  const { isDark } = useTheme();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const sectionRef = useRef(null);
  const isInview = useInView(sectionRef, { once: true, margin: "100px" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("Sending...");
  
    try {
      const res = await fetch("http://localhost:5000/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
  
      console.log("📡 Raw response:", res);
  
      const data = await res.json();
      console.log("📡 Parsed response:", data);
  
      if (data.success) {
        setStatus(data.message || "Message sent successfully! 🎉 I'll get back to you soon.");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus(data.error || "Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error("❌ Network error:", err);
      setStatus("Network error. Please try again or contact me directly.");
    } finally {
      setIsLoading(false);
    }
  };
  
  
  return (
    <section
      ref={sectionRef}
      id="contact"
      className={`py-24 px-6 relative overflow-hidden ${
        isDark ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Decorative background blur */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute top-40 right-1/4 w-72 h-72 rounded-full blur-3xl opacity-5 ${
            isDark ? "bg-blue-500" : "bg-blue-400"
          }`}
        />
        <div
          className={`absolute bottom-40 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-5 ${
            isDark ? "bg-purple-500" : "bg-purple-400"
          }`}
        />
      </div>

      {/* Section Content */}
      <motion.div
        initial="hidden"
        animate={isInview ? "visible" : "hidden"}
        variants={containervariants}
        className="max-w-2xl mx-auto relative z-10 text-center mb-10"
      >
        <motion.h2
          variants={itemvariants}
          className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight"
        >
          Get In <span className="text-blue-500">Touch</span>
        </motion.h2>

        <motion.p
          variants={itemvariants}
          className={`mt-2 text-xl ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Ready to start your next project? Let's discuss how we can bring your
          ideas to life.
        </motion.p>
      </motion.div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className={`w-full max-w-lg mx-auto rounded-2xl shadow-md border p-6 md:p-8 space-y-4 relative z-10 ${
          isDark
            ? "bg-gray-900/50 border-gray-800"
            : "bg-white border-gray-200"
        }`}
      >
        <h3 className="text-lg font-semibold mb-2 text-left">
          Send me a message
        </h3>

        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            disabled={isLoading}
            className={`w-full rounded-lg border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-300 disabled:opacity-50 ${
              isDark ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400" : "bg-white border-gray-300"
            }`}
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            disabled={isLoading}
            className={`w-full rounded-lg border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-300 disabled:opacity-50 ${
              isDark ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400" : "bg-white border-gray-300"
            }`}
          />
        </div>

        <textarea
          name="message"
          rows="5"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
          disabled={isLoading}
          className={`w-full rounded-lg border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-300 disabled:opacity-50 ${
            isDark ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400" : "bg-white border-gray-300"
          }`}
        />

        <button
          type="submit"
          className="flex items-center justify-center gap-2 w-full md:w-auto rounded-lg bg-blue-600 text-white px-5 py-2.5 font-medium hover:bg-blue-700 transition disabled:opacity-60 disabled:cursor-not-allowed"
          disabled={isLoading}
        >
          <Send className="h-4 w-4" />
          {isLoading ? "Sending..." : "Send Message"}
        </button>

        {status && (
          <p className={`text-sm mt-2 text-left ${
            status.includes("successfully") ? "text-green-600" : 
            status.includes("Sending") ? "text-blue-600" : "text-red-600"
          }`}>
            {status}
          </p>
        )}
      </form>
      
     
    </section>
  );
}