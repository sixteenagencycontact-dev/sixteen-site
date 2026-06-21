import { ArchiveCard } from "@/components/archive-card";
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

        <MotionSection className="grid gap-x-6 gap-y-20 py-12 sm:grid-cols-2 sm:py-16 lg:grid-cols-3">
          {archiveEntries.map((entry) => (
            <ArchiveCard key={entry.slug} entry={entry} priority={entry.number === "001"} />
          ))}
        </MotionSection>
      </div>
    </div>
  );
}
