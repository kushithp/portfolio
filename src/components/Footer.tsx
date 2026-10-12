import { personal as p } from "../data/personal";
import { siteConfig } from "../data/siteConfig";
export default function Footer() {
  return (
    <footer>
      <span><b>{siteConfig.monogram}</b> © {new Date().getFullYear()} {p.fullName}</span>
      <span className="row">{p.github && <a href={p.github} target="_blank" rel="noopener noreferrer">GitHub</a>}{p.linkedin && <a href={p.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>}<a href={`mailto:${p.email}`}>Email</a></span>
      <span>{siteConfig.footerText} · <a href="#home">Back to top</a></span>
    </footer>
  );
}
