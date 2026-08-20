"use client";

import AOS from "aos";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function AosInit() {
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
      disable: () =>
        window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    });
  }, []);

  useEffect(() => {
    AOS.refreshHard();
  }, [pathname]);

  return null;
}
