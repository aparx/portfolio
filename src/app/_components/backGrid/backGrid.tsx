"use client";
import { useEffect, useState } from "react";
import css from "./backGrid.module.css";

export function BackGrid() {
  const [pos, setPos] = useState<[x: number, y: number]>();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleMousePos = (e: MouseEvent) => setPos([e.clientX, e.clientY]);
    window.addEventListener("mousemove", handleMousePos);
    return () => window.removeEventListener("mousemove", handleMousePos);
  }, []);

  return (
    <>
      <div className={css.background} style={{ opacity: 0.1 }} />
      {pos && (
        <div
          className={css.background}
          style={{
            mask: "radial-gradient(circle, rgba(0, 0, 0, 0) 90%, white)",
            maskPosition: `${pos[0]}px ${pos[1]}px`,
            opacity: 0.1,
          }}
        />
      )}
    </>
  );
}
