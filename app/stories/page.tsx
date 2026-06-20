import Image from "next/image";
import Link from "next/link";
import { MotionSection } from "@/components/motion-section";
import { archiveEntries } from "@/lib/stories";

export default function StoriesPage() {
  return (
    <div className="min-h-screen bg-black px-5 pb-24 pt-32 text-white sm:px-8 sm:pt-40 lg:px-12">
      <div className="mx-auto max-w-[1800px]">
        <header className="border-b border-white/30 pb-10 sm:pb-14">
          <p className="text-xs font-bold uppercase text-white/55">SIXTEEN / Conversations</p>
          <h1 className="mt-5 text-7xl font-black uppercase leading-[0.82] sm:text-9xl lg:text-[11rem] xl:text-[13rem]">
            Archive
          </h1>
        </header>

        <MotionSection className="grid gap-x-6 gap-y-20 py-12 sm:grid-cols-2 sm:py-16 lg:grid-cols-3 xl:grid-cols-4">
          {archiveEntries.map((entry) => (
            <Link key={entry.slug} href={`/stories/${entry.slug}`} className="group block">
              <div className="relative aspect-[4/5] overflow-hidden border border-white/70 bg-white/5">
                <Image
                  src={entry.cover}
                  alt={`${entry.name}, ${entry.profession}`}
                  fill
                  priority={entry.number === "001"}
                  sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover grayscale transition duration-700 ease-out group-hover:scale-[1.025] group-hover:grayscale-0"
                />
              </div>
              <div className="mt-5 flex items-start justify-between gap-5 border-t border-white/30 pt-4">
                <div>
                  <h2 className="text-3xl font-black uppercase leading-none sm:text-4xl">
                    {entry.name}
                  </h2>
                  <p className="mt-2 text-sm font-bold uppercase text-white/60">{entry.profession}</p>
                </div>
                <p className="shrink-0 text-sm font-black">{entry.number}</p>
              </div>
              <p className="mt-6 max-w-sm text-lg leading-relaxed text-white/75">{entry.description}</p>
            </Link>
          ))}
        </MotionSection>
      </div>
    </div>
  );
}
