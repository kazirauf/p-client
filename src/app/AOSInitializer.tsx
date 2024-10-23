"use client"; // This ensures it's a client component

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSInitializer() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Customize animation duration
      once: true,     // Whether animation should happen only once
    });

    AOS.refresh();
  }, []);

  return null; // This component doesn't render any UI
}