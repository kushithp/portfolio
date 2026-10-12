import { useEffect, useState } from "react";
import { siteConfig } from "../data/siteConfig";
import { personal } from "../data/personal";
export default function Navigation({ theme, onTheme }: { theme: string; onTheme: () => void }) {
  const [open, setOpen] = useState(false);
  const [resumeOk, setResumeOk] = useState(false);
  useEffect(() => {
    if (!personal.resume) return;
    fetch(personal.resume, { method: "HEAD" }).then(r => setResumeOk(r.ok && (r.headers.get("content-type") ?? "").includes("pdf"))).catch(() => setResumeOk(false));
  }, []);
  return (
    <nav aria-label="Main">
      <span className="mono" aria-hidden="true">{siteConfig.monogram}</span>
      <b>{personal.displayName}</b>
      <button className="btn menu" aria-expanded={open} onClick={() => setOpen(!open)}>Menu</button>
      <div className={"links" + (open ? " open" : "")} onClick={() => setOpen(false)}>
        {siteConfig.nav.map(([l, id]) => <a key={id} href={"#" + id}>{l}</a>)}
        <button className="btn" onClick={onTheme}>{theme === "dark" ? "Light" : "Dark"}</button>
        {resumeOk ? <a className="btn" href={personal.resume} download>Resume</a> : <span className="lbl" style={{ alignSelf: "center" }}>Resume: add public/documents/resume.pdf</span>}
      </div>
    </nav>
  );
}
