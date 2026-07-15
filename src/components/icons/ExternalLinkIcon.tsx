// Derived from Its Hover (https://github.com/itshover/itshover), Copyright 2026 itshover.
// Modified for this project. Licensed under Apache-2.0; see THIRD_PARTY_NOTICES.md.
"use client";

import { useCallback } from "react";
import { useAnimate, useReducedMotion } from "motion/react";
import * as m from "motion/react-m";
import { useParentInteractions, type AnimatedIconProps } from "./types";

export default function ExternalLinkIcon({ size = 24, color = "currentColor", strokeWidth = 2, className = "" }: AnimatedIconProps) {
  const [scope, animate] = useAnimate();
  const reducedMotion = useReducedMotion();
  const start = useCallback(() => { if (!reducedMotion) { animate(".external-arrow", { x: 2, y: -2, scale: 1.1 }, { duration: 0.3, ease: "easeOut" }); animate(".external-box", { scale: 0.95 }, { duration: 0.3, ease: "easeOut" }); } }, [animate, reducedMotion]);
  const stop = useCallback(() => animate(".external-arrow, .external-box", { x: 0, y: 0, scale: 1 }, { duration: 0.25, ease: "easeInOut" }), [animate]);
  useParentInteractions(scope, start, stop);

  return <m.svg ref={scope} onHoverStart={start} onHoverEnd={stop} aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={`cursor-pointer ${className}`}><m.path className="external-box" d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" style={{ transformOrigin: "50% 50%" }} /><m.g className="external-arrow" style={{ transformOrigin: "50% 50%" }}><path d="M11 13l9 -9" /><path d="M15 4h5v5" /></m.g></m.svg>;
}
