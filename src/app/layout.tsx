import type { Metadata } from "next";
import { Oxygen, Rouge_Script } from "next/font/google";
import '../styles/globals.css';
import '../styles/colors.css';
import '../styles/landing-page.css';
import Navbar from "../components/navbar";

export const metadata: Metadata = {
  title: "Not Like My Nails",
  description: "Nail Tech Website",
};

const oxygen = Oxygen({
  weight: ["400"], 
  subsets: ["latin"],
  variable: "--font-oxygen",
});

const rougeScript = Rouge_Script({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-ballet",
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${oxygen.className} ${rougeScript.variable}`}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
