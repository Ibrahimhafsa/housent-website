import { motion } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { q: "How do I value my property in the current UK market?", a: "Our local agents provide a free, no-obligation valuation based on recent comparable sales in your area." },
  { q: "What are the costs involved in buying a home?", a: "Typical costs include stamp duty, solicitor fees, survey costs and mortgage arrangement fees. We walk you through all of these." },
  { q: "How long does a property sale take in the UK?", a: "On average, a sale takes 12 to 16 weeks from offer accepted to completion, depending on chain complexity." },
  { q: "Do you cover properties outside of London?", a: "Yes. We have active listings and agents across England, Scotland and Wales." },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="px-6 lg:px-10 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-end justify-between gap-6 mb-16"
        >
          <div>
            <span className="label-eyebrow text-accent">FAQ</span>
            <h2 className="mt-4 text-4xl lg:text-6xl text-foreground leading-tight">
              Everything You <span className="italic">Need To Know</span>
            </h2>
          </div>
          <a href="#contact" className="px-6 py-3.5 rounded-full border border-foreground text-foreground text-sm hover:bg-foreground hover:text-cream transition">
            Ask a Question
          </a>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="aspect-[4/5] rounded-2xl overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80"
              alt="Reading brochure"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="divide-y divide-border border-y border-border">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q}>
                  <button onClick={() => setOpen(isOpen ? -1 : i)} className="w-full flex items-center justify-between gap-6 py-6 text-left">
                    <span className="font-serif text-xl lg:text-2xl text-foreground">{f.q}</span>
                    <span className="text-accent shrink-0">
                      {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </span>
                  </button>
                  <motion.div initial={false} animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }} className="overflow-hidden">
                    <p className="pb-6 text-muted-foreground">{f.a}</p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
