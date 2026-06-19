import Link from "next/link";

const qa = [
  [
    "What does editorial mean for SIXTEEN?",
    "It means sequence. We think in openings, rhythm, emphasis, silence, and release. A brand becomes clearer when every asset knows where it sits in the story.",
  ],
  [
    "Where does AI enter the process?",
    "AI is a production instrument, not a taste replacement. It helps us prototype directions quickly, but the final shape still depends on judgment, restraint, and a point of view.",
  ],
  [
    "Why so much minimalism?",
    "Minimalism gives the work fewer places to hide. If the line is weak, you see it. If the idea is strong, it gets louder.",
  ],
  [
    "What makes a campaign durable?",
    "A durable campaign has rules, but not a cage. It can repeat without getting tired and mutate without losing its name.",
  ],
];

export default function Archive001Page() {
  return (
    <article className="px-5 pt-36 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1800px]">
        <Link href="/stories" className="text-sm font-black uppercase text-story hover:text-white">
          Stories
        </Link>
        <header className="mt-8 grid gap-8 border-b border-story/35 pb-12 lg:grid-cols-[1.2fr_0.8fr]">
          <h1 className="text-[17vw] font-black uppercase leading-[0.8] text-white sm:text-[13vw] lg:text-[10vw]">
            Archive 001
          </h1>
          <div className="self-end">
            <p className="text-sm font-black uppercase text-story">Interview / Q&A</p>
            <p className="mt-5 text-3xl font-black uppercase leading-none text-white sm:text-5xl">
              The Editorial Machine
            </p>
          </div>
        </header>
        <section className="grid gap-10 py-12 lg:grid-cols-[0.55fr_1.45fr]">
          <p className="text-sm font-black uppercase text-story">Conversation</p>
          <div>
            <p className="max-w-4xl text-4xl font-black uppercase leading-[0.95] text-white sm:text-6xl">
              A studio note on systems, pace, artificial intelligence, and the discipline of keeping a brand legible.
            </p>
          </div>
        </section>
        <section className="pb-24">
          {qa.map(([question, answer], index) => (
            <div
              key={question}
              className="grid gap-6 border-t border-story/25 py-9 lg:grid-cols-[0.25fr_0.75fr_1fr]"
            >
              <span className="text-sm font-black text-story">{String(index + 1).padStart(2, "0")}</span>
              <h2 className="text-3xl font-black uppercase leading-none text-white sm:text-5xl">
                {question}
              </h2>
              <p className="text-xl font-bold leading-tight text-white/70 sm:text-2xl">{answer}</p>
            </div>
          ))}
        </section>
      </div>
    </article>
  );
}
