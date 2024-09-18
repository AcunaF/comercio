import type { Metadata } from "next";
const logo = "/cava1220/logoNegro.jpeg";
import Footer from "../app/footer/footer";
import Link from "next/link";

import "./globals.css";
import page from "./[id]/page";

export const metadata: Metadata = {
  title: "Cava 1220 - wine",
  description: "venta de vinos, destilados wisky y eventos",
  keywords: ["restaurant", "food", "eat", "dinner", "lunch"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="m-auto mb-10px grid min-h-screen grid-rows-[auto,1fr,auto] px-4">
        <header
          style={{ borderBottom: "4px solid white" }}
          className="fixed top-0 left-0 right-0 flex items-center justify-between text-xl font-bold leading-[4rem] bg-black z-50"
        >
          <div className="flex items-center">
            <Link href="/">
              <img className="w-1/5 m-2 ml-5" src={logo} alt="cava Logo" />
            </Link>
          </div>
          <nav className="flex flex-grow items-center justify-end space-x-6 mr-5">
            <Link href={`/eventos`}>Eventos</Link>
            <Link href={`/distribuidora/${page.id}`}>Distribuidora</Link>
            <Link href={`/contacto/${page.id}`}>Registrarse</Link>
          </nav>
        </header>
        <main className="pt-[4rem] py-8">{children}</main>
        <footer className="text-center leading-[3rem] opacity-70">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
