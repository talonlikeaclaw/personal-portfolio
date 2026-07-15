// Derived from Its Hover (https://github.com/itshover/itshover), Copyright 2026 itshover.
// Modified for this project. Licensed under Apache-2.0; see THIRD_PARTY_NOTICES.md.
"use client";

import { useCallback } from "react";
import { useAnimate, useReducedMotion } from "motion/react";
import * as m from "motion/react-m";
import { useParentInteractions, type AnimatedIconProps } from "./types";

export default function BookIcon({ size = 24, color = "currentColor", strokeWidth = 2, className = "" }: AnimatedIconProps) {
  const [scope, animate] = useAnimate();
  const reducedMotion = useReducedMotion();
  const start = useCallback(() => { if (!reducedMotion) animate(".book-line", { pathLength: [0, 1], opacity: [0, 1] }, { duration: 0.35, ease: "easeInOut", delay: 0.05 }); }, [animate, reducedMotion]);
  const stop = useCallback(() => animate(".book-line", { pathLength: 1, opacity: 1 }, { duration: 0.2 }), [animate]);
  useParentInteractions(scope, start, stop);

  return <m.svg ref={scope} onHoverStart={start} onHoverEnd={stop} aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={`cursor-pointer ${className}`}><path d="M12 20V5" /><path d="M12 20c3.5-2 7-2 10 0V5c-3-2-6.5-2-10 0C8.5 3 5 3 2 5v15c3-2 6.5-2 10 0Z" /><m.path className="book-line" d="M15 9h4" /><m.path className="book-line" d="M15 12h4" /><m.path className="book-line" d="M15 15h4" /></m.svg>;
}
