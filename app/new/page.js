
"use client";
import { useEffect, useState } from "react";
import { getCategories, createExercise } from "@/lib/api";
import { useRouter } from "next/navigation";
export default function NewExercisePage(){
  const [cats,setCats]=useState([]);
  const [form,setForm]=useState({ title:"", category_id:"", goal:"", difficulty:"mittel", duration_min:10, players:"", equipment:"", steps:"", tips:"", video_url:"" });
  const [msg,setMsg]=useState("");
  const router=useRouter();
  useEffect(()=>{ getCategories().then(setCats); },[]);
  const onSubmit=async(e)=>{ e.preventDefault(); setMsg(""); const token=localStorage.getItem("jwt"); if(!token){ setMsg("Bitte zuerst einloggen."); return; }
    try{ const created=await createExercise(form, token); router.push(`/exercise/${created.id}`);}catch{ setMsg("Speichern fehlgeschlagen. Bitte Felder prüfen."); }};
  const set=(k)=>(e)=>setForm(f=>({...f,[k]: e.target.value}));
  return (<div className="max-w-2xl mx-auto card"><h1 className="text-xl font-semibold mb-4">Neue Übung</h1>
    <form onSubmit={onSubmit} className="space-y-3">
      <input className="input" placeholder="Titel" value={form.title} onChange={set('title')} required />
      <select className="input" value={form.category_id} onChange={set('category_id')} required>
        <option value="">Kategorie wählen…</option>
        {cats.map(c=><option key={c.id} value={c.id}>{c.name}</option>)}
      </select>
      <div className="grid grid-cols-2 gap-3">
        <input className="input" placeholder="Trainingsziel" value={form.goal} onChange={set('goal')} />
        <select className="input" value={form.difficulty} onChange={set('difficulty')}>
          <option value="leicht">leicht</option><option value="mittel">mittel</option><option value="schwer">schwer</option>
        </select>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <input className="input" type="number" min="1" placeholder="Dauer (Minuten)" value={form.duration_min} onChange={set('duration_min')} />
        <input className="input" placeholder="Spieleranzahl" value={form.players} onChange={set('players')} />
      </div>
      <input className="input" placeholder="Material" value={form.equipment} onChange={set('equipment')} />
      <textarea className="input" rows={5} placeholder="Ablauf (Schritt für Schritt)" value={form.steps} onChange={set('steps')} />
      <textarea className="input" rows={3} placeholder="Variationen/Tipps" value={form.tips} onChange={set('tips')} />
      <input className="input" placeholder="Video-URL (YouTube/Drive)" value={form.video_url} onChange={set('video_url')} />
      {msg && <div className="text-red-400 text-sm">{msg}</div>}
      <button className="btn">Speichern</button>
    </form></div>);
}
