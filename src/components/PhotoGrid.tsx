"use client";

import { useEffect, useState } from "react";
import Media from "./Media";
import type { Photo } from "@/content/site";

export default function PhotoGrid({ photos }: { photos: Photo[] }) {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((o) => (o === null ? o : (o + 1) % photos.length));
      if (e.key === "ArrowLeft") setOpen((o) => (o === null ? o : (o - 1 + photos.length) % photos.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, photos.length]);

  return (
    <>
      <div className="masonry">
        {photos.map((p, i) => (
          <button
            key={i}
            className={`photo ${p.tall ? "tall" : ""}`}
            onClick={() => setOpen(i)}
            aria-label={`Open ${p.title}`}
          >
            <Media src={p.src} alt={p.title} seed={i} />
            <span className="photo-cap">
              {p.title}
              {p.place && <small> — {p.place}</small>}
            </span>
          </button>
        ))}
      </div>

      {open !== null && (
        <div className="lightbox" onClick={() => setOpen(null)} role="dialog" aria-modal="true">
          <div className="lightbox-frame" onClick={(e) => e.stopPropagation()}>
            <Media src={photos[open].src} alt={photos[open].title} seed={open} sizes="90vw" />
          </div>
          <p className="lightbox-cap">
            {photos[open].title} {photos[open].place && `— ${photos[open].place}`}
          </p>
          <button className="lightbox-x" onClick={() => setOpen(null)} aria-label="Close">
            ✕
          </button>
        </div>
      )}
    </>
  );
}
