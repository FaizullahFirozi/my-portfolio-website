"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export function ScrollHeader({ children }: { children: ReactNode }) {
  const [hidden, setHidden] = useState(false);
  const header = useRef<HTMLElement>(null);

  useEffect(() => {
    let previousY = Math.max(0, window.scrollY);
    const onScroll = () => {
      const currentY = Math.max(0, window.scrollY);
      const difference = currentY - previousY;

      if (currentY <= 80 || header.current?.contains(document.activeElement)) {
        setHidden(false);
      } else if (Math.abs(difference) >= 4) {
        setHidden(difference > 0);
      } else {
        return;
      }
      previousY = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      ref={header}
      onFocusCapture={() => setHidden(false)}
      className={`container sticky top-0 z-50 border-b bg-background/95 backdrop-blur transition-transform duration-200 motion-reduce:transition-none ${hidden ? "-translate-y-full" : "translate-y-0"}`}
    >
      {children}
    </header>
  );
}
