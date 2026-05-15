import { motion } from "framer-motion";
import { Star } from "lucide-react";

const featured = [
  {
    quote: "This team made our relocation from Edinburgh to London completely stress-free. I cannot recommend them highly enough.",
    name: "Laura Christie",
    role: "Buyer, London",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120",
  },
  {
    quote: "The rental management service is outstanding. My properties have never been better looked after.",
    name: "David Kane",
    role: "Landlord, Manchester",
    img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=120",
  },
];

const small = [
  { quote: "Honest, attentive, and quick to respond at every step.", name: "Priya Shah", role: "Buyer, Bristol", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120" },
  { quote: "They found us a home we did not think existed within budget.", name: "Tom Reilly", role: "Buyer, Leeds", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120" },
  { quote: "Smooth letting process, transparent every step of the way.", name: "Anna Lewis", role: "Tenant, London", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120" },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-accent text-accent" />)}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="px-6 lg:px-10 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="label-eyebrow text-accent">Testimonials</span>
          <h2 className="mt-4 text-4xl lg:text-6xl text-foreground leading-tight">
            The Verdict <span className="italic">Of Excellence</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {featured.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-ink text-cream rounded-2xl p-8 lg:p-10"
            >
              <Stars />
              <p className="mt-6 font-serif text-2xl lg:text-3xl leading-snug">"{t.quote}"</p>
              <div className="mt-8 flex items-center gap-3">
                <img src={t.img} alt="" className="w-11 h-11 rounded-full object-cover" />
                <div>
                  <div className="text-sm text-cream">{t.name}</div>
                  <div className="text-xs text-cream/50">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {small.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-7"
            >
              <Stars />
              <p className="mt-4 text-foreground/90 leading-relaxed">"{t.quote}"</p>
              <div className="mt-6 flex items-center gap-3">
                <img src={t.img} alt="" className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <div className="text-sm text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
