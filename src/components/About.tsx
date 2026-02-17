import { motion } from "framer-motion";
import { Award, BookOpen, Globe, TrendingUp } from "lucide-react";

const highlights = [
  { icon: BookOpen, text: "BS Mathematics — Finance & ML Specialization" },
  { icon: TrendingUp, text: "5+ Years in Marketing & Content Creation" },
  { icon: Globe, text: "100+ Websites & Blogs Built, Ranked & Monetized" },
  { icon: Award, text: "2 Awards — iSkill Youth Summit 2024" },
];

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-14 items-start"
        >
          {/* Left */}
          <div>
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">About Me</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 mb-6">
              Where <span className="gradient-gold-text">Mathematics</span> Meets{" "}
              <span className="gradient-gold-text">Entrepreneurship</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm Taimoor Raza — a final-year BS Mathematics student with a deep passion for finance,
                machine learning, and digital innovation. Over the past five years, I've merged my
                mathematical expertise with hands-on digital marketing to build, rank, and monetize
                over 100 websites and blogs.
              </p>
              <p>
                As a freelancer on Fiverr and Upwork, I specialize in Payroll and Bookkeeping services
                for U.S.-based clients, and I'm currently expanding my expertise into U.S. Tax preparation
                to offer even greater value.
              </p>
              <p>
                My journey is fueled by curiosity and the belief that mathematics is the universal language
                of problem-solving — whether it's optimizing an SEO campaign, building a predictive ML model,
                or streamlining a client's financial operations.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {["Writing Bee", "AiSols", "iSkills"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-sm border border-primary/30 text-primary px-4 py-1.5 rounded-full hover:bg-primary/10 transition-colors"
                >
                  {link} ↗
                </a>
              ))}
            </div>
          </div>

          {/* Right — highlights */}
          <div className="space-y-5">
            {highlights.map((item, i) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card rounded-xl p-5 flex items-start gap-4"
              >
                <div className="gradient-gold p-2.5 rounded-lg shrink-0">
                  <item.icon size={20} className="text-primary-foreground" />
                </div>
                <p className="text-foreground font-medium">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
