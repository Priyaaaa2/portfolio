import { education, referee } from "../data/content";
import { SectionHeading } from "./SectionHeading";

export function Education() {
  return (
    <section id="education" className="py-16">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading title="Education" />
        <div className="grid gap-5 sm:grid-cols-2">
          {education.map((item) => (
            <div key={item.degree} className="glass rounded-3xl p-6 shadow-sm">
              <div className="text-base font-medium text-ink-900">{item.degree}</div>
              <div className="mt-1 text-sm text-ink-600">{item.school}</div>
              <div className="mt-1 text-xs text-ink-400">{item.period}</div>
              <p className="mt-3 text-sm leading-relaxed text-ink-600">{item.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.chips.map((chip) => (
                  <span
                    key={chip.label}
                    className="rounded-full bg-white/70 px-2.5 py-0.5 text-xs text-ink-600"
                  >
                    {chip.label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-5 text-xs text-ink-400">{referee}</p>
      </div>
    </section>
  );
}
