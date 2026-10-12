import { useRef, useState } from "react";
import { siteConfig } from "../data/siteConfig";
import { personal } from "../data/personal";
import { projects } from "../data/projects";
import { skills } from "../data/skills";
type M = { role: "user" | "assistant"; content: string };
const SUGGEST = ["What projects has this developer built?", "What technologies are used?", "How can I contact them?"];
// Public portfolio data sent as grounding. Secrets stay on the server.
const context = { personal: { ...personal, phone: "" }, projects, skills };
export default function AIChat() {
  const [open, setOpen] = useState(false);
  const [log, setLog] = useState<M[]>([]);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");
  const last = useRef<M[]>([]);
  async function send(text: string, base: M[] = log) {
    if (!text.trim() || busy) return;
    const next = [...base, { role: "user", content: text } as M];
    last.current = next; setLog(next); setBusy(true); setErr("");
    try {
      const r = await fetch("/api/chat", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ messages: next.slice(-8), context }) });
      const d = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error(d.error || "The assistant is unavailable.");
      setLog([...next, { role: "assistant", content: d.reply }]);
    } catch (x) { setErr((x as Error).message); } finally { setBusy(false); }
  }
  return (<>
    <button className="btn solid chatbtn" aria-expanded={open} onClick={() => setOpen(!open)}>{siteConfig.assistantName}</button>
    {open && <div className="chat" role="dialog" aria-label={siteConfig.assistantName}>
      <div className="log" aria-live="polite">
        {!log.length && <><p className="lbl">Ask about projects, skills or contact</p>{SUGGEST.map(s => <button key={s} className="chip" onClick={() => send(s)}>{s}</button>)}</>}
        {log.map((m, i) => <div key={i} className={"msg " + (m.role === "user" ? "u" : "")}>{m.content}</div>)}
        {busy && <div className="msg">Thinking…</div>}
        {err && <div className="msg"><span className="err">{err}</span> Email <a href={`mailto:${personal.email}`}>{personal.email}</a> instead, or <button className="chip" onClick={() => send(last.current.at(-1)!.content, last.current.slice(0, -1))}>retry</button></div>}
      </div>
      <form style={{ margin: 0, padding: 8, maxWidth: "none", display: "flex" }} onSubmit={e => { e.preventDefault(); const i = e.currentTarget.elements.namedItem("q") as HTMLInputElement; send(i.value); i.value = ""; }}>
        <input name="q" aria-label="Your question" placeholder="Type a question" /><button className="btn solid">Send</button>
      </form>
    </div>}
  </>);
}
