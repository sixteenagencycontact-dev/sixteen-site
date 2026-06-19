import Link from "next/link";
import type { Project } from "@/lib/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group grid gap-6 border-b border-white/10 py-9 transition hover:border-white/40 md:grid-cols-[0.25fr_1fr_0.45fr]"
    >
      <span className="text-sm font-black text-white/35">{String(index + 1).padStart(2, "0")}</span>
      <span className="text-[15vw] font-black uppercase leading-[0.82] text-white transition group-hover:text-white/70 md:text-[7vw]">
        {project.title}
      </span>
      <span className="self-end text-lg font-bold leading-tight text-white/55 md:text-right">
        {project.discipline}
        <br />
        {project.year}
      </span>
    </Link>
  );
}
