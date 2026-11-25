import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section center">
      <h1 className="page-title huge">404</h1>
      <p className="lede">Too dark in here.</p>
      <Link href="/" className="btn">
        Back to the light
      </Link>
    </section>
  );
}
