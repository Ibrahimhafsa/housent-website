import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const panels = [
  { t: "Structural Integrity", b: "Every property we list is surveyed and structurally assessed before it reaches the market." },
  { t: "Absolute Transparency", b: "We provide full disclosure on all fees, timelines and legal obligations before you commit." },
  { t: "Sustainable Build", b: "We prioritise energy-efficient and eco-conscious properties that meet modern UK building standards." },
  { t: "Personalised Advisory", b: "Our advisors build long-term relationships, not just one-off transactions." },
];

export default function Expertise() {
  const [open, setOpen] = useState(0);
  return (
    <section className="bg-ink text-cream px-6 lg:px-10 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5"
        >
          <span className="label-eyebrow text-accent">Expertise</span>
          <h2 className="mt-4 font-serif text-4xl lg:text-6xl leading-tight text-cream">
            Guide Our <span className="italic">Expertise</span>
          </h2>
          <p className="mt-6 text-cream/60 text-lg max-w-md">
            Years of UK market experience translated into results you can rely on.
          </p>
          <a
            href="#"
            className="mt-8 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-accent text-cream text-sm hover:bg-accent/90 transition"
          >
            View All Services <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>

        <div className="lg:col-span-7">
          {panels.map((p, i) => {
            const isOpen = open === i;
            return (
              <div key={p.t} className={`border-t border-cream/10 ${i === panels.length - 1 ? "border-b" : ""}`}>
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className={`w-full flex items-center justify-between py-7 text-left transition-all ${
                    isOpen ? "pl-5 border-l-2 border-accent" : ""
                  }`}
                >
                  <span className="font-serif text-2xl lg:text-3xl">{p.t}</span>
                  <span className="text-accent text-2xl">{isOpen ? "−" : "+"}</span>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <p className={`pb-7 text-cream/70 max-w-xl ${isOpen ? "pl-5" : ""}`}>{p.b}</p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
