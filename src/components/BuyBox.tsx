"use client";

import { useState } from "react";
import { currency, site, type Product } from "@/content/site";

export default function BuyBox({ p }: { p: Product }) {
  const [size, setSize] = useState(p.sizes.length === 1 ? p.sizes[0] : "");
  const link = (size && p.sizeLinks?.[size]) || p.buyLink;

  let cta: React.ReactNode;
  if (p.soldOut) {
    cta = <span className="btn disabled">Sold out</span>;
  } else if (!size) {
    cta = <span className="btn disabled">Pick a size</span>;
  } else if (link) {
    cta = (
      <a className="btn" href={link}>
        Buy now — {currency}
        {p.price}
      </a>
    );
  } else {
    cta = (
      <a
        className="btn"
        href={`mailto:${site.email}?subject=${encodeURIComponent(`Order: ${p.name} (${size})`)}`}
      >
        Order by email — {currency}
        {p.price}
      </a>
    );
  }

  return (
    <div className="buybox">
      <p className="price">
        {currency}
        {p.price}
      </p>
      <p className="muted">{p.colorway}</p>
      <div className="sizes" role="radiogroup" aria-label="Size">
        {p.sizes.map((s) => (
          <button
            key={s}
            role="radio"
            aria-checked={size === s}
            className={size === s ? "on" : ""}
            onClick={() => setSize(s)}
            disabled={p.soldOut}
          >
            {s}
          </button>
        ))}
      </div>
      {cta}
      <p className="desc">{p.description}</p>
    </div>
  );
}
