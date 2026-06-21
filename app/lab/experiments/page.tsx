import type { Metadata } from "next";
import { LabHeader } from "@/components/lab-header";
import { experiments } from "@/lib/lab";

export const metadata: Metadata = {
  title: "EXPERIMENTS | SIXTEEN",
  description: "Visual research and ongoing projects.",
};

export default function ExperimentsPage() {
  return (
    <div className="min-h-screen bg-black pb-24 text-white">
      <LabHeader index="05" title="Experiments" description="Visual research and ongoing projects." />
      <section className="px-5 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1800px] gap-4 md:grid-cols-3">
          {experiments.map((experiment, index) => (
            <div key={experiment.title} className="flex min-h-80 flex-col justify-between border border-white/25 p-5 sm:p-7">
              <p className="text-xs font-bold text-[#7A7A7A]">{String(index + 1).padStart(2, "0")}</p>
              <div>
                <h2 className="text-3xl font-black uppercase leading-none sm:text-4xl">{experiment.title}</h2>
                <p className="mt-3 text-xs font-black uppercase text-[#7A7A7A]">{experiment.status}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
