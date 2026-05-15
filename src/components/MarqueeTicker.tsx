const items = [
  "Verified Listings",
  "Expert Agents",
  "No Hidden Fees",
  "FCA Regulated",
  "5-Star Rated",
  "UK Wide Coverage",
];

export default function MarqueeTicker() {
  const all = [...items, ...items, ...items, ...items];
  return (
    <div className="bg-cream border-y border-border py-6 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {all.map((t, i) => (
          <div key={i} className="flex items-center gap-8 px-8 shrink-0">
            <span className="font-serif text-2xl lg:text-3xl text-foreground">{t}</span>
            <span className="text-accent text-xl rotate-45 inline-block w-3 h-3 bg-accent" />
          </div>
        ))}
      </div>
    </div>
  );
}
