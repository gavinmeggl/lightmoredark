import Link from "next/link";
import Logo from "@/components/Logo";
import Ticker from "@/components/Ticker";
import ProductCard from "@/components/ProductCard";
import Media from "@/components/Media";
import { photos, products, site } from "@/content/site";

const tiles = [
  { href: "/photo", label: "PHOTO", note: "stills from the road", cls: "t-sun" },
  { href: "/video", label: "VIDEO", note: "films, parts, sessions", cls: "t-ink" },
  { href: "/bmx", label: "BMX", note: "the crew & the clips", cls: "t-red" },
  { href: "/shop", label: "SHOP", note: "cloth for the collective", cls: "t-blue" },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-half light">
          <span className="hero-word">LIGHT</span>
        </div>
        <div className="hero-half dark">
          <span className="hero-word">DARK</span>
        </div>
        <div className="hero-center">
          <div className="hero-logo">
            <Logo size={220} />
          </div>
          <span className="hero-more">MORE</span>
          <p className="hero-tag">{site.tagline}</p>
          <Link href="/shop" className="btn">
            Shop the drop →
          </Link>
        </div>
      </section>

      <Ticker />

      <section className="tiles">
        {tiles.map((t, i) => (
          <Link key={t.href} href={t.href} className={`tile ${t.cls}`} style={{ rotate: `${[-2, 1.5, -1, 2][i]}deg` }}>
            <span className="tile-label">{t.label}</span>
            <span className="tile-note">{t.note}</span>
          </Link>
        ))}
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Latest Drop</h2>
          <Link href="/shop">All products →</Link>
        </div>
        <div className="grid products">
          {products.slice(0, 4).map((p, i) => (
            <ProductCard key={p.slug} p={p} seed={i + 1} />
          ))}
        </div>
      </section>

      <section className="section dark-band">
        <div className="section-head">
          <h2>From The Lens</h2>
          <Link href="/photo">Full gallery →</Link>
        </div>
        <div className="strip">
          {photos.slice(0, 5).map((p, i) => (
            <Link key={i} href="/photo" className="strip-item" style={{ rotate: `${(i % 2 ? 1 : -1) * 2}deg` }}>
              <Media src={p.src} alt={p.title} seed={i + 2} />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
