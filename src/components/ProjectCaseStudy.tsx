import { useEffect } from "react";
import { projects } from "../data/projects";
import Img from "./Img";
export default function ProjectCaseStudy({ id, onOpen, onClose }: { id: string; onOpen: (id: string) => void; onClose: () => void }) {
  const i = projects.findIndex(p => p.id === id);
  const p = projects[i];
  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    addEventListener("keydown", k); document.body.style.overflow = "hidden";
    return () => { removeEventListener("keydown", k); document.body.style.overflow = ""; };
  }, [onClose]);
  if (!p) return null;
  const next = projects[(i + 1) % projects.length];
  const S = ({ t, v }: { t: string; v: string }) => <><h4>{t}</h4><p>{v || <span className="lbl">Not added yet (projects.ts)</span>}</p></>;
  return (
    <div className="case" role="dialog" aria-modal="true" aria-label={p.title}><div className="in">
      <button className="btn" onClick={onClose} autoFocus>Close</button>
      <p className="lbl" style={{ marginTop: 20 }}>{p.category.join(" / ")} · {p.status}</p><h2>{p.title}</h2>
      <p>{p.fullDescription || p.shortDescription}</p>
      <div className="hero-img"><Img src={p.image} alt={`${p.title} screenshot`} /></div>
      <S t="Problem" v={p.problem} /><S t="Solution" v={p.solution} />
      <h4>Key features</h4>{p.keyFeatures.length ? <ul>{p.keyFeatures.map(f => <li key={f}>{f}</li>)}</ul> : <p className="lbl">Not added yet</p>}
      <h4>Technologies</h4><p>{p.technologies.join(", ") || <span className="lbl">Not added yet</span>}</p>
      <S t="My contribution" v={p.myContribution} /><S t="Challenges and lessons" v={p.challenges} />
      {p.gallery.length > 0 && <div className="grid">{p.gallery.map(g => <div key={g} className="imgw card"><Img src={g} alt={`${p.title} gallery`} /></div>)}</div>}
      <div className="row" style={{ marginTop: 24 }}>
        {p.githubUrl ? <a className="btn" href={p.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a> : <span className="lbl">No repository yet</span>}
        {p.liveDemoUrl ? <a className="btn" href={p.liveDemoUrl} target="_blank" rel="noopener noreferrer">Live demo</a> : <span className="lbl">No live demo yet</span>}
        {next.id !== p.id && <button className="btn solid" onClick={() => onOpen(next.id)}>Next: {next.title}</button>}
      </div>
    </div></div>
  );
}
