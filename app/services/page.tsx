import { PageHero } from "@/components/page-hero";
import { MotionSection } from "@/components/motion-section";

const services = [
  ["Strategy", "Positioning, naming, launch architecture, and brand narrative."],
  ["Identity", "Logo systems, visual language, design rules, and digital rollouts."],
  ["Content", "Editorial calendars, campaigns, reels, stills, and social formats."],
  ["AI Systems", "Prompt direction, production workflows, creative QA, and asset scaling."],
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Sharp Systems"
        text="Lean creative infrastructure for brands that need clarity, pace, and consistency."
      />
      <MotionSection className="px-5 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1800px]">
          {services.map(([title, description], index) => (
            <div
              key={title}
              className="grid gap-6 border-b border-white/10 py-9 md:grid-cols-[0.25fr_0.75fr_1fr]"
            >
              <span className="text-sm font-black text-white/35">{String(index + 1).padStart(2, "0")}</span>
              <h2 className="text-5xl font-black uppercase leading-none text-white sm:text-7xl">{title}</h2>
              <p className="self-end text-xl font-bold leading-tight text-white/60 sm:text-2xl">
                {description}
              </p>
            </div>
          ))}
        </div>
      </MotionSection>
    </>
  );
}
