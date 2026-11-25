import Image from "next/image";
import Placeholder from "./Placeholder";

export default function Media({
  src,
  alt,
  seed = 0,
  sizes = "(max-width: 700px) 100vw, 33vw",
}: {
  src?: string;
  alt: string;
  seed?: number;
  sizes?: string;
}) {
  if (!src) return <Placeholder label={alt} seed={seed} />;
  return <Image src={src} alt={alt} fill sizes={sizes} style={{ objectFit: "cover" }} />;
}
