import { motion } from "framer-motion";
import { Calculator, BarChart3, Search, Megaphone, PenTool, BrainCircuit } from "lucide-react";

const services = [
  {
    icon: Calculator,
    title: "Payroll & Bookkeeping",
    description: "Accurate payroll processing and bookkeeping for U.S. businesses using QuickBooks, Xero, and ADP — ensuring compliance and peace of mind.",
  },
  {
    icon: Search,
    title: "SEO Strategy",
    description: "Data-driven SEO audits, keyword research, and on-page optimization that consistently deliver top-3 Google rankings for competitive niches.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Full-funnel marketing campaigns across Google Ads, social media, and email — maximizing ROI through continuous testing and optimization.",
  },
  {
    icon: PenTool,
    title: "Content Creation",
    description: "High-quality blog posts, website copy, and marketing content crafted to engage audiences and convert visitors into loyal customers.",
  },
  {
    icon: BarChart3,
    title: "Financial Consulting",
    description: "Mathematical analysis and financial modeling to help businesses make smarter decisions — from budgeting to revenue forecasting.",
  },
  {
    icon: BrainCircuit,
    title: "ML & Data Analysis",
    description: "Custom machine learning models and data pipelines for predictive analytics, with a strong mathematical foundation for reliable results.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Services</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3">
            What I <span className="gradient-gold-text">Offer</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            From financial operations to digital growth — comprehensive services built on mathematical precision.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card rounded-xl p-7 hover:border-primary/30 hover:glow-gold transition-all group"
            >
              <div className="gradient-gold p-3 rounded-lg w-fit mb-5 group-hover:scale-110 transition-transform">
                <service.icon size={22} className="text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-3">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center flex flex-col sm:flex-row justify-center gap-4"
        >
          <a
            href="#contact"
            className="gradient-gold text-primary-foreground px-8 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Book a Session
          </a>
          <a
            href="#contact"
            className="border border-primary/30 text-primary px-8 py-3.5 rounded-lg font-semibold hover:bg-primary/10 transition-colors"
          >
            Hire Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
