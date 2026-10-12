import { siteConfig } from "../data/siteConfig";
import { education, certifications, achievements, milestones, type Entry } from "../data/education";
export default function EducationTimeline() {
  const s = siteConfig.sections;
  const blocks: [string, Entry[]][] = [["Education", education], ["Milestones", milestones],
    ["Certifications", s.certifications ? certifications : []], ["Achievements", s.achievements ? achievements : []]];
  const shown = blocks.filter(([, e]) => e.length);
  if (!shown.length) return null;
  return (
    <section id="journey" className="sec"><p className="lbl">Education &amp; journey</p><h2>Path so far.</h2>
      {shown.map(([t, e]) => <div key={t} style={{ marginTop: 26 }}><p className="lbl">{t}</p>
        <div className="tl">{e.map(x => <div key={x.title}><span className="lbl">{x.date}</span><br /><b>{x.title}</b>{x.detail && <p>{x.detail}</p>}</div>)}</div></div>)}
    </section>
  );
}
