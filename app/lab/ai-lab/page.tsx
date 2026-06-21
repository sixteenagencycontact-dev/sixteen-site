import type { Metadata } from "next";
import { LabCharacterSection } from "@/components/lab-character-section";
import { LabHeader } from "@/components/lab-header";
import { labCharacters } from "@/lib/lab";

export const metadata: Metadata = {
  title: "AI LAB | SIXTEEN",
  description: "Digital characters, campaigns and experiments.",
};

export default function AiLabPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <LabHeader index="01" title="AI Lab" description="Digital characters, campaigns and experiments." />
      {labCharacters.map((character, index) => (
        <LabCharacterSection key={character.name} character={character} index={index} />
      ))}
      <section className="border-t border-white/25 px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto flex min-h-64 max-w-[1800px] flex-col justify-between border border-white/25 p-5 sm:p-7">
          <p className="text-xs font-black text-[#7A7A7A]">03</p>
          <div>
            <h2 className="text-4xl font-black uppercase">Campaign 002</h2>
            <p className="mt-3 text-xs font-black uppercase text-[#7A7A7A]">Coming soon</p>
          </div>
        </div>
      </section>
    </div>
  );
}
