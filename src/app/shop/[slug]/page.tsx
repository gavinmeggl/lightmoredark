import Link from "next/link";
import { notFound } from "next/navigation";
import BuyBox from "@/components/BuyBox";
import Media from "@/components/Media";
import { getProduct, products } from "@/content/site";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return { title: getProduct(slug)?.name ?? "Product" };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) notFound();
  const imgs = p.images.length ? p.images : [undefined, undefined];

  return (
    <section className="section">
      <Link href="/shop" className="back">
        ← Back to shop
      </Link>
      <div className="pdp">
        <div className="pdp-imgs">
          {imgs.map((src, i) => (
            <div key={i} className="pdp-img">
              <Media src={src} alt={`${p.name} ${i + 1}`} seed={i + 1} sizes="(max-width: 900px) 100vw, 55vw" />
            </div>
          ))}
        </div>
        <div>
          <h1 className="pdp-title">{p.name}</h1>
          <BuyBox p={p} />
        </div>
      </div>
    </section>
  );
}
