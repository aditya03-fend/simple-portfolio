"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "About", path: "/" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export default function MobileNavbar() {
  const pathname = usePathname();

  return (
    // Container Fixed di Atas
    <div className="fixed top-0 left-0 z-50 w-full md:hidden">

      <nav className="flex items-center justify-center gap-6 sm:gap-8 shadow-sm bg-neutral-900/80 backdrop-blur-md px-6 py-4">
        {navItems.map((item) => {
          const isActive = pathname === item.path;

          return (
            <Link 
              key={item.path} 
              href={item.path} 
              className={cn(
                "text-sm font-medium transition-colors duration-200", // Transisi halus
                isActive 
                  ? "text-white" // Aktif: Putih Terang
                  : "text-neutral-500 hover:text-neutral-300" // Tidak Aktif: Abu-abu
              )}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}