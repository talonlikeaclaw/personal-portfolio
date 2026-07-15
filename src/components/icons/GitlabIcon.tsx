// Derived from Its Hover (https://github.com/itshover/itshover), Copyright 2026 itshover.
// Modified for this project. Licensed under Apache-2.0; see THIRD_PARTY_NOTICES.md.
"use client";

import { useCallback } from "react";
import { useAnimate, useReducedMotion } from "motion/react";
import * as m from "motion/react-m";
import { useParentInteractions, type AnimatedIconProps } from "./types";

export default function GitlabIcon({ size = 24, color = "currentColor", strokeWidth = 2, className = "" }: AnimatedIconProps) {
  const [scope, animate] = useAnimate();
  const reducedMotion = useReducedMotion();
  const start = useCallback(() => { if (!reducedMotion) animate(".gitlab-icon", { scale: [1, 1.1, 1], rotate: [0, -5, 5, 0] }, { duration: 0.5, ease: "easeInOut" }); }, [animate, reducedMotion]);
  const stop = useCallback(() => animate(".gitlab-icon", { scale: 1, rotate: 0 }, { duration: 0.2, ease: "easeOut" }), [animate]);
  useParentInteractions(scope, start, stop);

  return <m.svg ref={scope} onHoverStart={start} onHoverEnd={stop} aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={`inline-flex cursor-pointer ${className}`}><m.g className="gitlab-icon" style={{ transformOrigin: "center" }}><path d="M21 14l-9 7l-9 -7l3 -11l3 7h6l3 -7z" /></m.g></m.svg>;
}
