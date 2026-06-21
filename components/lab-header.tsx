import Link from "next/link";

type LabHeaderProps = {
  title: string;
  description: string;
  index: string;
};

export function LabHeader({ title, description, index }: LabHeaderProps) {
  return (
    <header className="px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-40 lg:px-12">
      <div className="mx-auto max-w-[1800px] border-b border-white/25 pb-14 sm:pb-20">
        <div className="flex items-start justify-between gap-8 text-xs font-black uppercase text-[#7A7A7A]">
          <Link href="/lab" className="transition hover:text-white">
            ← Back to Lab
          </Link>
          <p>{index}</p>
        </div>
        <h1 className="mt-16 max-w-[14ch] text-6xl font-black uppercase leading-[0.84] text-white sm:text-8xl lg:text-9xl xl:text-[9rem]">
          {title}
        </h1>
        <p className="mt-9 max-w-3xl text-xl leading-relaxed text-[#A0A0A0] sm:text-2xl">{description}</p>
      </div>
    </header>
  );
}
