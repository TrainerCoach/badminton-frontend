
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dumbbell, PlusCircle, LogIn } from "lucide-react";
export default function Nav(){
  const pathname = usePathname();
  const token = typeof window !== "undefined" ? localStorage.getItem("jwt") : null;
  return (
    <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur border-b border-slate-800">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-4">
        <Link href="/" className="flex items-center gap-2 font-semibold"><Dumbbell className="w-5 h-5"/><span>Badminton Übungen</span></Link>
        <nav className="ml-auto flex items-center gap-3">
          <Link href="/new" className={`btn ${pathname==="/new"?"ring-2 ring-sky-400":""}`}><PlusCircle className="w-4 h-4 inline mr-1"/> Neue Übung</Link>
          {!token && <Link href="/login" className="px-3 py-2 rounded-xl border border-slate-700 hover:bg-slate-800"><LogIn className="w-4 h-4 inline mr-1"/> Login</Link>}
        </nav>
      </div>
    </header>
  );
}
