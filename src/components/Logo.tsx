// Sun/moon split mark — half lit, half dark.
export default function Logo({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true">
      <g stroke="var(--ink)" strokeWidth="5" strokeLinecap="round">
        {Array.from({ length: 8 }).map((_, i) => {
          const a = (90 + i * (180 / 7)) * (Math.PI / 180);
          return (
            <line
              key={i}
              x1={50 + Math.cos(a) * 36}
              y1={50 + Math.sin(a) * 36}
              x2={50 + Math.cos(a) * 47}
              y2={50 + Math.sin(a) * 47}
            />
          );
        })}
      </g>
      <path d="M50 20 A30 30 0 0 0 50 80 Z" fill="var(--sun)" stroke="var(--ink)" strokeWidth="5" />
      <path d="M50 20 A30 30 0 0 1 50 80 Z" fill="var(--ink)" stroke="var(--ink)" strokeWidth="5" />
      <circle cx="62" cy="42" r="4" fill="var(--paper)" />
      <circle cx="38" cy="42" r="4" fill="var(--ink)" />
    </svg>
  );
}
