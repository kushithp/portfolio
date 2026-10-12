import type { Project } from "../data/projects";
import Img from "./Img";
export default function ProjectCard({ project: p, onOpen }: { project: Project; onOpen: (id: string) => void }) {
  return (
    <button className="card" onClick={() => onOpen(p.id)} aria-label={`Open ${p.title} case study`}>
      <div className="imgw"><Img src={p.image} alt={`${p.title} screenshot`} label={`Add ${p.image}`} /></div>
      <div className="cap">
        <span className="arr" aria-hidden="true">↗</span>
        <p className="lbl">{p.category.join(" / ")} · {p.status}</p>
        <h3>{p.title}</h3><p>{p.shortDescription}</p>
        <p className="lbl" style={{ marginTop: 8 }}>{p.technologies.join(", ") || "Add technologies"} · {p.githubUrl ? "GitHub" : "No repo yet"} · {p.liveDemoUrl ? "Live demo" : "No demo yet"}</p>
      </div>
    </button>
  );
}
