// Derived from Its Hover (https://github.com/itshover/itshover), Copyright 2026 itshover.
// Modified for this project. Licensed under Apache-2.0; see THIRD_PARTY_NOTICES.md.
"use client";

import { useCallback } from "react";
import { useAnimate, useReducedMotion } from "motion/react";
import * as m from "motion/react-m";
import { useParentInteractions, type AnimatedIconProps } from "./types";

export default function GlobeIcon({ size = 24, color = "currentColor", strokeWidth = 2, className = "" }: AnimatedIconProps) {
  const [scope, animate] = useAnimate();
  const reducedMotion = useReducedMotion();
  const start = useCallback(() => { if (!reducedMotion) animate(".globe-circle", { rotate: 360 }, { duration: 2, ease: "linear", repeat: Infinity }); }, [animate, reducedMotion]);
  const stop = useCallback(() => animate(".globe-circle", { rotate: 0 }, { duration: 0.5 }), [animate]);
  useParentInteractions(scope, start, stop);

  return <m.svg ref={scope} onHoverStart={start} onHoverEnd={stop} aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={`cursor-pointer ${className}`}><m.g className="globe-circle" style={{ transformOrigin: "center" }}><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3a14 14 0 0 1 0 18" /><path d="M12 3a14 14 0 0 0 0 18" /></m.g></m.svg>;
}
