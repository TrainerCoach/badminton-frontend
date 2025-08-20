
import Link from "next/link";
import { getCategories, getExercises } from "@/lib/api";
export default async function Home(){
  const [cats, exs] = await Promise.all([getCategories(), getExercises()]);
  return (
    <div className="space-y-6">
      <section className="grid md:grid-cols-4 gap-2">
        {cats.map(c => <span key={c.id} className="px-3 py-2 rounded-xl border border-slate-700 text-sm">{c.name}</span>)}
      </section>
      <section className="grid md:grid-cols-2 gap-4">
        {exs.length===0 && <div className="col-span-full text-slate-300">Noch keine Übungen vorhanden.</div>}
        {exs.map(e => (
          <Link key={e.id} href={`/exercise/${e.id}`} className="card hover:translate-y-[-2px] transition">
            <div className="text-xs uppercase tracking-wider text-slate-400">{e.category?.name}</div>
            <h3 className="text-lg font-semibold mt-1">{e.title}</h3>
            <div className="text-sm text-slate-300 mt-2">{e.duration_min} min · {e.difficulty}</div>
          </Link>
        ))}
      </section>
    </div>
  );
}
