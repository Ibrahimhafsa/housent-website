import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { Link } from "@tanstack/react-router";

const posts = [
  {
    id: "uk-property-prices",
    img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=900&q=80",
    date: "11 April 2024",
    title: "UK Property Prices: What Buyers Should Expect in 2024",
    tag: "Market Report",
  },
  {
    id: "first-time-buyer-guide",
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=900&q=80",
    date: "14 October 2023",
    title: "First-Time Buyer Guide: Navigating Stamp Duty Relief",
    tag: "Buyer Guide",
  },
  {
    id: "buy-to-let-investments",
    img: "https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=900&q=80",
    date: "25 November 2022",
    title: "Buy-to-Let Investments: Is It Still Worth It in the UK?",
    tag: "Investment",
  },
];

export default function BlogSection() {
  return (
    <section id="pages" className="px-6 lg:px-10 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="label-eyebrow text-accent">Insights</span>
          <h2 className="mt-4 text-4xl lg:text-6xl text-foreground leading-tight">
            Stay Ahead <span className="italic">of the Market</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-5">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs">{p.tag}</span>
                <span className="text-xs text-muted-foreground">{p.date}</span>
              </div>
              <h3 className="font-serif text-2xl text-foreground group-hover:text-accent transition-colors">{p.title}</h3>
              <Link
                to="/insights/$articleId"
                params={{ articleId: p.id }}
                className="mt-4 inline-flex items-center gap-1.5 text-sm text-foreground hover:text-accent transition-colors"
              >
                Read Article <ArrowUpRight className="w-4 h-4" />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
