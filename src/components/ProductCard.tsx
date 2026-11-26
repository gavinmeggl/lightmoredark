import Link from "next/link";
import Media from "./Media";
import { currency, shopOpen, type Product } from "@/content/site";

export default function ProductCard({ p, seed = 0 }: { p: Product; seed?: number }) {
  return (
    <Link href={`/shop/${p.slug}`} className="product">
      <div className="product-img">
        <Media src={p.images[0]} alt={p.name} seed={seed} />
        {!shopOpen ? (
          <span className="sticker">SOON</span>
        ) : p.soldOut ? (
          <span className="sticker sold">SOLD OUT</span>
        ) : (
          p.tag && <span className="sticker">{p.tag}</span>
        )}
      </div>
      <div className="product-meta">
        <h3>{p.name}</h3>
        <span>
          {currency}
          {p.price}
        </span>
      </div>
      <small>{p.colorway}</small>
    </Link>
  );
}
