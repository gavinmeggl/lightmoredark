import VideoCard from "@/components/VideoCard";
import { videos } from "@/content/site";

export const metadata = { title: "Video" };

export default function VideoPage() {
  return (
    <section className="section">
      <h1 className="page-title">
        VIDEO<span>/{videos.length}</span>
      </h1>
      <p className="lede">Films, full parts and whatever else we pointed a camera at.</p>
      <div className="grid videos">
        {videos.map((v, i) => (
          <VideoCard key={i} v={v} seed={i} />
        ))}
      </div>
    </section>
  );
}
