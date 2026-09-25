import type { Project } from "../../data/content";
import { Tag } from "./Tag";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="glass flex flex-col rounded-3xl p-6 shadow-sm transition-transform hover:-translate-y-1">
      {project.badge && (
        <span className="mb-3 inline-block self-start rounded-full bg-white/70 px-2.5 py-0.5 text-xs text-ink-600">
          {project.badge}
        </span>
      )}
      <h3 className="text-base font-medium text-ink-900">{project.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>
      {project.links && (
        <div className="mt-4 flex gap-2">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-ink-900 px-4 py-1.5 text-xs font-medium text-paper transition-transform hover:-translate-y-0.5"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </article>
  );
}
