
const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:8000/api";
export async function api(path, { method="GET", body, token } = {}){
  const headers = { "Content-Type": "application/json" };
  if(token) headers["Authorization"] = `Bearer ${token}`;
  const res = await fetch(`${API_BASE}${path}`, { method, headers, body: body?JSON.stringify(body):undefined, cache:"no-store" });
  if(!res.ok){ throw new Error(`API ${method} ${path} failed: ${res.status}`); }
  return res.json();
}
export const getCategories = ()=>api("/categories/");
export const getExercises = ()=>api("/exercises/");
export const getExercise = (id)=>api(`/exercises/${id}/`);
export const createExercise = (data, token)=>api("/exercises/", { method:"POST", body:data, token });
export const login = (username,password)=>api("/auth/jwt/create/", { method:"POST", body:{ username, password } });
