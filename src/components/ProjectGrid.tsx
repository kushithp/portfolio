import { useMemo, useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
export default function ProjectGrid({ onOpen }: { onOpen: (id: string) => void }) {
  const [cat, setCat] = useState("All");
  const [q, setQ] = useState("");
  const cats = useMemo(() => ["All", ...Array.from(new Set(projects.flatMap(p => p.category)))], []);
  const list = projects.filter(p => (cat === "All" || p.category.includes(cat)) &&
    [p.title, p.shortDescription, ...p.technologies].join(" ").toLowerCase().includes(q.toLowerCase()));
  return (
    <section id="work" className="sec">
      <p className="lbl">Selected work</p><h2>Selected work.</h2>
      <div className="row" role="group" aria-label="Filter projects" style={{ marginTop: 18 }}>
        {cats.map(c => <button key={c} className="chip" aria-pressed={c === cat} onClick={() => setCat(c)}>{c}</button>)}
      </div>
      <label style={{ maxWidth: 300, marginTop: 14 }}><span className="lbl">Search projects</span><input type="search" value={q} onChange={e => setQ(e.target.value)} placeholder="Title, description or technology" /></label>
      <div className="grid" aria-live="polite">{list.map(p => <ProjectCard key={p.id} project={p} onOpen={onOpen} />)}</div>
      {!list.length && <p style={{ marginTop: 20 }}><b>No projects match.</b> Clear the search or choose All.</p>}
    </section>
  );
}
