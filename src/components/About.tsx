import { personal as p } from "../data/personal";
import { siteConfig } from "../data/siteConfig";
import Img from "./Img";
export default function About() {
  const facts = [["College", p.college], ["Degree", p.degree], ["Year", p.academicYear], ["Graduation", p.graduationYear], ["Location", p.location], ["Interests", p.careerInterests.join(", ")],
    ["Availability", p.internship.open ? p.internship.note : ""],
    ["Currently learning", siteConfig.sections.currentlyLearning ? p.currentlyLearning.join(", ") : ""]].filter(([, v]) => v);
  return (
    <section id="about" className="sec">
      <p className="lbl">About / Background</p><h2>This is me.</h2>
      <div className="split" style={{ marginTop: 24 }}>
        <div style={{ aspectRatio: "4/3" }}><Img src={p.aboutPhoto} alt="Personal photo" label="Add public/images/about.jpg" /></div>
        <div>{p.about.map((t, i) => <p key={i}>{t}</p>)}
          <div className="cells" style={{ gridTemplateColumns: "1fr 1fr" }}>{facts.map(([k, v]) => <div key={k}><span className="lbl">{k}</span><br />{v}</div>)}</div>
        </div>
      </div>
    </section>
  );
}
