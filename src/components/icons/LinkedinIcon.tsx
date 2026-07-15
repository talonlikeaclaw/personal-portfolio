// Derived from Its Hover (https://github.com/itshover/itshover), Copyright 2026 itshover.
// Modified for this project. Licensed under Apache-2.0; see THIRD_PARTY_NOTICES.md.
"use client";

import { useCallback } from "react";
import { useAnimate, useReducedMotion } from "motion/react";
import * as m from "motion/react-m";
import { useParentInteractions, type AnimatedIconProps } from "./types";

export default function LinkedinIcon({ size = 24, color = "currentColor", strokeWidth = 2, className = "" }: AnimatedIconProps) {
  const [scope, animate] = useAnimate();
  const reducedMotion = useReducedMotion();
  const start = useCallback(() => { if (!reducedMotion) { animate(".linkedin-border", { scale: [1, 1.05, 1] }, { duration: 0.4, ease: "easeInOut" }); animate(".linkedin-lines", { pathLength: [0, 1] }, { duration: 0.5, ease: "easeOut" }); } }, [animate, reducedMotion]);
  const stop = useCallback(() => animate(".linkedin-lines, .linkedin-border", { pathLength: 1, scale: 1 }, { duration: 0.2 }), [animate]);
  useParentInteractions(scope, start, stop);

  return <m.svg ref={scope} onHoverStart={start} onHoverEnd={stop} aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={`cursor-pointer ${className}`}><m.path className="linkedin-lines" d="M8 11v5" /><m.path className="linkedin-lines" d="M8 8v.01" /><m.path className="linkedin-lines" d="M12 16v-5" /><m.path className="linkedin-lines" d="M16 16v-3a2 2 0 1 0 -4 0" /><m.path className="linkedin-border" d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" style={{ transformOrigin: "center" }} /></m.svg>;
}
