import { PageHero } from "@/components/page-hero";
import { MotionSection } from "@/components/motion-section";

const services = [
  ["Strategy", "Posizionamento, naming e direzione creativa."],
  ["Identity", "Logo, sistemi visivi e linguaggio del brand."],
  ["Content", "Fotografia, video, campagne e contenuti editoriali."],
  ["AI Systems", "Workflow creativi, personaggi digitali e campagne AI."],
  ["Relations", "PR, collaborazioni e connessioni tra brand e persone."],
  ["Digital", "Siti web, social e presenza digitale."],
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Sharp Systems"
        text="Lean creative infrastructure for brands that need clarity, pace, and consistency."
      />
      <MotionSection className="px-5 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1800px] gap-4 lg:grid-cols-3">
          {services.map(([title, description], index) => (
            <article
              key={title}
              className="group relative z-0 flex min-h-[360px] flex-col justify-between overflow-hidden border border-white/20 bg-black p-5 transition duration-500 ease-out hover:z-10 hover:scale-[1.015] hover:border-white/45 sm:min-h-[400px] sm:p-7 lg:min-h-[440px]"
            >
              <span className="text-xs font-black text-[#7A7A7A]">{String(index + 1).padStart(2, "0")}</span>
              <div className="mt-auto pt-20">
                <h2 className="origin-bottom-left text-4xl font-black uppercase leading-none text-white transition duration-500 ease-out group-hover:scale-[1.035] sm:text-5xl xl:text-6xl">
                  {title}
                </h2>
                <p className="mt-6 max-w-sm text-base font-normal leading-relaxed text-[#7A7A7A] transition duration-500 group-hover:text-white/80 sm:text-lg">
                  {description}
                </p>
                <div className="mt-8 h-px w-full bg-white/25 transition duration-500 group-hover:bg-white/60" />
              </div>
            </article>
          ))}
        </div>
      </MotionSection>
    </>
  );
}
