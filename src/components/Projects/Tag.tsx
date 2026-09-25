export function Tag({ label }: { label: string }) {
  return (
    <span className="rounded-full bg-white/60 px-2.5 py-0.5 text-xs text-ink-600">
      {label}
    </span>
  );
}
