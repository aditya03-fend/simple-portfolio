"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { m } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "About", path: "/" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 h-screen fixed left-0 top-0  hidden md:flex flex-col justify-center">
      <nav className="flex flex-col w-full px-8 space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.path;

          return (
            <Link 
              key={item.path} 
              href={item.path} 
              className="group flex items-center h-10 relative"
            >
              {/* GARIS: Slow & Smooth Expansion */}
              <m.div
                className="absolute left-0 bg-white h-px"
                initial={{ width: 0, opacity: 0 }}
                animate={{ 
                  width: isActive ? 24 : 0,
                  opacity: isActive ? 1 : 0 
                }}
                transition={{ 
                  duration: 1.4, // Diperlambat agar elegan
                  ease: [0.16, 1, 0.3, 1] // Kurva "Ultra Smooth" (mirip iOS)
                }}
              />

              {/* TEKS: Lazy Spring Movement */}
              <m.span
                className={cn(
                  // Transisi warna juga diperlambat (duration-700) agar serasi
                  "text-sm tracking-wide font-medium transition-colors duration-700 ease-out",
                  isActive 
                    ? "text-white" 
                    : "text-neutral-500 group-hover:text-neutral-300"
                )}
                animate={{ x: isActive ? 32 : 0 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 100, // Lebih rendah = Lebih lambat & tidak kaku
                  damping: 20,    // Menahan pantulan agar berhenti dengan mulus
                  mass: 1
                }}
              >
                {item.name}
              </m.span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}