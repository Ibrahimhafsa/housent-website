import { createFileRoute, useParams } from "@tanstack/react-router";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { Link } from "@tanstack/react-router";

const insightsData: Record<string, any> = {
  "uk-property-prices": {
    img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&q=80",
    date: "11 April 2024",
    title: "UK Property Prices: What Buyers Should Expect in 2024",
    tag: "Market Report",
    content: `
      The UK property market in 2024 is expected to show resilience despite economic fluctuations. Buyers should prepare for a landscape where interest rates might stabilize, potentially increasing demand. This article explores regional variations and what buyers can do to stay competitive in the current market.
      
      Experts suggest that while the rapid price increases of previous years may slow down, the lack of supply in key areas will continue to support valuations. For buyers, this means that finding the right property might take longer, and being prepared with a mortgage in principle is more important than ever.
      
      We also see a growing trend towards energy-efficient homes, with buyers willing to pay a premium for properties with better EPC ratings. This shift is driven by both environmental concerns and the rising cost of energy.
    `,
    author: "James Wilson",
    readTime: "5 min read",
  },
  "first-time-buyer-guide": {
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80",
    date: "14 October 2023",
    title: "First-Time Buyer Guide: Navigating Stamp Duty Relief",
    tag: "Buyer Guide",
    content: `
      Buying your first home is a major milestone. Understanding stamp duty relief is crucial for managing your budget. This guide breaks down the eligibility criteria, how to apply for relief, and other financial considerations for first-time buyers in the UK.
      
      Stamp Duty Land Tax (SDLT) relief for first-time buyers can save you thousands of pounds, but it's important to understand the thresholds. Currently, first-time buyers in England and Northern Ireland pay no SDLT on properties up to £425,000, with discounted rates for properties up to £625,000.
      
      Beyond stamp duty, first-time buyers should also consider the costs of surveys, legal fees, and moving expenses. Planning ahead and having a clear understanding of all the costs involved will help you navigate the process with confidence.
    `,
    author: "Sarah Jenkins",
    readTime: "8 min read",
  },
  "buy-to-let-investments": {
    img: "https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=1200&q=80",
    date: "25 November 2022",
    title: "Buy-to-Let Investments: Is It Still Worth It in the UK?",
    tag: "Investment",
    content: `
      Buy-to-let remains a popular investment choice, but changing regulations and tax laws have made it more complex. We analyze the current rental yields, potential capital appreciation, and the risks involved in today's market to help you decide if buy-to-let is right for you.
      
      While recent tax changes have reduced the profitability for some landlords, buy-to-let can still offer strong returns, especially in areas with high rental demand. Focus on locations with good transport links, local amenities, and growing employment opportunities.
      
      Being a successful landlord requires more than just owning a property; it's about managing a business. From ensuring compliance with safety regulations to managing tenant relationships, there are many factors to consider. Our team can help you navigate these challenges and make informed investment decisions.
    `,
    author: "David Thompson",
    readTime: "6 min read",
  },
};

export const Route = createFileRoute("/insights/$articleId")({
  component: InsightDetail,
});

function InsightDetail() {
  const { articleId } = useParams({ from: "/insights/$articleId" });
  const insight = insightsData[articleId];

  if (!insight) {
    return <div>Article not found</div>;
  }

  return (
    <main className="bg-background text-foreground overflow-x-hidden min-h-screen">
      <Navbar />
      
      <article className="pt-32 pb-24 px-6 lg:px-10">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Insights
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                {insight.tag}
              </span>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Calendar className="w-3.5 h-3.5" />
                {insight.date}
              </div>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-serif text-foreground leading-tight mb-8">
              {insight.title}
            </h1>

            <div className="flex items-center gap-4 mb-12 pb-12 border-b border-border">
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-sm font-medium">
                {insight.author[0]}
              </div>
              <div>
                <div className="text-sm font-medium">{insight.author}</div>
                <div className="text-xs text-muted-foreground">{insight.readTime}</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="aspect-video rounded-3xl overflow-hidden mb-12"
          >
            <img
              src={insight.img}
              alt={insight.title}
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none text-muted-foreground space-y-8"
          >
            {insight.content.split('\n\n').map((paragraph: string, idx: number) => (
              <p key={idx} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </motion.div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
