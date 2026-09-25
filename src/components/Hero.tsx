import { hero } from "../data/content";

export function Hero() {
  return (
    <section id="top" className="pb-16 pt-16 sm:pt-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="grid items-center gap-10 sm:grid-cols-[220px_1fr] sm:gap-14">
          <div className="mx-auto sm:mx-0">
            <div className="glass h-40 w-40 overflow-hidden rounded-full p-1.5 shadow-sm sm:h-52 sm:w-52">
              <img
                src="/hero.jpg"
                alt="Priyanka portrait"
                className="h-full w-full rounded-full object-cover"
              />
            </div>
          </div>
          <div>
            <h1 className="text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl">
              {hero.name}
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-ink-600">
              {hero.bio}
            </p>
            <span className="glass mt-5 inline-flex items-center rounded-full px-4 py-1.5 text-sm text-ink-700 shadow-sm">
              {hero.badge}
            </span>
            <div className="mt-7 flex flex-wrap gap-3">
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
        </div>
      </div>
    </section>
  );
}
