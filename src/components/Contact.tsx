import { contact, hero } from "../data/content";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading title={contact.title} />
        <div className="grid gap-10 sm:grid-cols-2 sm:gap-16">
          <div>
            <p className="text-base leading-relaxed text-ink-600">{contact.body}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`mailto:${hero.email}`}
                className="rounded-full bg-ink-900 px-5 py-2.5 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5"
              >
                {hero.email}
              </a>
              <a
                href={hero.linkedin}
                target="_blank"
                rel="noreferrer"
                className="glass rounded-full px-5 py-2.5 text-sm font-medium text-ink-900 shadow-sm transition-transform hover:-translate-y-0.5"
              >
                LinkedIn
              </a>
              <a
                href={hero.github}
                target="_blank"
                rel="noreferrer"
                className="glass rounded-full px-5 py-2.5 text-sm font-medium text-ink-900 shadow-sm transition-transform hover:-translate-y-0.5"
              >
                GitHub
              </a>
            </div>
          </div>
          <div className="glass hidden rounded-3xl p-9 shadow-sm sm:block">
            <div className="text-4xl font-semibold text-ink-900">{contact.panelStat}</div>
            <div className="mt-1.5 text-sm text-ink-500">{contact.panelLabel}</div>
            <div className="mt-5 text-sm text-accent-dark">{contact.panelNote}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
