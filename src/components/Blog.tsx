import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";

const posts = [
  {
    title: "How I Ranked 30 Niche Blogs on Google's First Page",
    summary: "A deep dive into the SEO framework I developed using mathematical keyword analysis, topical clustering, and strategic link building.",
    category: "SEO",
    date: "Jan 2026",
  },
  {
    title: "Machine Learning in Finance: A Mathematician's Perspective",
    summary: "Exploring how LSTM networks and time-series models can forecast financial markets with higher accuracy than traditional statistical methods.",
    category: "Machine Learning",
    date: "Dec 2025",
  },
  {
    title: "The Complete Guide to Google Ads for Small Businesses",
    summary: "Step-by-step strategies I use to achieve 3x ROAS for local businesses — from campaign structure to bid optimization.",
    category: "Digital Marketing",
    date: "Nov 2025",
  },
  {
    title: "Why Every Freelancer Needs to Understand U.S. Payroll Tax",
    summary: "Key lessons from managing payroll for U.S. clients, including common pitfalls, compliance requirements, and software recommendations.",
    category: "Finance",
    date: "Oct 2025",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="section-padding bg-card/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Blog</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3">
            Insights & <span className="gradient-gold-text">Ideas</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Thoughts on SEO, digital marketing, finance, and the intersection of math and technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-xl p-7 hover:border-primary/30 transition-colors group cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Clock size={12} /> {post.date}
                </span>
              </div>
              <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{post.summary}</p>
              <span className="text-sm font-medium text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                Read More <ArrowRight size={14} />
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
