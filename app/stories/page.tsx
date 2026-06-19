import Link from "next/link";
import { PageHero } from "@/components/page-hero";

export default function StoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Stories"
        title="Archive"
        text="Notes, interviews, and editorial fragments from the studio desk."
        story
      />
      <section className="px-5 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1800px]">
          <Link
            href="/stories/archive-001"
            className="group grid gap-8 border-y border-story/40 py-10 md:grid-cols-[0.4fr_1.4fr_0.4fr]"
          >
            <p className="text-sm font-black uppercase text-story">Archive 001</p>
            <h2 className="text-[16vw] font-black uppercase leading-[0.82] text-white transition group-hover:text-story sm:text-[11vw] lg:text-[8vw]">
              The Editorial Machine
            </h2>
            <p className="self-end text-xl font-bold leading-tight text-story md:text-right">
              Interview
              <br />
              Q&A
            </p>
          </Link>
        </div>
      </section>
    </>
  );
}
