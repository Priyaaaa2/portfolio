import { useState } from "react";
import { featuredProjects, flagshipProject, moreProjects } from "../../data/content";
import { SectionHeading } from "../SectionHeading";
import { ProjectCard } from "./ProjectCard";

const mainProjects = [flagshipProject, ...featuredProjects, moreProjects[0]];
const restProjects = moreProjects.slice(1);

export function Projects() {
  const [showMore, setShowMore] = useState(false);
  const projects = showMore ? [...mainProjects, ...restProjects] : mainProjects;

  return (
    <section id="work" className="py-16">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading title="Projects" />

        <div className="grid gap-5 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={() => setShowMore((v) => !v)}
            className="text-sm font-medium text-ink-700 underline decoration-ink-300 underline-offset-4 hover:text-ink-900"
          >
            {showMore ? "Show less" : "View more projects"}
          </button>
        </div>
      </div>
    </section>
  );
}
