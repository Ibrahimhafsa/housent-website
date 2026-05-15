import { createFileRoute, useParams } from "@tanstack/react-router";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Home, KeyRound, Building2 } from "lucide-react";
import { Link } from "@tanstack/react-router";

const solutionsData: Record<string, any> = {
  "buy-and-sell": {
    icon: Home,
    title: "Buy and Sell",
    desc: "From first-time buyers to seasoned investors, we handle every transaction with care and precision.",
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80",
    content: `
      Our buy and sell service is designed to provide you with a seamless experience. We offer expert valuations, legal support, and detailed market reports to ensure you get the best value for your property. Whether you're looking for your dream home or a profitable investment, our team is here to guide you every step of the way.
      
      We understand that buying or selling a property is one of the most significant decisions you'll ever make. That's why we prioritize transparency, communication, and personalized service. Our extensive network and deep understanding of the UK property market allow us to connect buyers with the right properties and help sellers reach a wide audience of potential buyers.
      
      From the initial consultation to the final completion, we handle all the details, so you don't have to. Our goal is to make the process as stress-free as possible while achieving the best possible outcome for you.
    `,
    features: ["Professional Valuations", "Marketing Strategy", "Legal Coordination", "Negotiation Support"],
  },
  "rental-management": {
    icon: KeyRound,
    title: "Rental Management",
    desc: "We manage your rental portfolio so you do not have to. Full tenant vetting, maintenance coordination and rent collection.",
    img: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=1200&q=80",
    content: `
      Managing a rental property can be time-consuming and complex. Our comprehensive rental management service covers everything from tenant vetting and rent collection to maintenance coordination. We ensure that your properties are well-maintained and your tenants are satisfied, allowing you to enjoy the benefits of your investment without the stress.
      
      We believe that a successful rental property starts with finding the right tenants. Our rigorous vetting process includes background checks, credit reports, and reference verifications to ensure you have reliable and responsible occupants. Once a tenant is in place, we handle all day-to-day interactions, including rent collection and addressing any maintenance issues promptly.
      
      Our team of property experts stays up-to-date with the latest rental regulations and compliance requirements, ensuring that your property meets all legal standards. With our proactive approach, we help you minimize vacancies and maximize your rental income.
    `,
    features: ["Tenant Vetting", "Rent Collection", "24/7 Maintenance", "Legal Compliance"],
  },
  "property-management": {
    icon: Building2,
    title: "Property Management",
    desc: "Let us handle the day-to-day so your investment continues to grow without the hassle.",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
    content: `
      Our property management service is tailored to the needs of busy investors and property owners. We handle day-to-day operations, including regular inspections, compliance checks, and detailed reporting. Our goal is to maximize the value of your assets and ensure long-term growth through professional and proactive management.
      
      We take a holistic approach to property management, focusing on preserving the condition of your property and identifying opportunities for enhancement. Regular inspections allow us to identify and address minor issues before they become major problems, saving you time and money in the long run.
      
      Our detailed reporting provides you with clear insights into the performance of your investment. We handle all financial aspects, including budgeting and expense management, so you have a clear picture of your property's financial health. Whether you own a single property or a large portfolio, our team has the expertise to manage it effectively.
    `,
    features: ["Regular Inspections", "Financial Reporting", "Portfolio Optimization", "Asset Maintenance"],
  },
};

export const Route = createFileRoute("/solutions/$solutionId")({
  component: SolutionDetail,
});

function SolutionDetail() {
  const { solutionId } = useParams({ from: "/solutions/$solutionId" });
  const solution = solutionsData[solutionId];

  if (!solution) {
    return <div>Solution not found</div>;
  }

  return (
    <main className="bg-background text-foreground overflow-x-hidden min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-24 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                  <solution.icon className="w-6 h-6" />
                </div>
                <span className="label-eyebrow text-accent">Our Solution</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-serif text-foreground mb-6">
                {solution.title}
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8">
                {solution.desc}
              </p>

              <div className="prose prose-lg text-muted-foreground space-y-6">
                {solution.content.split('\n\n').map((paragraph: string, idx: number) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-12 grid grid-cols-2 gap-6">
                {solution.features.map((feature: string) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src={solution.img}
                alt={solution.title}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
