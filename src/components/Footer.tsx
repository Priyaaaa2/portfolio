import { footer } from "../data/content";

export function Footer() {
  return (
    <footer className="pb-28 pt-8">
      <div className="mx-auto flex max-w-4xl flex-col gap-2 px-6 text-sm sm:flex-row sm:items-center sm:justify-between">
        <span className="text-xs text-ink-400">{footer.copy}</span>
        <span className="text-xs text-ink-400">{footer.note}</span>
      </div>
    </footer>
  );
}
