import Media from "@/components/Media";
import VideoCard from "@/components/VideoCard";
import { riders, videos } from "@/content/site";

export const metadata = { title: "BMX" };

export default function BmxPage() {
  const clips = videos.filter((v) => v.category === "bmx");
  return (
    <>
      <section className="section bmx-hero">
        <h1 className="page-title huge">
          BMX
        </h1>
        <p className="lede">Street, park, trails. The crew that started it all.</p>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>The Crew</h2>
        </div>
        <div className="grid riders">
          {riders.map((r, i) => (
            <article key={r.name} className="rider" style={{ rotate: `${(i % 2 ? 1 : -1) * 1.5}deg` }}>
              <div className="rider-img">
                <Media src={r.src} alt={r.name} seed={i + 3} sizes="(max-width: 700px) 50vw, 25vw" />
              </div>
              <h3>{r.name}</h3>
              <p>{r.role}</p>
              {r.instagram && (
                <a href={`https://instagram.com/${r.instagram}`} target="_blank" rel="noreferrer">
                  @{r.instagram}
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="section dark-band">
        <div className="section-head">
          <h2>Clips</h2>
        </div>
        <div className="grid videos">
          {clips.map((v, i) => (
            <VideoCard key={i} v={v} seed={i + 1} />
          ))}
        </div>
      </section>
    </>
  );
}
