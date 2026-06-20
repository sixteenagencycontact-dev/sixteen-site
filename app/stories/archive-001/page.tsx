import Image from "next/image";
import Link from "next/link";
import { MotionSection } from "@/components/motion-section";
import { archive001 } from "@/lib/stories";

export default function Archive001Page() {
  return (
    <article className="min-h-screen bg-black px-5 pb-28 pt-32 text-white sm:px-8 sm:pt-40 lg:px-12">
      <div className="mx-auto max-w-[1800px]">
        <Link
          href="/stories"
          className="inline-block text-xs font-bold uppercase text-white/60 transition hover:text-white"
        >
          Archive / Index
        </Link>

        <header className="mt-8 border-y border-white/30 py-9 sm:py-12">
          <div className="flex items-start justify-between gap-6">
            <p className="text-sm font-black uppercase">Archive</p>
            <p className="text-sm font-black text-archive">{archive001.number}</p>
          </div>
          <h1 className="mt-16 max-w-[1500px] text-6xl font-black uppercase leading-[0.84] sm:mt-24 sm:text-8xl lg:text-[9rem] xl:text-[11rem]">
            {archive001.name}
          </h1>
          <p className="mt-8 text-xl uppercase text-white/65 sm:text-3xl">{archive001.profession}</p>
        </header>

        <MotionSection className="py-10 sm:py-16">
          <div className="relative aspect-[4/5] overflow-hidden border border-white/70 sm:aspect-[16/10] lg:aspect-[16/9]">
            <Image
              src={archive001.cover}
              alt={`${archive001.name} al lavoro in cucina`}
              fill
              priority
              sizes="100vw"
              className="object-cover grayscale"
            />
          </div>
        </MotionSection>

        <section className="border-t border-white/30">
          {archive001.questions.map((item, index) => (
            <MotionSection
              key={item.question}
              className="border-b border-white/20 py-24 sm:py-32 lg:py-40"
            >
              <p className="mb-10 text-xs font-bold text-white/45 sm:mb-14">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="max-w-full text-4xl font-black uppercase leading-[0.95] text-archive sm:text-6xl md:max-w-[70%] lg:text-7xl xl:text-8xl">
                {item.question}
              </h2>
              <p className="mt-12 max-w-[800px] text-xl font-normal leading-[1.65] text-white sm:mt-16 sm:text-2xl">
                {item.answer}
              </p>
              {item.image ? (
                <div className="relative mt-20 aspect-[4/3] w-full overflow-hidden border border-white/70 sm:mt-28">
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>
              ) : null}
            </MotionSection>
          ))}
        </section>
      </div>
    </article>
  );
}
