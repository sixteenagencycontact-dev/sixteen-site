export type Project = {
  slug: string;
  title: string;
  discipline: string;
  year: string;
  summary: string;
  statement: string;
  details: string[];
};

export const projects: Project[] = [
  {
    slug: "seadog",
    title: "SeaDog",
    discipline: "Identity / Content",
    year: "2026",
    summary: "A coastal brand system with sharp naming, social rhythm, and a visual language built for motion.",
    statement:
      "SeaDog moves between hospitality and culture: direct, sun-cut, unmistakably contemporary.",
    details: ["Brand direction", "Launch assets", "Motion-led social formats"],
  },
  {
    slug: "cubo-roma",
    title: "Cubo Roma",
    discipline: "Strategy / Experience",
    year: "2026",
    summary: "A spatial identity for a Roman venue shaped around modular campaigns and tactile digital storytelling.",
    statement:
      "Cubo Roma uses geometry as an attitude: precise, urban, and ready to hold different cultural speeds.",
    details: ["Positioning", "Editorial campaign", "Experience design"],
  },
  {
    slug: "corso-trieste",
    title: "Corso Trieste",
    discipline: "Real Estate / Editorial",
    year: "2025",
    summary: "An elegant editorial framework for a residential address with restraint, clarity, and quiet authority.",
    statement:
      "Corso Trieste turns architecture into sequence: location, light, material, and desire.",
    details: ["Sales narrative", "Art direction", "Digital brochure"],
  },
  {
    slug: "logo-systems",
    title: "Logo Systems",
    discipline: "Identity Systems",
    year: "2025",
    summary: "A collection of modular marks and identity rules for companies that need durable visual foundations.",
    statement:
      "Logo Systems is built around reduction: fewer signs, stronger memory, cleaner rollouts.",
    details: ["Logo design", "Design systems", "Guideline kits"],
  },
  {
    slug: "ai-content",
    title: "AI Content",
    discipline: "AI / Production",
    year: "2026",
    summary: "A production workflow for campaigns that blends generative tools with editorial direction.",
    statement:
      "AI Content keeps the human eye in charge while compressing production time and widening visual range.",
    details: ["Prompt systems", "Content pipelines", "Creative QA"],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
