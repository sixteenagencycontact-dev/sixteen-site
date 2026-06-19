import { PageHero } from "@/components/page-hero";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start With A Line"
        text="For identities, campaigns, digital launches, and AI content systems."
      />
      <section className="px-5 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1800px] gap-8 border-b border-white/10 pb-16 lg:grid-cols-[1fr_1fr]">
          <a
            href="mailto:hello@sixteen.agency"
            className="text-5xl font-black uppercase leading-none text-white transition hover:text-white/60 sm:text-7xl lg:text-8xl"
          >
            hello@sixteen.agency
          </a>
          <div className="grid gap-6 self-end text-xl font-bold uppercase leading-tight text-white/55 sm:text-2xl">
            <p>Rome / Remote</p>
            <p>Brand strategy, design direction, content production, and digital systems.</p>
          </div>
        </div>
      </section>
    </>
  );
}
