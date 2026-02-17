import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { useState, FormEvent } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Contact</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3">
            Let's <span className="gradient-gold-text">Work Together</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Whether you need SEO expertise, financial services, or a digital partner — I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-10">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3"
          >
            {submitted ? (
              <div className="glass-card rounded-xl p-10 text-center">
                <div className="gradient-gold w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send size={22} className="text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">Message Sent!</h3>
                <p className="text-muted-foreground">Thank you for reaching out. I'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card rounded-xl p-7 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      className="w-full bg-secondary border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      className="w-full bg-secondary border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Subject</label>
                  <input
                    type="text"
                    required
                    placeholder="How can I help?"
                    className="w-full bg-secondary border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full bg-secondary border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="gradient-gold text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity w-full sm:w-auto"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 space-y-6"
          >
            <div className="glass-card rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="gradient-gold p-2 rounded-lg">
                  <Mail size={18} className="text-primary-foreground" />
                </div>
                <h3 className="font-semibold">Email</h3>
              </div>
              <a href="mailto:taimoor@example.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                taimoor@example.com
              </a>
            </div>

            <div className="glass-card rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="gradient-gold p-2 rounded-lg">
                  <MapPin size={18} className="text-primary-foreground" />
                </div>
                <h3 className="font-semibold">Location</h3>
              </div>
              <p className="text-sm text-muted-foreground">Pakistan — Serving U.S. & Global Clients</p>
            </div>

            <div className="glass-card rounded-xl p-6">
              <h3 className="font-semibold mb-3">Find Me Online</h3>
              <div className="flex flex-wrap gap-2">
                {["Fiverr", "Upwork", "LinkedIn", "GitHub"].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="text-xs border border-primary/30 text-primary px-3 py-1.5 rounded-full hover:bg-primary/10 transition-colors"
                  >
                    {platform} ↗
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
