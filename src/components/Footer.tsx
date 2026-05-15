import { Instagram, Linkedin, Twitter } from "lucide-react";

const cols = [
  { t: "Locations", l: ["London", "Manchester", "Bristol", "Edinburgh", "Birmingham"] },
  { t: "Properties", l: ["For Sale", "To Let", "New Builds", "Commercial", "Investments"] },
  { t: "Company", l: ["About Us", "Careers", "Press", "Blog"] },
  { t: "Legal", l: ["Privacy Policy", "Terms of Use", "Cookie Policy"] },
];

export default function Footer() {
  return (
    <footer className="bg-cream border-t border-border px-6 lg:px-10 py-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <div className="flex items-end gap-1">
            <span className="font-serif text-3xl text-foreground">Housent</span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent mb-2.5" />
          </div>
          <p className="mt-4 text-muted-foreground max-w-xs">
            Your trusted property partner across the UK.
          </p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Linkedin, Twitter].map((I, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-ink hover:text-cream hover:border-ink transition">
                <I className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {cols.map((c) => (
            <div key={c.t}>
              <h4 className="label-eyebrow text-foreground mb-4">{c.t}</h4>
              <ul className="space-y-3">
                {c.l.map((x) => (
                  <li key={x}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">{x}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-border flex flex-wrap justify-between gap-3 text-xs text-muted-foreground">
        <span>© 2025 Housent UK. All rights reserved.</span>
        <span>Regulated by RICS</span>
      </div>
    </footer>
  );
}
