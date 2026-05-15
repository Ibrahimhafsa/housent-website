import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBanner from "@/components/StatsBanner";
import MarqueeTicker from "@/components/MarqueeTicker";
import Excellence from "@/components/Excellence";
import PropertySolutions from "@/components/PropertySolutions";
import Listings from "@/components/Listings";
import Expertise from "@/components/Expertise";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import BlogSection from "@/components/BlogSection";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Housent UK — Find Your Future Home with Confidence" },
      {
        name: "description",
        content:
          "Browse thousands of verified UK properties across London, Manchester, Bristol and beyond. Honest advice, transparent pricing, FCA regulated.",
      },
      { property: "og:title", content: "Housent UK — Premium UK Property Portal" },
      { property: "og:description", content: "Verified UK properties with honest, expert guidance." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@400;500;600&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <StatsBanner />
      <MarqueeTicker />
      <Excellence />
      <PropertySolutions />
      <Listings />
      <Expertise />
      <FAQ />
      <Testimonials />
      <BlogSection />
      <ContactCTA />
      <Footer />
    </main>
  );
}
