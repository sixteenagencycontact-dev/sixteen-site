import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MotionSection } from "@/components/motion-section";
import { experiments, labCharacters, oluaLinks, podcasts, type LabCharacter } from "@/lib/lab";

export const metadata: Metadata = {
  title: "LAB | SIXTEEN",
  description: "Personaggi digitali, progetti editoriali e ricerca visiva nell'universo interno di SIXTEEN.",
};

function CharacterSection({ character, index }: { character: LabCharacter; index: number }) {
  return (
    <MotionSection className="border-t border-white/25 px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1800px]">
        <header className="grid gap-8 lg:grid-cols-[0.35fr_1.65fr]">
          <p className="text-xs font-black text-[#7A7A7A]">{String(index + 1).padStart(2, "0")}</p>
          <div>
            <h2 className="text-6xl font-black uppercase leading-[0.85] text-archive sm:text-8xl lg:text-9xl">
              {character.name}
            </h2>
            <p className="mt-5 text-sm font-bold uppercase text-[#7A7A7A]">{character.role}</p>
          </div>
        </header>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:ml-[17.5%] lg:mt-20 lg:grid-cols-[1.15fr_0.85fr]">
          <figure className="md:row-span-2">
            <div className="relative aspect-[4/5] overflow-hidden border border-white/30">
              <Image
                src={character.campaign.cover}
                alt={`${character.name} ${character.campaign.label}`}
                fill
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover grayscale"
              />
            </div>
            <figcaption className="mt-4 text-xs font-black uppercase text-archive">
              {character.campaign.label}
            </figcaption>
          </figure>

          {character.portraits.map((portrait, portraitIndex) => (
            <figure key={portrait.src}>
              <div className="relative aspect-[4/3] overflow-hidden border border-white/30">
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

export default function LabPage() {
  return (
    <div className="min-h-screen bg-black pt-20 text-white">
      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1800px] border-b border-white/25 pb-16 sm:pb-20">
          <p className="text-xs font-black uppercase text-archive">SIXTEEN / Internal Universe</p>
          <h1 className="mt-8 text-7xl font-black uppercase leading-[0.8] sm:text-9xl lg:text-[11rem]">
            Lab
          </h1>
          <p className="mt-12 max-w-4xl text-3xl font-normal leading-[1.15] sm:text-5xl">
            Uno spazio dedicato a personaggi digitali, progetti editoriali, ricerca visiva e collaborazioni a
            lungo termine.
          </p>
        </div>
      </section>

      {labCharacters.map((character, index) => (
        <CharacterSection key={character.name} character={character} index={index} />
      ))}

      <div id="olua">
        <MotionSection className="border-t border-white/25 px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="mx-auto max-w-[1800px]">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <h2 className="text-6xl font-black uppercase leading-[0.85] text-archive sm:text-8xl">Olua</h2>
              <p className="mt-5 text-sm font-bold uppercase text-[#7A7A7A]">Voice Project</p>
            </div>
            <div>
              <p className="max-w-3xl text-3xl leading-tight sm:text-5xl">
                Voce, conversazioni e progetti editoriali.
              </p>
              <div className="mt-14 grid gap-3 sm:grid-cols-3">
                {oluaLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex min-h-36 items-end justify-between border border-white/25 p-5 transition hover:border-archive"
                    aria-label={item.label}
                  >
                    <Image src={item.icon} alt="" width={28} height={28} className="h-7 w-7" />
                    <span className="text-xs font-black uppercase text-[#7A7A7A] transition group-hover:text-white">
                      {item.label}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          </div>
        </MotionSection>
      </div>

      <MotionSection className="border-t border-white/25 px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto max-w-[1800px]">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <h2 className="text-6xl font-black uppercase leading-[0.85] text-archive sm:text-8xl">Kol Buc</h2>
              <p className="mt-5 text-sm font-bold uppercase text-[#7A7A7A]">Artista emergente</p>
            </div>
            <div>
              <p className="max-w-3xl text-xl leading-relaxed sm:text-2xl">
                KOL BUC è un artista emergente classe 2000 della capitale. Un progetto seguito da SIXTEEN tra
                direzione creativa, immaginario visivo e crescita artistica.
              </p>
              <div className="mt-12 grid gap-6 md:grid-cols-[1fr_0.7fr]">
                <div className="flex aspect-[4/5] flex-col justify-between border border-white/30 bg-archive p-6 text-black">
                  <p className="text-xs font-black uppercase">SIXTEEN LAB / Artist 001</p>
                  <p className="text-6xl font-black uppercase leading-[0.82] sm:text-8xl">Kol Buc</p>
                  <p className="text-xs font-black uppercase">Roma · 2000</p>
                </div>
                <div className="flex flex-col justify-end gap-3">
                  <Link
                    href="https://www.instagram.com/nicobuccella/?__pwa=1"
                    target="_blank"
                    rel="noreferrer"
                    className="flex min-h-28 items-center justify-between border border-white/25 p-5 transition hover:border-archive"
                  >
                    <Image src="/lab/icons/instagram.svg" alt="Instagram" width={28} height={28} />
                    <span className="text-xs font-black uppercase">Instagram</span>
                  </Link>
                  <Link
                    href="https://open.spotify.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex min-h-28 items-center justify-between border border-white/25 p-5 transition hover:border-archive"
                  >
                    <Image src="/lab/icons/spotify.svg" alt="Spotify" width={28} height={28} />
                    <span className="text-xs font-black uppercase">Spotify</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="border-t border-white/25 px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto max-w-[1800px]">
          <p className="text-xs font-black uppercase text-archive">Podcast</p>
          <div className="mt-10 grid gap-x-6 gap-y-14 md:grid-cols-3">
            {podcasts.map((podcast, index) => (
              <Link key={podcast.number} id={`podcast-${podcast.number}`} href={`/lab#podcast-${podcast.number}`}>
                <div
                  className={`flex aspect-[4/5] flex-col justify-between border border-white/30 p-5 ${
                    index === 1 ? "bg-archive text-black" : "bg-black text-white"
                  }`}
                >
                  <p className="text-xs font-black uppercase">SIXTEEN LAB / Audio</p>
                  <p className="font-editorial text-6xl leading-none">{podcast.number}</p>
                  <p className="text-xs font-black uppercase">Roma · 2026</p>
                </div>
                <p className="mt-4 text-xs font-black uppercase text-[#7A7A7A]">Podcast {podcast.number}</p>
                <h3 className="mt-2 max-w-sm text-lg font-black uppercase leading-tight">{podcast.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="border-t border-white/25 px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:pb-36">
        <div className="mx-auto max-w-[1800px]">
          <p className="text-xs font-black uppercase text-archive">Experiments</p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {experiments.map((experiment, index) => (
              <div key={experiment.title} className="flex min-h-64 flex-col justify-between border border-white/25 p-5">
                <p className="text-xs font-bold text-[#7A7A7A]">{String(index + 1).padStart(2, "0")}</p>
                <div>
                  <h3 className="text-3xl font-black uppercase leading-none">{experiment.title}</h3>
                  <p className="mt-3 text-xs font-black uppercase text-archive">{experiment.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>
    </div>
  );
}
