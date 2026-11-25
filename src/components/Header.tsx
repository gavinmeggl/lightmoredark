import Link from "next/link";
import Logo from "./Logo";

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
        <Logo size={44} />
        <span className="brand-word">
          LIGHT <em>MORE</em> DARK
        </span>
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
