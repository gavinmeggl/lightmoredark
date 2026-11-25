import { site } from "@/content/site";

export default function Ticker({ invert = false }: { invert?: boolean }) {
  const items = [...site.ticker, ...site.ticker, ...site.ticker];
  return (
    <div className={`ticker ${invert ? "invert" : ""}`} aria-hidden="true">
      <div className="ticker-track">
        {[0, 1].map((k) => (
          <span key={k} className="ticker-run">
            {items.map((t, i) => (
              <span key={i}>
                {t} <b>✺</b>{" "}
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}
