import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const headline = ["Find Your Future", "Home with Absolute", "Confidence"];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section ref={ref} id="top" className="pt-32 pb-20 lg:pt-40 lg:pb-28 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="label-eyebrow text-accent">Trusted in the UK</span>
          </motion.div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.02] text-foreground">
            {headline.map((line, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 + i * 0.12, ease: "easeOut" }}
                className="block"
              >
                {line === "Confidence" ? (
                  <>
                    <span>Confi</span>
                    <span className="italic text-accent">dence</span>
                    <span className="text-accent">.</span>
                  </>
                ) : (
                  line
                )}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 max-w-xl text-base lg:text-lg text-muted-foreground leading-relaxed"
          >
            Browse thousands of verified properties across London, Manchester, Bristol and beyond.
            We make moving simple.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a href="#listings" className="group inline-flex items-center gap-2 px-7 py-4 bg-ink text-cream rounded-full text-sm hover:bg-accent transition-colors">
              Explore Properties
              <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
            </a>
            <a href="#excellence" className="px-7 py-4 border border-foreground/20 text-foreground rounded-full text-sm hover:border-foreground transition">
              How It Works
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.95 }}
            className="mt-10 flex items-center gap-3"
          >
            <div className="flex -space-x-2">
              {[
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80",
                "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=80",
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80",
              ].map((src) => (
                <img key={src} src={src} className="w-8 h-8 rounded-full border-2 border-cream object-cover" alt="" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">Trusted by 10,000+ UK families</span>
          </motion.div>
        </div>

        <motion.div
          style={{ y }}
          className="lg:col-span-5 relative"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80"
              alt="Modern apartment building"
              className="w-full h-full object-cover"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="absolute -bottom-6 -left-6 lg:left-8 bg-cream border border-border rounded-2xl p-5 shadow-xl w-64"
          >
            <span className="inline-block px-2.5 py-1 rounded-full bg-accent text-cream text-[10px] uppercase tracking-widest">
              New Listing
            </span>
            <h4 className="mt-3 font-serif text-xl">Canary Wharf Penthouse</h4>
            <p className="mt-1 text-sm text-muted-foreground">From £1,250,000</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
