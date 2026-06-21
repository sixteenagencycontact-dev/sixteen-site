import Image from "next/image";
import { MotionSection } from "@/components/motion-section";
import type { LabCharacter } from "@/lib/lab";

export function LabCharacterSection({ character, index }: { character: LabCharacter; index: number }) {
  return (
    <MotionSection className="border-t border-white/25 px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-[1800px]">
        <header className="grid gap-8 lg:grid-cols-[0.3fr_1.7fr]">
          <p className="text-xs font-black text-[#7A7A7A]">{String(index + 1).padStart(2, "0")}</p>
          <div>
            <h2 className="text-6xl font-black uppercase leading-[0.85] text-white sm:text-8xl lg:text-9xl">
              {character.name}
            </h2>
            <p className="mt-5 text-sm font-bold uppercase text-[#7A7A7A]">{character.role}</p>
          </div>
        </header>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:ml-[15%] lg:grid-cols-[1.1fr_0.9fr]">
          <figure className="md:row-span-2">
            <div className="relative aspect-[4/5] overflow-hidden border border-white/25">
              <Image
                src={character.campaign.cover}
                alt={`${character.name} ${character.campaign.label}`}
                fill
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover grayscale"
              />
            </div>
            <figcaption className="mt-4 text-xs font-black uppercase text-white">
              {character.campaign.label}
            </figcaption>
          </figure>

          {character.portraits.map((portrait, portraitIndex) => (
            <figure key={portrait.src}>
              <div className="relative aspect-[4/3] overflow-hidden border border-white/25">
                <Image
                  src={portrait.src}
                  alt={portrait.alt}
                  fill
                  sizes="(min-width: 1024px) 35vw, 100vw"
                  className="object-cover grayscale"
                />
              </div>
              <figcaption className="mt-3 text-[10px] font-bold uppercase text-[#7A7A7A]">
                Portrait {String(portraitIndex + 1).padStart(2, "0")}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
