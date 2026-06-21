import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { LabHeader } from "@/components/lab-header";
import { LabIndexNav } from "@/components/lab-index-nav";

export const metadata: Metadata = {
  title: "KOL BUC | SIXTEEN",
  description: "Direzione creativa e crescita artistica.",
};

export default function KolBucPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <LabHeader index="03" title="Kol Buc" description="Direzione creativa e crescita artistica." />
      <section className="px-5 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1800px] gap-12 lg:grid-cols-[0.65fr_1.35fr]">
          <div className="flex aspect-[4/5] flex-col justify-between border border-white/30 bg-white p-6 text-black">
            <p className="text-xs font-black uppercase">SIXTEEN LAB / Artist 001</p>
            <p className="text-6xl font-black uppercase leading-[0.82] sm:text-8xl">Kol Buc</p>
            <p className="text-xs font-black uppercase">Roma · 2000</p>
          </div>
          <div className="flex flex-col justify-between gap-12">
            <p className="max-w-3xl text-2xl leading-relaxed sm:text-4xl">
              KOL BUC è un artista emergente classe 2000 della capitale. Un progetto seguito da SIXTEEN tra
              direzione creativa, immaginario visivo e crescita artistica.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              <Link
                href="https://www.instagram.com/nicobuccella/?__pwa=1"
                target="_blank"
                rel="noreferrer"
                className="group flex min-h-28 items-center justify-between border border-white/25 p-5 transition hover:bg-white hover:text-black"
              >
                <Image
                  src="/lab/icons/instagram.svg"
                  alt="Instagram"
                  width={28}
                  height={28}
                  className="group-hover:invert"
                />
                <span className="text-xs font-black uppercase">Instagram</span>
              </Link>
              <Link
                href="https://open.spotify.com/"
                target="_blank"
                rel="noreferrer"
                className="group flex min-h-28 items-center justify-between border border-white/25 p-5 transition hover:bg-white hover:text-black"
              >
                <Image
                  src="/lab/icons/spotify.svg"
                  alt="Spotify"
                  width={28}
                  height={28}
                  className="group-hover:invert"
                />
                <span className="text-xs font-black uppercase">Spotify</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-20 grid max-w-[1800px] gap-4 md:grid-cols-2">
          {[
            ["Visual identity", "Ongoing system"],
            ["Cover art", "Editorial direction"],
          ].map(([title, label]) => (
            <div key={title} className="flex min-h-72 flex-col justify-between border border-white/25 p-5 sm:p-7">
              <p className="text-xs font-black uppercase text-[#7A7A7A]">{label}</p>
              <h2 className="text-4xl font-black uppercase sm:text-5xl">{title}</h2>
            </div>
          ))}
        </div>
      </section>
      <LabIndexNav current="kol-buc" />
    </div>
  );
}
