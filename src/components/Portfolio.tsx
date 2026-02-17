import { motion } from "framer-motion";
import { ExternalLink, TrendingUp } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Niche Blog Network",
    category: "SEO & Content",
    description: "Built and ranked 30+ niche blogs generating $2K+/mo in affiliate revenue through strategic keyword research and link building.",
    result: "Top 3 Google Rankings",
  },
  {
    title: "U.S. Payroll Management System",
    category: "Bookkeeping",
    description: "Managed payroll processing for 15+ U.S. small businesses, ensuring tax compliance and timely disbursements via QuickBooks.",
    result: "100% Client Retention",
  },
  {
    title: "SaaS Landing Page Optimization",
    category: "Digital Marketing",
    description: "Redesigned and optimized landing pages for a SaaS startup, improving conversion rates by 45% through A/B testing and CRO.",
    result: "45% Conversion Uplift",
  },
  {
    title: "Financial Forecasting ML Model",
    category: "Machine Learning",
    description: "Developed a time-series forecasting model for stock price prediction using LSTM networks and mathematical optimization techniques.",
    result: "92% Accuracy Rate",
  },
  {
    title: "Multi-Channel Ad Campaign",
    category: "Google Ads",
    description: "Managed Google Ads campaigns across search, display, and YouTube, driving 200K+ impressions and 3x ROAS for local businesses.",
    result: "3x Return on Ad Spend",
  },
  {
    title: "Content Marketing Platform",
    category: "Web Development",
    description: "Built a full-featured blog platform with custom CMS, optimized for Core Web Vitals and SEO, serving 50K+ monthly readers.",
    result: "50K Monthly Visitors",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="section-padding bg-card/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Portfolio</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3">
            Featured <span className="gradient-gold-text">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            A curated selection of projects spanning SEO, finance, web development, and machine learning.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card rounded-xl p-6 hover:border-primary/30 transition-colors group cursor-pointer"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {project.category}
                </span>
                <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.description}</p>
              <div className="flex items-center gap-2 text-sm font-medium text-primary">
                <TrendingUp size={14} />
                {project.result}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
