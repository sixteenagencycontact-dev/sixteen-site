import Link from "next/link";
import { MotionSection } from "@/components/motion-section";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <>
      <section className="min-h-[92vh] px-5 pt-32 sm:px-8 lg:px-12">
        <div className="mx-auto flex min-h-[calc(92vh-8rem)] max-w-[1800px] flex-col justify-between">
          <div>
            <p className="text-sm font-black uppercase text-white/50">Independent Digital Studio</p>
            <h1 className="mt-6 max-w-[9ch] text-[24vw] font-black uppercase leading-[0.78] text-white sm:text-[19vw] lg:text-[14vw]">
              SIXTEEN
            </h1>
          </div>
          <div className="grid gap-8 border-t border-white/10 py-8 md:grid-cols-[1.2fr_0.8fr] md:items-end">
            <p className="max-w-4xl text-3xl font-black uppercase leading-[0.95] text-white sm:text-5xl lg:text-7xl">
              Identities, campaigns, digital stories, and AI content with editorial discipline.
            </p>
            <Link
              href="/work"
              className="w-fit border border-white px-6 py-4 text-sm font-black uppercase text-white transition hover:bg-white hover:text-ink"
            >
              View Work
            </Link>
          </div>
        </div>
      </section>

      <MotionSection className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1800px] gap-10 border-y border-white/10 py-12 lg:grid-cols-[0.7fr_1.3fr]">
          <h2 className="text-sm font-black uppercase text-white/45">Studio Line</h2>
          <p className="text-balance text-5xl font-black uppercase leading-[0.9] text-white sm:text-7xl lg:text-8xl">
            Minimal systems for brands that need to move fast without losing their voice.
          </p>
        </div>
      </MotionSection>

      <MotionSection className="px-5 pb-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1800px]">
          <div className="mb-4 flex items-end justify-between gap-6">
            <h2 className="text-sm font-black uppercase text-white/45">Selected Work</h2>
            <Link href="/work" className="text-sm font-black uppercase text-white hover:text-white/60">
              All Projects
            </Link>
          </div>
          {projects.slice(0, 3).map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </MotionSection>
    </>
  );
}
