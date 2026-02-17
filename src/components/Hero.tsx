import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(42 78% 55%) 1px, transparent 1px), linear-gradient(90deg, hsl(42 78% 55%) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-primary text-sm font-semibold tracking-widest uppercase mb-6">
            Mathematics • Finance • Digital Innovation
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6 text-balance">
            Bridging Mathematics,{" "}
            <span className="gradient-gold-text">Finance</span>, and{" "}
            <span className="gradient-gold-text">Digital Innovation</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-balance">
            Digital entrepreneur, SEO strategist, and freelance finance professional — 
            transforming data-driven insights into measurable business growth.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="gradient-gold text-primary-foreground px-8 py-3.5 rounded-lg font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity glow-gold"
            >
              <Briefcase size={18} /> Hire Me
            </a>
            <a
              href="#portfolio"
              className="border border-primary/30 text-primary px-8 py-3.5 rounded-lg font-semibold flex items-center gap-2 hover:bg-primary/10 transition-colors"
            >
              View Portfolio <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="text-muted-foreground hover:text-foreground px-8 py-3.5 rounded-lg font-semibold flex items-center gap-2 transition-colors"
            >
              <Mail size={18} /> Contact
            </a>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10"
        >
          {[
            { value: "100+", label: "Websites Built" },
            { value: "5+", label: "Years Experience" },
            { value: "2", label: "Awards Won" },
            { value: "50+", label: "Happy Clients" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-gold-text font-display">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
