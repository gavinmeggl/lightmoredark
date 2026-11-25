import ProductCard from "@/components/ProductCard";
import { products } from "@/content/site";

export const metadata = { title: "Shop" };

export default function ShopPage() {
  return (
    <section className="section">
      <h1 className="page-title">
        SHOP<span>/{products.length}</span>
      </h1>
      <p className="lede">Limited runs. When it&apos;s gone, it&apos;s gone.</p>
      <div className="grid products">
        {products.map((p, i) => (
          <ProductCard key={p.slug} p={p} seed={i + 1} />
        ))}
      </div>
    </section>
  );
}
