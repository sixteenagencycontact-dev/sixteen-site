import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MotionSection } from "@/components/motion-section";
import { archiveEntries, getArchiveEntry } from "@/lib/stories";

type ArchivePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return archiveEntries.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({ params }: ArchivePageProps) {
  const { slug } = await params;
  const entry = getArchiveEntry(slug);

  return {
    title: entry ? `${entry.name} · Archive ${entry.number} | SIXTEEN` : "Archive | SIXTEEN",
    description: entry?.description,
  };
}

export default async function ArchivePage({ params }: ArchivePageProps) {
  const { slug } = await params;
  const entry = getArchiveEntry(slug);

  if (!entry) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-black text-white">
      <header className="relative mt-20 min-h-[calc(100svh-5rem)] overflow-hidden">
        <Image
          src={entry.cover}
          alt={`${entry.name} al lavoro in cucina`}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center grayscale"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative mx-auto flex min-h-[calc(100svh-5rem)] max-w-[1800px] flex-col justify-between px-5 py-8 sm:px-8 sm:py-12 lg:px-12">
          <div className="flex items-start justify-between gap-6 text-xs font-black uppercase sm:text-sm">
            <p>Archive {entry.number}</p>
            <Link href="/stories" className="transition hover:text-white/60">
              Index
            </Link>
          </div>

          <div className="pt-24">
            <h1 className="max-w-[13ch] text-5xl font-black uppercase leading-[0.86] sm:text-7xl md:text-8xl lg:text-9xl xl:text-[8.5rem]">
              <span className="block">{entry.title}</span>
              <span className="block">{entry.name}</span>
            </h1>
            <div className="mt-9 grid max-w-3xl gap-2 border-t border-white/60 pt-5 text-sm font-bold uppercase sm:grid-cols-3 sm:text-base">
              <p>{entry.profession}</p>
              <p>{entry.location}</p>
              <p>{entry.date}</p>
            </div>
          </div>
        </div>
      </header>

      <MotionSection className="px-5 py-28 sm:px-8 sm:py-40 lg:px-12 lg:py-52">
        <div className="mx-auto grid max-w-[1600px] gap-12 lg:grid-cols-[0.35fr_1.65fr]">
          <p className="text-xs font-black uppercase text-white/45">Introduction</p>
          <p className="max-w-5xl text-3xl font-normal leading-[1.15] sm:text-5xl lg:text-6xl">
            {entry.introduction}
          </p>
        </div>
      </MotionSection>

      <MotionSection className="px-5 pb-28 sm:px-8 sm:pb-40 lg:px-12 lg:pb-52">
        <div className="relative mx-auto aspect-[3/4] max-w-[900px] overflow-hidden border border-white/50">
          <Image
            src={entry.featureImage.src}
            alt={entry.featureImage.alt}
            fill
            sizes="(min-width: 1536px) 1450px, 100vw"
            className="object-cover"
          />
        </div>
      </MotionSection>

      <section className="px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1600px] border-t border-white/25">
          {entry.questions.map((item, index) => (
            <MotionSection
              key={item.question}
              className="border-b border-white/20 py-28 sm:py-40 lg:py-52"
            >
              <p className="mb-10 text-xs font-bold text-white/40 sm:mb-14">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="max-w-full text-4xl font-black uppercase leading-[0.95] text-archive sm:text-6xl md:max-w-[70%] lg:text-7xl xl:text-8xl">
                {item.question}
              </h2>
              <p className="mt-12 max-w-[800px] text-xl font-normal leading-[1.7] sm:ml-[12%] sm:mt-20 sm:text-2xl">
                {item.answer}
              </p>

              {item.image ? (
                <div
                  className={`relative mt-24 aspect-[4/3] overflow-hidden border border-white/50 sm:mt-36 ${
                    item.image.orientation === "portrait"
                      ? index === 2
                        ? "ml-auto aspect-[3/4] max-w-[900px]"
                        : "aspect-[3/4] max-w-[1000px]"
                      : "aspect-[4/3] max-w-[1350px]"
                  }`}
                >
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    sizes="(min-width: 1536px) 1450px, 100vw"
                    className="object-cover"
                  />
                </div>
              ) : null}
            </MotionSection>
          ))}
        </div>
      </section>

      <footer className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto flex max-w-[1600px] items-end justify-between gap-8">
          <p className="text-xs font-black uppercase text-white/45">End of Archive {entry.number}</p>
          <Link href="/stories" className="text-sm font-black uppercase transition hover:text-white/60">
            Back to index
          </Link>
        </div>
      </footer>
    </article>
  );
}
