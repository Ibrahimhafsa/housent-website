import { motion } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const points = [
  { t: "Transparent Pricing", b: "No surprise fees. What you see is what you pay." },
  { t: "Local Market Experts", b: "Our agents know every postcode inside out." },
  { t: "End-to-End Support", b: "From viewings to keys in hand, we guide you." },
  { t: "Regulated and Trusted", b: "Fully FCA compliant and RICS accredited." },
];

export default function Excellence() {
  const [open, setOpen] = useState(0);
  return (
    <section id="about" className="px-6 lg:px-10 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="label-eyebrow text-accent">Excellence</span>
          <h2 className="mt-4 text-4xl lg:text-6xl text-foreground leading-tight">
            Architecting Trust In <span className="italic">Every Square Metre</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg">
            We combine deep market knowledge with honest advice to help you find the right property at the right price.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="aspect-[4/5] rounded-2xl overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80"
              alt="Property exterior"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="divide-y divide-border border-y border-border">
            {points.map((p, i) => {
              const isOpen = open === i;
              return (
                <div key={p.t}>
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="w-full flex items-center justify-between py-6 text-left group"
                  >
                    <span className="font-serif text-2xl lg:text-3xl text-foreground group-hover:text-accent transition-colors">
                      {p.t}
                    </span>
                    <span className="text-accent">
                      {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </span>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-muted-foreground max-w-md">{p.b}</p>
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
