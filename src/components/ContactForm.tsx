import { useState, type FormEvent } from "react";
import { siteConfig } from "../data/siteConfig";
import { personal as p } from "../data/personal";
const TYPES = ["Internship opportunity", "Project collaboration", "Freelance work", "Technical discussion", "Other"];
export default function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [errs, setErrs] = useState<Record<string, string>>({});
  const [msg, setMsg] = useState("");
  const [copied, setCopied] = useState(false);
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const v = (k: string) => String(f.get(k) ?? "").trim();
    const er: Record<string, string> = {};
    if (!v("name")) er.name = "Enter your name.";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v("email"))) er.email = "Enter a valid email address.";
    if (v("message").length < 10) er.message = "Write at least 10 characters.";
    setErrs(er); if (Object.keys(er).length) return;
    setState("sending");
    try {
      const r = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: v("name"), email: v("email"), type: v("type"), message: v("message"), website: v("website") }) });
      const d = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error(d.error || "The message could not be delivered.");
      setState("ok"); (e.target as HTMLFormElement).reset();
    } catch (x) { setMsg((x as Error).message); setState("error"); }
  }
  return (
    <section id="contact" className="sec" style={{ background: "var(--color-panel-light)" }}>
      <p className="lbl">Let's connect</p><h2>{siteConfig.contactHeading}</h2>
      <p style={{ maxWidth: "56ch", marginTop: 12 }}>{siteConfig.contactText}</p>
      <form onSubmit={submit} noValidate>
        <label>Name<input name="name" autoComplete="name" /><span className="err">{errs.name}</span></label>
        <label>Email<input name="email" type="email" autoComplete="email" /><span className="err">{errs.email}</span></label>
        <label>Inquiry type<select name="type">{TYPES.map(t => <option key={t}>{t}</option>)}</select></label>
        <label>Message<textarea name="message" rows={5} /><span className="err">{errs.message}</span></label>
        <input className="hp" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
        <div className="row">
          <button className="btn solid" disabled={state === "sending"}>{state === "sending" ? "Sending…" : "Send message"}</button>
          <button type="button" className="btn" onClick={() => navigator.clipboard.writeText(p.email).then(() => { setCopied(true); setTimeout(() => setCopied(false), 2000); })}>{copied ? "Email copied" : "Copy email"}</button>
        </div>
        <div role="status">
          {state === "ok" && <p><b>Message delivered.</b> Thanks, I'll reply by email.</p>}
          {state === "error" && <p className="err">{msg} You can email <a href={`mailto:${p.email}`}>{p.email}</a> directly.</p>}
        </div>
      </form>
    </section>
  );
}
