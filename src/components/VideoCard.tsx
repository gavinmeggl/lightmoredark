import type { Video } from "@/content/site";
import Placeholder from "./Placeholder";

export default function VideoCard({ v, seed = 0 }: { v: Video; seed?: number }) {
  const src = v.youtubeId
    ? `https://www.youtube-nocookie.com/embed/${v.youtubeId}`
    : v.vimeoId
      ? `https://player.vimeo.com/video/${v.vimeoId}`
      : null;

  return (
    <article className="video">
      <div className="video-frame">
        {src ? (
          <iframe
            src={src}
            title={v.title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <Placeholder label={`▶ ${v.title}`} seed={seed} />
        )}
      </div>
      <div className="video-meta">
        <h3>{v.title}</h3>
        <span className="chip">{v.category}</span>
        {v.year && <span className="year">{v.year}</span>}
      </div>
    </article>
  );
}
