"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function useSmoothScroll() {
  useEffect(() => {
    // Inisialisasi Lenis
    const lenis = new Lenis({
      duration: 1.5, // Semakin besar nilainya, semakin "berat/smooth" scroll-nya (Default: 1.2)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Kurva inersia (Exponential Out)
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true, // Aktifkan smooth scroll untuk mouse wheel
      wheelMultiplier: 1, // Kecepatan scroll
      touchMultiplier: 2, // Kecepatan touch
    });

    // Request Animation Frame loop untuk menjalankan Lenis
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup saat unmount
    return () => {
      lenis.destroy();
    };
  }, []);
}