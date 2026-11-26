import Image from "next/image";
import { site } from "@/content/site";
import { Emblem } from "./Logo";
import Ticker from "./Ticker";

export default function Footer() {
  return (
    <footer>
      <Ticker invert />
      <div className="footer">
        <div className="footer-brand">
          <Image
            src="/brand/stack-color.png"
            alt="Light More Dark"
            width={1479}
            height={317}
            className="footer-stack"
          />
          <p>{site.tagline}</p>
        </div>
        <div className="footer-cols">
          <div>
            <h4>Follow</h4>
            {site.socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
                {s.label}
              </a>
            ))}
          </div>
          <div>
            <h4>Contact</h4>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <span>Bookings / collabs / wholesale</span>
          </div>
          <div className="footer-emblem">
            <Emblem size={96} />
          </div>
        </div>
        <p className="copyright">© {new Date().getFullYear()} Light More Dark. All rights reserved.</p>
      </div>
    </footer>
  );
}
