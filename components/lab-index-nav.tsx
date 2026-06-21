import Link from "next/link";

const labIndexItems = [
  { id: "lab", label: "Lab", href: "/lab" },
  { id: "ai-lab", label: "AI Lab", href: "/lab/ai-lab" },
  { id: "olua", label: "Olua", href: "/lab/olua" },
  { id: "kol-buc", label: "Kol Buc", href: "/lab/kol-buc" },
  { id: "podcast", label: "Podcast", href: "/lab/podcast" },
  { id: "experiments", label: "Experiments", href: "/lab/experiments" },
] as const;

type LabIndexNavProps = {
  current: (typeof labIndexItems)[number]["id"];
};

export function LabIndexNav({ current }: LabIndexNavProps) {
  return (
    <nav aria-label="LAB index" className="px-5 pb-16 pt-12 sm:px-8 sm:pb-20 lg:px-12">
      <div className="mx-auto max-w-[1800px] border-t border-white/25 pt-8">
        <div className="flex flex-col items-start gap-x-8 gap-y-4 text-sm font-black uppercase sm:flex-row sm:flex-wrap">
          {labIndexItems.map((item) =>
            item.id === current ? (
              <span key={item.id} aria-current="page" className="text-[#7A7A7A]">
                {item.label}
              </span>
            ) : (
              <Link key={item.id} href={item.href} className="text-white transition hover:text-[#7A7A7A]">
                {item.label}
              </Link>
            ),
          )}
        </div>
      </div>
    </nav>
  );
}
