import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const listings = [
  {
    img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=900&q=80",
    badge: "For Sale",
    badgeColor: "bg-accent text-cream",
    title: "The Greenwich Villa",
    price: "£875,000",
    details: "4 bed · 2 bath · 1,850 sq ft",
    loc: "London SE10",
  },
  {
    img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=900&q=80",
    badge: "To Let",
    badgeColor: "bg-ink text-cream",
    title: "Maplewood Estate",
    price: "£3,200 pcm",
    details: "3 bed · 2 bath · 1,400 sq ft",
    loc: "Surrey",
  },
  {
    img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=900&q=80",
    badge: "For Sale",
    badgeColor: "bg-accent text-cream",
    title: "The Kensington Flat",
    price: "£1,100,000",
    details: "2 bed · 2 bath · 950 sq ft",
    loc: "London W8",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2V8ZW58MHx8MHx8fDA%3D",
    badge: "New",
    badgeColor: "bg-emerald-600 text-white",
    title: "Cotswolds Retreat",
    price: "£620,000",
    details: "5 bed · 3 bath · 2,600 sq ft",
    loc: "Gloucestershire",
  },
];

export default function Listings() {
  return (
    <section id="listings" className="px-6 lg:px-10 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-end justify-between gap-6 mb-12"
        >
          <div className="max-w-2xl">
            <span className="label-eyebrow text-accent">Properties</span>
            <h2 className="mt-4 text-4xl lg:text-6xl text-foreground leading-tight">
              Explore Our <span className="italic">Signature Listings</span>
            </h2>
          </div>
          <a href="#" className="text-sm text-foreground hover:text-accent transition-colors">
            
          </a>
        </motion.div>

        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 -mx-6 px-6 lg:mx-0 lg:px-0 lg:grid lg:grid-cols-4 lg:overflow-visible">
          {listings.map((l, i) => (
            <motion.article
              key={l.title}
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group snap-start shrink-0 w-[80vw] sm:w-[60vw] lg:w-auto bg-card rounded-2xl overflow-hidden border border-border hover:shadow-2xl transition-shadow"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={l.img}
                  alt={l.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] uppercase tracking-widest ${l.badgeColor}`}>
                  {l.badge}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-serif text-2xl text-foreground">{l.title}</h3>
                <p className="mt-1 text-accent font-medium">{l.price}</p>
                <p className="mt-3 text-sm text-muted-foreground">{l.details}</p>
                <div className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="w-3 h-3" /> {l.loc}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
