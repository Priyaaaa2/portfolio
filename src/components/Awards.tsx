import { awards } from "../data/content";
import { SectionHeading } from "./SectionHeading";

export function Awards() {
  return (
    <section id="awards" className="py-16">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading title="Awards" />
        <div className="grid gap-4 sm:grid-cols-3">
          {awards.map((award) => (
            <div key={award.prize} className="glass rounded-2xl p-5 shadow-sm">
              <div className="text-sm font-medium text-ink-900">{award.prize}</div>
              <div className="mt-1.5 text-xs leading-relaxed text-ink-500">
                {award.event}
              </div>
              <div className="mt-3 text-xs text-ink-400">{award.year}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
