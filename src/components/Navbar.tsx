import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Search, X } from "lucide-react";

const links = ["Homes", "Pages", "Properties", "About Us"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-cream/90 backdrop-blur border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-end gap-1">
          <span className="font-serif text-2xl tracking-tight text-foreground">Housent</span>
          <span className="w-1.5 h-1.5 rounded-full bg-accent mb-2" />
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <a key={l} href="#" className="text-sm text-foreground/80 hover:text-accent transition-colors">
              {l}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button className="p-2 rounded-full hover:bg-muted transition" aria-label="Search">
            <Search className="w-4 h-4" />
          </button>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full bg-ink text-cream text-sm hover:bg-accent transition-colors"
          >
            Contact Us
          </a>
        </div>

        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-cream border-t border-border"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {links.map((l) => (
                <a key={l} href="#" className="text-base text-foreground/80">{l}</a>
              ))}
              <a href="#contact" className="mt-2 px-5 py-3 rounded-full bg-ink text-cream text-sm text-center">
                Contact Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
