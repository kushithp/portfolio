import { skills } from "../data/skills";
export default function Skills() {
  const groups = skills.filter(g => g.items.length);
  if (!groups.length) return null;
  return (
    <section id="skills" className="sec"><p className="lbl">Skills &amp; technologies</p><h2>What I work with.</h2>
      <div className="cells">{groups.map(g => <div key={g.category}><p className="lbl">{g.category}</p>
        {g.items.map(s => <span className="t" key={s.name}>{s.name}{s.status === "learning" ? " (learning)" : ""}</span>)}</div>)}</div>
    </section>
  );
}
