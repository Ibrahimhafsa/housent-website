import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 10, suffix: "M+", label: "Properties Listed" },
  { value: 12, suffix: "k+", label: "Happy Clients" },
  { value: 15, suffix: "+ Yrs", label: "In Business" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);
  return (
    <span ref={ref}>
      {val}
      <span className="text-accent">{suffix}</span>
    </span>
  );
}

export default function StatsBanner() {
  return (
    <section className="bg-ink text-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20 grid grid-cols-2 lg:grid-cols-4 gap-10">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <div className="font-serif text-5xl lg:text-6xl text-cream">
              <Counter to={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-3 text-sm text-cream/60">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
