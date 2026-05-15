import { motion } from "framer-motion";
import { ArrowUpRight, Building2, Home, KeyRound } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Buy and Sell",
    desc: "From first-time buyers to seasoned investors, we handle every transaction with care and precision.",
    tags: ["Valuations", "Legal Support", "Market Reports"],
  },
  {
    icon: KeyRound,
    title: "Rental Management",
    desc: "We manage your rental portfolio so you do not have to. Full tenant vetting, maintenance coordination and rent collection.",
    tags: ["Tenant Vetting", "Rent Collection", "Repairs"],
  },
  {
    icon: Building2,
    title: "Property Management",
    desc: "Let us handle the day-to-day so your investment continues to grow without the hassle.",
    tags: ["Inspections", "Compliance", "Reporting"],
  },
];

export default function PropertySolutions() {
  return (
    <section className="px-6 lg:px-10 py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="label-eyebrow text-accent">Solutions</span>
          <h2 className="mt-4 text-4xl lg:text-6xl text-foreground leading-tight">
            Our Complete <span className="italic">Property Solutions</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Whether you are buying, selling or renting, we have the expertise to guide you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&q=80"
                alt="Agent"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <div className="lg:col-span-7 flex flex-col gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group bg-card border border-border rounded-2xl p-8 hover:border-accent transition-colors"
              >
                <div className="flex items-start gap-6">
                  <div className="shrink-0 w-14 h-14 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                    <s.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-2xl lg:text-3xl text-foreground">{s.title}</h3>
                    <p className="mt-2 text-muted-foreground">{s.desc}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {s.tags.map((t) => (
                        <span key={t} className="px-3 py-1.5 rounded-full bg-muted text-xs text-foreground/70">
                          {t}
                        </span>
                      ))}
                    </div>
                    <a href="#" className="mt-5 inline-flex items-center gap-1.5 text-sm text-foreground hover:text-accent transition-colors">
                      Learn More <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
