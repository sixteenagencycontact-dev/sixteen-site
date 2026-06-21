import type { Metadata } from "next";
import Link from "next/link";
import { LabHeader } from "@/components/lab-header";
import { podcasts } from "@/lib/lab";

export const metadata: Metadata = {
  title: "PODCAST | SIXTEEN",
  description: "Conversazioni, cibo e cultura.",
};

export default function PodcastPage() {
  return (
    <div className="min-h-screen bg-black pb-24 text-white">
      <LabHeader index="04" title="Podcast" description="Conversazioni, cibo e cultura." />
      <section className="px-5 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1800px] gap-x-6 gap-y-14 md:grid-cols-3">
          {podcasts.map((podcast, index) => (
            <Link key={podcast.number} href={`/lab/podcast#podcast-${podcast.number}`} id={`podcast-${podcast.number}`}>
              <div
                className={`flex aspect-[4/5] flex-col justify-between border border-white/30 p-5 ${
                  index === 1 ? "bg-white text-black" : "bg-black text-white"
                }`}
              >
                <p className="text-xs font-black uppercase">SIXTEEN LAB / Audio</p>
                <p className="font-editorial text-6xl leading-none">{podcast.number}</p>
                <p className="text-xs font-black uppercase">Roma · 2026</p>
              </div>
              <p className="mt-4 text-xs font-black uppercase text-[#7A7A7A]">Podcast {podcast.number}</p>
              <h2 className="mt-2 max-w-sm text-lg font-black uppercase leading-tight">{podcast.title}</h2>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
