import { experience } from "../data/content";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="py-16">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading title="Experience" />
        <div className="flex flex-col gap-5">
          {experience.map((item) => (
            <div
              key={item.org}
              className="glass grid gap-4 rounded-3xl p-7 shadow-sm sm:grid-cols-[200px_1fr] sm:gap-8"
            >
              <div>
                <div className="text-sm font-medium text-ink-700">{item.org}</div>
                <div className="mt-1 text-xs text-ink-400">{item.period}</div>
                <div className="text-xs text-ink-400">{item.location}</div>
                {item.pill && (
                  <span className="mt-2 inline-flex rounded-full bg-white/70 px-2.5 py-0.5 text-xs text-ink-600">
                    {item.pill}
                  </span>
                )}
              </div>
              <div>
                <div className="text-base font-medium text-ink-900">{item.role}</div>
                <ul className="mt-3 flex flex-col gap-2">
                  {item.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="relative pl-4 text-sm leading-relaxed text-ink-600"
                    >
                      <span className="absolute left-0 top-2 h-1 w-1 rounded-full bg-accent" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
