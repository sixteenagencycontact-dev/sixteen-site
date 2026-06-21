import Image from "next/image";
import Link from "next/link";
import type { ArchiveEntry } from "@/lib/stories";

type ArchiveCardProps = {
  entry: ArchiveEntry;
  variant?: "index" | "related";
  current?: boolean;
  priority?: boolean;
};

function ArchiveLabel({ entry }: { entry: ArchiveEntry }) {
  return (
    <p className="text-xs font-black uppercase text-white">
      Archive <span className="text-archive">{entry.number}</span>
    </p>
  );
}

function RelatedCardContent({ entry, current }: { entry: ArchiveEntry; current: boolean }) {
  return (
    <>
      <div className="relative aspect-[16/10] min-h-48 overflow-hidden bg-white/5 md:aspect-auto md:min-h-56">
        <Image
          src={entry.cover}
          alt={`${entry.name}, ${entry.profession}`}
          fill
          sizes="(min-width: 768px) 35vw, 100vw"
          className="object-cover grayscale transition duration-700 group-hover:scale-[1.02]"
        />
      </div>
      <div className="flex min-w-0 flex-col justify-between gap-10 border-t border-white/20 p-5 md:border-l md:border-t-0 md:p-7">
        <div className="flex items-start justify-between gap-5">
          <ArchiveLabel entry={entry} />
          {current ? (
            <span className="shrink-0 bg-[#7A7A7A] px-2.5 py-1 text-[10px] font-black uppercase text-black">
              Lettura attuale
            </span>
          ) : null}
        </div>
        <div>
          <h3 className="text-3xl font-black uppercase leading-none text-archive sm:text-4xl">
            {entry.name}
          </h3>
          <p className="mt-3 text-xs font-bold uppercase text-[#7A7A7A]">{entry.profession}</p>
          <p className="mt-1 text-xs font-bold uppercase text-[#7A7A7A]">{entry.date}</p>
        </div>
      </div>
    </>
  );
}

export function ArchiveCard({
  entry,
  variant = "index",
  current = false,
  priority = false,
}: ArchiveCardProps) {
  if (variant === "related") {
    const className =
      "group grid overflow-hidden border border-white/20 bg-black md:grid-cols-[0.36fr_0.64fr]";
    const content = <RelatedCardContent entry={entry} current={current} />;

    return current ? (
      <article aria-current="page" className={className}>
        {content}
      </article>
    ) : (
      <Link href={`/stories/${entry.slug}`} className={`${className} transition hover:border-white/60`}>
        {content}
      </Link>
    );
  }

  return (
    <Link href={`/stories/${entry.slug}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden border border-white/40 bg-white/5">
        <Image
          src={entry.cover}
          alt={`${entry.name}, ${entry.profession}`}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover grayscale transition duration-700 ease-out group-hover:scale-[1.025]"
        />
      </div>
      <div className="mt-5 border-t border-white/30 pt-4">
        <div className="flex items-start justify-between gap-5">
          <h2 className="text-3xl font-black uppercase leading-none text-archive sm:text-4xl">
            {entry.name}
          </h2>
          <ArchiveLabel entry={entry} />
        </div>
        <p className="mt-3 text-xs font-bold uppercase text-[#7A7A7A]">{entry.profession}</p>
        <p className="mt-1 text-xs font-bold uppercase text-[#7A7A7A]">{entry.date}</p>
      </div>
      <p className="mt-6 max-w-md text-lg leading-relaxed text-white">{entry.description}</p>
    </Link>
  );
}
