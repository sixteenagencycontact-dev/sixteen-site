import { notFound } from "next/navigation";
import Link from "next/link";
import { MotionSection } from "@/components/motion-section";
import { getProject, projects } from "@/lib/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  return {
    title: project ? `${project.title} | SIXTEEN` : "Project | SIXTEEN",
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <section className="px-5 pt-36 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1800px] border-b border-white/10 pb-10">
          <Link href="/work" className="text-sm font-black uppercase text-white/45 hover:text-white">
            Work
          </Link>
          <h1 className="mt-8 max-w-[12ch] text-[20vw] font-black uppercase leading-[0.78] text-white sm:text-[15vw] lg:text-[12vw]">
            {project.title}
          </h1>
        </div>
      </section>

      <MotionSection className="px-5 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1800px] gap-10 lg:grid-cols-[0.65fr_1.35fr]">
          <div className="grid gap-8 text-sm font-black uppercase text-white/50 sm:grid-cols-2 lg:block lg:space-y-8">
            <p>
              Discipline
              <br />
              <span className="text-white">{project.discipline}</span>
            </p>
            <p>
              Year
              <br />
              <span className="text-white">{project.year}</span>
            </p>
          </div>
          <div>
            <p className="text-4xl font-black uppercase leading-[0.95] text-white sm:text-6xl lg:text-7xl">
              {project.statement}
            </p>
            <p className="mt-8 max-w-3xl text-xl font-bold leading-tight text-white/65 sm:text-2xl">
              {project.summary}
            </p>
          </div>
        </div>
      </MotionSection>

      <section className="px-5 pb-24 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1800px] gap-4 md:grid-cols-3">
          {project.details.map((detail) => (
            <div key={detail} className="min-h-52 border border-white/10 p-5">
              <p className="text-3xl font-black uppercase leading-none text-white">{detail}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
