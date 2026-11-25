import PhotoGrid from "@/components/PhotoGrid";
import { photos } from "@/content/site";

export const metadata = { title: "Photo" };

export default function PhotoPage() {
  return (
    <section className="section">
      <h1 className="page-title">
        PHOTO<span>/{photos.length}</span>
      </h1>
      <p className="lede">Stills from the streets, the shows and the sessions. Tap any frame to blow it up.</p>
      <PhotoGrid photos={photos} />
    </section>
  );
}
