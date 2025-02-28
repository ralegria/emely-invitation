import type { Metadata } from "next";
import { Hahmlet } from "next/font/google";
import MainNavbar from "./components/Navbar";

import "./globals.scss";

const hahmlet = Hahmlet({
  variable: "--font-hahmlet",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Emely's 15 años",
  description: "¿Listo para celebrar conmigo? ¡Confirma tu asistencia aquí!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${hahmlet.variable} antialiased`}>
        <MainNavbar />
        {children}
      </body>
    </html>
  );
}
