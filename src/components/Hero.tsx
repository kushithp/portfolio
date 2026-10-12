import { personal as p } from "../data/personal";
import { siteConfig } from "../data/siteConfig";
import Img from "./Img";
export default function Hero() {
  const links = [["GitHub", p.github], ["LinkedIn", p.linkedin], ...p.otherLinks.map(l => [l.label, l.url])].filter(([, u]) => u);
  return (
    <header id="home" className="hero">
      <div>
        <p className="lbl">Hello, world. I'm {p.displayName}</p>
        <div>
          <h1>{siteConfig.heroHeadline}</h1>
          <p style={{ fontWeight: 600, marginTop: 14 }}>{p.title}</p>
          <p style={{ maxWidth: "46ch", margin: "14px 0 20px" }}>{p.intro}</p>
          <div className="row">
            <a className="btn solid" href="#work">Explore selected work</a><a className="btn" href="#contact">Let's talk</a>
            {links.map(([l, u]) => <a key={l} className="btn" href={u} target="_blank" rel="noopener noreferrer">{l}</a>)}
          </div>
        </div>
      </div>
      <div className="pic"><Img src={p.profilePhoto} alt={`Portrait of ${p.displayName}`} label="Add public/images/profile.jpg" /></div>
    </header>
  );
}
