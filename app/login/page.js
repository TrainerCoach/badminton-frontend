
"use client";
import { useState } from "react";
import { login } from "@/lib/api";
import { useRouter } from "next/navigation";
export default function LoginPage(){
  const [username,setUsername]=useState(""); const [password,setPassword]=useState(""); const [error,setError]=useState(""); const router=useRouter();
  const onSubmit=async(e)=>{e.preventDefault(); setError(""); try{ const data=await login(username,password); localStorage.setItem("jwt", data.access); router.push("/"); }catch{ setError("Login fehlgeschlagen. Bitte prüfen."); }};
  return (<div className="max-w-md mx-auto card"><h1 className="text-xl font-semibold mb-4">Login</h1>
    <form onSubmit={onSubmit} className="space-y-3">
      <input className="input" placeholder="Benutzername" value={username} onChange={e=>setUsername(e.target.value)} />
      <input className="input" type="password" placeholder="Passwort" value={password} onChange={e=>setPassword(e.target.value)} />
      {error && <div className="text-red-400 text-sm">{error}</div>}
      <button className="btn w-full">Einloggen</button>
    </form></div>);
}
