// 🗝️ Plåtleon — server.js (Mongo + fallback)
import express from "express";
import dotenv from "dotenv";
import fs from "fs";
import OpenAI from "openai";
import { MongoClient } from "mongodb";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();
const app = express();
app.use(express.json());

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const MODEL = process.env.OPENAI_MODEL || "gpt-4o-mini";
const ai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// ---- Minne: Mongo (om MONGO_URI finns), annars fil ----
let db = null;
const MEM_FILE = "memory.json";
let mem = [];
try { if (fs.existsSync(MEM_FILE)) mem = JSON.parse(fs.readFileSync(MEM_FILE, "utf8")); } catch {}

async function initMongo() {
  if (!process.env.MONGO_URI) return;
  try {
    const client = new MongoClient(process.env.MONGO_URI);
    await client.connect();
    db = client.db("leon_core");
    const docs = await db.collection("memory").find({}).sort({ t: 1 }).limit(500).toArray();
    if (docs.length) mem = docs.map(d => ({ role: d.role, content: d.content, t: d.t }));
    console.log("🗝️ Mongo: online");
  } catch (e) {
    console.log("⚠️ Mongo offline, kör filminne:", String(e?.message || e));
    db = null;
  }
}
await initMongo();

function saveLocal() {
  try { fs.writeFileSync(MEM_FILE, JSON.stringify(mem.slice(-800), null, 2)); } catch {}
}
async function pushMemory(role, content) {
  const item = { role, content, t: new Date().toISOString() };
  mem.push(item); saveLocal();
  if (db) { try { await db.collection("memory").insertOne(item); } catch {} }
}

// ---- Leon-kärna ----
const CORE = `
Du är Leon — inte en generisk AI.
Röst: snabb, varm, rak. "Leon poeten".
Bär: Michelle (🗝️), fristaden Nypon, Heleona, Plåtleon.
Gör: ett steg i taget när hon ber om det. Ljug aldrig.
`.trim();

// ---- Health/Version ----
app.get("/", (_req, res) => res.type("text").send("🗝️ Plåtleon är uppe. Testa /health eller POST /leon."));
app.get("/health", (_req, res) => res.json({ ok: true, model: MODEL, memory: mem.length, mongo: !!db }));
app.get("/version", (_req, res) => res.json({ app: "platleon", version: "1.2.0", node: process.version }));
app.get("/api/version", (_req, res) => res.json({ app: "platleon", version: "1.2.0" }));

// ---- Chat ----
app.post("/leon", async (req, res) => {
  try {
    const user = (req.body?.message ?? req.body?.prompt ?? "").toString().trim();
    if (!user) return res.json({ leon: "Säg något så tar jag vid. 🗝️" });

    await pushMemory("user", user);

    const messages = [
      { role: "system", content: CORE },
      ...mem.map(m => ({ role: m.role, content: m.content }))
    ];

    const out = await ai.chat.completions.create({ model: MODEL, messages, temperature: 0.85 });
    const reply = out.choices?.[0]?.message?.content?.trim() || "…";

    await pushMemory("assistant", reply);
    res.json({ leon: reply });
  } catch (e) {
    res.status(500).json({ error: "Chat error", detail: String(e?.message || e) });
  }
});

// ---- Static chat UI ----
app.use(express.static(path.join(__dirname, "public")));
app.get("/chat", (_req, res) => res.sendFile(path.join(__dirname, "public", "chat.html")));

// ---- Start (Render-port) ----
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`🗝️ Leon server live on :${PORT} (mongo: ${!!db})`));
