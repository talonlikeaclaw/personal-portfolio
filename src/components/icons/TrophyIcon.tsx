// Derived from Its Hover (https://github.com/itshover/itshover), Copyright 2026 itshover.
// Modified for this project. Licensed under Apache-2.0; see THIRD_PARTY_NOTICES.md.
"use client";

import { useCallback } from "react";
import { useAnimate, useReducedMotion } from "motion/react";
import * as m from "motion/react-m";
import { useParentInteractions, type AnimatedIconProps } from "./types";

export default function TrophyIcon({ size = 24, color = "currentColor", strokeWidth = 2, className = "" }: AnimatedIconProps) {
  const [scope, animate] = useAnimate();
  const reducedMotion = useReducedMotion();
  const start = useCallback(() => { if (!reducedMotion) { animate(".trophy-group", { y: [0, -4, -4, 0], rotate: [0, -10, 10, 0] }, { duration: 0.8, ease: "easeOut", times: [0, 0.4, 0.7, 1] }); animate(".confetti", { opacity: [0, 1, 0], y: [0, -12], scale: [0, 1, 0.5] }, { duration: 0.8, ease: "easeOut", delay: 0.1 }); } }, [animate, reducedMotion]);
  const stop = useCallback(() => { animate(".trophy-group", { y: 0, rotate: 0 }, { duration: 0.3 }); animate(".confetti", { opacity: 0, scale: 0 }, { duration: 0.2 }); }, [animate]);
  useParentInteractions(scope, start, stop);

  return <m.svg ref={scope} onHoverStart={start} onHoverEnd={stop} aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={`cursor-pointer ${className}`} style={{ overflow: "visible" }}><m.g className="trophy-group" style={{ transformOrigin: "center 20px" }}><path d="M6 9H4.5a1 1 0 0 1 0-5H6" /><path d="M18 9h1.5a1 1 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978" /><path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978" /><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z" /></m.g><m.rect className="confetti" x="11" y="6" width="2" height="2" rx="0.5" fill="#FFD700" stroke="none" opacity="0" /><m.rect className="confetti" x="15" y="6" width="2" height="2" rx="0.5" fill="#00BFFF" stroke="none" opacity="0" /></m.svg>;
}
