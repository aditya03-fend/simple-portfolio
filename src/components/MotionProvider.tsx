"use client";

import { LazyMotion, domAnimation } from "framer-motion";

export default function MotionProvider({ children }: { children: React.ReactNode }) {
  // domAnimation jauh lebih kecil daripada fitur lengkap (max).
  // Kita pakai ini karena animasimu hanya translate/opacity, tidak ada drag/layout projection rumit.
  return (
    <LazyMotion features={domAnimation}>
      {children}
    </LazyMotion>
  );
}