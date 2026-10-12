// Small Express server. Holds all secrets; the browser never sees them.
import express from "express";
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
const app = express();
app.use(express.json({ limit: "60kb" }));
const hits = new Map();
const limited = (req, max) => { // simple in-memory rate limit: max requests per 10 min per IP
  const k = req.path + req.ip, now = Date.now(), a = (hits.get(k) ?? []).filter(t => now - t < 6e5);
  a.push(now); hits.set(k, a); return a.length > max;
};
const { AI_API_KEY, AI_MODEL = "claude-sonnet-4-6", RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL = "onboarding@resend.dev" } = process.env;

app.post("/api/chat", async (req, res) => {
  if (!AI_API_KEY) return res.status(503).json({ error: "The AI assistant is not configured yet." });
  if (limited(req, 20)) return res.status(429).json({ error: "Too many questions. Try again in a few minutes." });
  const { messages, context } = req.body ?? {};
  if (!Array.isArray(messages) || !messages.length || !context) return res.status(400).json({ error: "Invalid request." });
  const system = "You are a portfolio guide. Answer ONLY from the portfolio data below. If something is not in the data, say you don't know and suggest contacting the developer by email. Never invent credentials, achievements, experience or links. Be brief and friendly.\n\nDATA:\n" + JSON.stringify(context).slice(0, 30000);
  try {
    const r = await fetch("https://api.anthropic.com/v1/messages", { method: "POST",
      headers: { "content-type": "application/json", "x-api-key": AI_API_KEY, "anthropic-version": "2023-06-01" },
      body: JSON.stringify({ model: AI_MODEL, max_tokens: 500, system, messages: messages.slice(-8).map(m => ({ role: m.role === "assistant" ? "assistant" : "user", content: String(m.content).slice(0, 1000) })) }) });
    if (!r.ok) return res.status(502).json({ error: "The AI provider returned an error." });
    const d = await r.json();
    res.json({ reply: d.content?.map(b => b.text ?? "").join("") || "I couldn't answer that." });
  } catch { res.status(502).json({ error: "Could not reach the AI provider." }); }
});

app.post("/api/contact", async (req, res) => {
  if (!RESEND_API_KEY || !CONTACT_TO_EMAIL) return res.status(503).json({ error: "Contact delivery is not configured yet." });
  if (limited(req, 5)) return res.status(429).json({ error: "Too many messages. Try again later." });
  const { name, email, type, message, website } = req.body ?? {};
  if (website) return res.json({ ok: true }); // honeypot: bots fill this
  if (!name || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email ?? "") || String(message ?? "").length < 10) return res.status(400).json({ error: "Please check the form fields." });
  try {
    const r = await fetch("https://api.resend.com/emails", { method: "POST", headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "content-type": "application/json" },
      body: JSON.stringify({ from: CONTACT_FROM_EMAIL, to: CONTACT_TO_EMAIL, reply_to: email, subject: `[Portfolio] ${String(type).slice(0, 60)} from ${String(name).slice(0, 60)}`, text: `${message}\n\nFrom: ${name} <${email}>` }) });
    if (!r.ok) return res.status(502).json({ error: "The email provider rejected the message." });
    res.json({ ok: true }); // only after the provider accepted it
  } catch { res.status(502).json({ error: "Could not reach the email provider." }); }
});

const dist = path.join(path.dirname(fileURLToPath(import.meta.url)), "../dist");
if (existsSync(dist)) { app.use(express.static(dist)); app.get("*", (_q, r) => r.sendFile(path.join(dist, "index.html"))); }
app.listen(process.env.PORT || 8787, () => console.log("API on :" + (process.env.PORT || 8787)));
