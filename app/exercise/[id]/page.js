
import { getExercise } from "@/lib/api";
export default async function ExerciseDetail({ params }){
  const ex = await getExercise(params.id);
  return (
    <article className="prose prose-invert max-w-none">
      <h1>{ex.title}</h1>
      <p><b>Kategorie:</b> {ex.category?.name} · <b>Dauer:</b> {ex.duration_min} min · <b>Schwierigkeit:</b> {ex.difficulty}</p>
      {ex.goal && <p><b>Trainingsziel:</b> {ex.goal}</p>}
      {ex.players && <p><b>Spieleranzahl:</b> {ex.players}</p>}
      {ex.equipment && <p><b>Material:</b> {ex.equipment}</p>}
      <h3>Ablauf</h3>
      <pre className="whitespace-pre-wrap">{ex.steps}</pre>
      {ex.tips && (<><h3>Variationen/Tipps</h3><pre className="whitespace-pre-wrap">{ex.tips}</pre></>)}
      {ex.video_url && (<div className="mt-4"><a className="underline" href={ex.video_url} target="_blank">Video ansehen</a></div>)}
    </article>
  );
}
