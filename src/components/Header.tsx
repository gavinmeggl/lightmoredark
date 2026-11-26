import Link from "next/link";
import { Emblem, Wordmark } from "./Logo";

const nav = [
  { href: "/photo", label: "Photo" },
  { href: "/video", label: "Video" },
  { href: "/bmx", label: "BMX" },
  { href: "/shop", label: "Shop" },
];

export default function Header() {
  return (
    <header className="header">
      <Link href="/" className="brand" aria-label="Light More Dark home">
        <Emblem size={44} priority />
        <Wordmark width={220} priority className="brand-word" />
      </Link>
      <nav className="nav">
        {nav.map((n) => (
          <Link key={n.href} href={n.href}>
            {n.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
