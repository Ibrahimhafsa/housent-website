import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactCTA() {
  return (
    <section id="contact" className="bg-ink text-cream px-6 lg:px-10 py-24 lg:py-32">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif text-5xl lg:text-7xl leading-tight text-cream"
        >
          Ready to Find Your <span className="italic text-accent">Next Home?</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-cream/60 text-lg max-w-2xl mx-auto"
        >
          Speak to one of our UK property experts today. No pressure, no fees, just honest advice.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <a href="#" className="px-7 py-4 rounded-full bg-accent text-cream text-sm hover:bg-accent/90 transition">
            Book a Consultation
          </a>
          <a href="#listings" className="px-7 py-4 rounded-full border border-cream/30 text-cream text-sm hover:bg-cream hover:text-ink transition">
            Browse Properties
          </a>
        </motion.div>

        <div className="mt-20 grid sm:grid-cols-3 gap-8 text-left">
          {[
            { icon: Mail, label: "Email", v: "hello@housent.co.uk" },
            { icon: Phone, label: "Phone", v: "+44 20 7946 0321" },
            { icon: MapPin, label: "Office", v: "12 Finsbury Square, London EC2A 1AB" },
          ].map((c) => (
            <div key={c.label} className="border-t border-cream/15 pt-6">
              <c.icon className="w-5 h-5 text-accent" />
              <div className="mt-3 text-xs uppercase tracking-widest text-cream/50">{c.label}</div>
              <div className="mt-1 text-cream">{c.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
