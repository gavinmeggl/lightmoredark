// Shown wherever a real image hasn't been added yet.
const palettes = [
  ["#111", "#00bf63"],
  ["#dc1400", "#f2ecdf"],
  ["#f2ecdf", "#111"],
  ["#004aad", "#f2ecdf"],
  ["#111", "#dc1400"],
  ["#00bf63", "#111"],
];

export default function Placeholder({ label, seed = 0 }: { label: string; seed?: number }) {
  const [bg, fg] = palettes[Math.abs(seed) % palettes.length];
  return (
    <div className="placeholder" style={{ background: bg, color: fg }}>
      <span>{label}</span>
    </div>
  );
}
