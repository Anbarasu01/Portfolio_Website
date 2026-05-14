"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Failed to send message.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again later.");
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-black/20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            Have a project in mind or just want to say hi? Feel free to reach out.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-6">Let's talk about your next project!</h3>
              <div className="space-y-6 text-foreground/80">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-background flex items-center justify-center rounded-full text-accent-primary">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-foreground/50">Email</div>
                    <a href="mailto:hello@anbarasu.dev" className="text-lg hover:text-accent-primary transition-colors">
                      hello@anbarasu.dev
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-background flex items-center justify-center rounded-full text-accent-secondary">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-foreground/50">Location</div>
                    <div className="text-lg">India</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 bg-white/5 border border-white/10 p-8 rounded-2xl">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  suppressHydrationWarning
                  className="bg-background border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent-primary/50 transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  suppressHydrationWarning
                  className="bg-background border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent-primary/50 transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-background border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent-primary/50 transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>
              
              {status === "error" && <p className="text-red-400 text-sm">{errorMessage}</p>}
              {status === "success" && <p className="text-green-400 text-sm">Message sent successfully!</p>}
              
              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                suppressHydrationWarning
                className="bg-foreground text-background font-medium py-3 rounded-lg hover:scale-[1.02] active:scale-[0.98] transition-transform flex items-center justify-center gap-2 disabled:opacity-70 disabled:hover:scale-100 mt-2"
              >
                {status === "loading" ? "Sending..." : status === "success" ? "Sent!" : "Send Message"}
                {status !== "loading" && status !== "success" && <Send size={18} />}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
