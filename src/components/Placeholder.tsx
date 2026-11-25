// Shown wherever a real image hasn't been added yet.
const palettes = [
  ["#111", "#f5e400"],
  ["#ff3b1f", "#111"],
  ["#f2ecdf", "#111"],
  ["#2b4bff", "#f2ecdf"],
  ["#111", "#ff3b1f"],
  ["#f5e400", "#111"],
];

export default function Placeholder({ label, seed = 0 }: { label: string; seed?: number }) {
  const [bg, fg] = palettes[Math.abs(seed) % palettes.length];
  return (
    <div className="placeholder" style={{ background: bg, color: fg }}>
      <span>{label}</span>
    </div>
  );
}
