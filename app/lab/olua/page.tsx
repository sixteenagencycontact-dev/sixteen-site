import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { LabHeader } from "@/components/lab-header";
import { LabIndexNav } from "@/components/lab-index-nav";
import { oluaLinks } from "@/lib/lab";

export const metadata: Metadata = {
  title: "OLUA | SIXTEEN",
  description: "Voice project, conversations and editorial formats.",
};

export default function OluaPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <LabHeader index="02" title="Olua" description="Voice project, conversations and editorial formats." />
      <section className="px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1800px]">
          <div className="grid gap-px bg-white/25 sm:grid-cols-3">
            {oluaLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                className="group flex min-h-64 flex-col justify-between bg-black p-5 transition hover:bg-white hover:text-black sm:p-7"
              >
                <Image src={item.icon} alt="" width={30} height={30} className="h-[30px] w-[30px] group-hover:invert" />
                <p className="text-sm font-black uppercase">{item.label}</p>
              </Link>
            ))}
          </div>
          <div className="mt-20 grid gap-4 md:grid-cols-2">
            {[
              ["Podcast", "Coming soon"],
              ["Format", "Coming soon"],
            ].map(([title, status]) => (
              <div key={title} className="flex min-h-64 flex-col justify-between border border-white/25 p-5 sm:p-7">
                <h2 className="text-4xl font-black uppercase">{title}</h2>
                <p className="text-xs font-black uppercase text-[#7A7A7A]">{status}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <LabIndexNav current="olua" />
    </div>
  );
}
