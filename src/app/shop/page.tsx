import ProductCard from "@/components/ProductCard";
import { products, shopOpen } from "@/content/site";

export const metadata = { title: "Shop" };

export default function ShopPage() {
  return (
    <section className="section">
      <h1 className="page-title">
        SHOP<span>/{products.length}</span>
      </h1>
      <p className="lede">
        {shopOpen
          ? "Limited runs. When it's gone, it's gone."
          : "The first drop isn't out yet. Here's a look at what's coming."}
      </p>
      <div className="grid products">
        {products.map((p, i) => (
          <ProductCard key={p.slug} p={p} seed={i + 1} />
        ))}
      </div>
    </section>
  );
}
