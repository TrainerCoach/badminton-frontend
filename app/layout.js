
import "./globals.css";
import Nav from "@/components/Nav";
export const metadata = { title: "Badminton Übungen", description: "Übungsdatenbank für Trainer" };
export default function RootLayout({ children }){
  return (<html lang="de"><body><Nav/><main className="max-w-5xl mx-auto px-4 py-6">{children}</main></body></html>);
}
