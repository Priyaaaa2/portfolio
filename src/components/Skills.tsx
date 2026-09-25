import { skills } from "../data/content";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="py-16">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading title="Skills" />
        <div className="glass grid gap-8 rounded-3xl p-7 shadow-sm sm:grid-cols-3">
          {skills.map((group) => (
            <div key={group.group}>
              <div className="mb-3 text-sm font-medium text-ink-700">{group.group}</div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-white/70 px-3 py-1 text-xs text-ink-600"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
