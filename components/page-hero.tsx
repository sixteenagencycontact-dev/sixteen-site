type PageHeroProps = {
  eyebrow: string;
  title: string;
  text?: string;
};

export function PageHero({ eyebrow, title, text }: PageHeroProps) {
  return (
    <section className="px-5 pt-36 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1800px] border-b border-white/10 pb-12 sm:pb-16">
        <p className="text-sm font-black uppercase text-white/50">{eyebrow}</p>
        <h1 className="mt-6 max-w-[13ch] text-[18vw] font-black uppercase leading-[0.82] text-white sm:text-[14vw] lg:text-[11vw]">
          {title}
        </h1>
        {text ? (
          <p className="mt-8 max-w-2xl text-xl font-bold leading-tight text-white/70 sm:text-3xl">
            {text}
          </p>
        ) : null}
      </div>
    </section>
  );
}
