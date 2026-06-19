import { PageHero } from "@/components/page-hero";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/projects";

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Work"
        title="Selected Projects"
        text="Brand systems, editorial campaigns, spatial identities, and AI-shaped production."
      />
      <section className="px-5 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1800px]">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </section>
    </>
  );
}
