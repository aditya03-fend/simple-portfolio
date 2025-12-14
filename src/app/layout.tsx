import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import SmoothScroller from "@/components/SmoothScroller"; // Import komponen logic
import MotionProvider from "@/components/MotionProvider";
import MobileNavbar from "@/components/MobileNavbar";

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",       // Text langsung muncul (tidak invisible saat loading)
  variable: "--font-inter", // Gunakan CSS Variable
  preload: true,
});

export const metadata: Metadata = {
  title: "Aditya | Frontend Developer",
  description: "Minimalist Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-neutral-900 text-[#ededed]`}>
        <MotionProvider>
        <SmoothScroller /> {/* Pasang di sini */}
        
        <div className="flex min-h-screen">
          <Sidebar />
          <MobileNavbar />
          <main className="flex-1 md:ml-64 p-8 md:p-16">
            <div className="max-w-3xl mx-auto mt-20 md:mt-0">
               {children}
            </div>
          </main>
        </div>
        </MotionProvider>
      </body>
    </html>
  );
}