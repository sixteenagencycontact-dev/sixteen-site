import type { Metadata } from "next";
import Link from "next/link";
import { MotionSection } from "@/components/motion-section";
import { labModules } from "@/lib/lab";

export const metadata: Metadata = {
  title: "LAB | SIXTEEN",
  description: "Progetti, personaggi digitali e idee in continua evoluzione.",
};

export default function LabPage() {
  return (
    <div className="min-h-screen bg-black px-5 pb-28 pt-32 text-white sm:px-8 sm:pt-40 lg:px-12">
      <div className="mx-auto max-w-[1800px]">
        <header className="border-b border-white/25 pb-14 sm:pb-20">
          <p className="text-xs font-black uppercase text-[#7A7A7A]">SIXTEEN / Internal Universe</p>
          <h1 className="mt-7 text-7xl font-black uppercase leading-[0.8] sm:text-9xl lg:text-[11rem]">Lab</h1>
          <p className="mt-10 max-w-4xl text-3xl leading-[1.15] sm:text-5xl">
            Progetti, personaggi digitali e idee in continua evoluzione.
          </p>
        </header>

        <MotionSection className="grid gap-px bg-white/25 py-px sm:grid-cols-2">
          {labModules.map((module, index) => (
            <Link
              key={module.slug}
              href={`/lab/${module.slug}`}
              className={`group flex min-h-80 flex-col justify-between bg-black p-5 transition hover:bg-white hover:text-black sm:min-h-96 sm:p-7 ${
                index === 0 ? "sm:col-span-2" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-6">
                <p className="text-xs font-black text-[#7A7A7A] transition group-hover:text-black/55">
                  {module.number}
                </p>
                <p className="text-xs font-black uppercase text-[#7A7A7A] transition group-hover:text-black/55">
                  Open ↗
                </p>
              </div>
              <div>
                <h2 className="text-4xl font-black uppercase leading-none sm:text-6xl lg:text-7xl">
                  {module.title}
                </h2>
                <p className="mt-5 max-w-lg text-base leading-relaxed text-[#A0A0A0] transition group-hover:text-black/70 sm:text-lg">
                  {module.description}
                </p>
              </div>
            </Link>
          ))}
        </MotionSection>

        <footer className="grid gap-8 border-t border-white/25 pt-10 text-xs font-black uppercase text-[#7A7A7A] sm:grid-cols-3">
          <p>Lab / Internal universe</p>
          <p>Work / Clients</p>
          <p>Archive / People and stories</p>
        </footer>
      </div>
    </div>
  );
}
