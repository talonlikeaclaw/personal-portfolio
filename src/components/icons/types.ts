"use client";

import { useEffect } from "react";
import type { RefObject } from "react";

export interface AnimatedIconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
}

export function useParentInteractions(
  scope: RefObject<Element | null>,
  start: () => void,
  stop: () => void,
) {
  useEffect(() => {
    const control = scope.current?.closest<HTMLElement>(
      "a, button, [data-icon-trigger]",
    );

    if (!control) {
      return;
    }

    control.addEventListener("focus", start);
    control.addEventListener("blur", stop);
    control.addEventListener("mouseenter", start);
    control.addEventListener("mouseleave", stop);

    return () => {
      control.removeEventListener("focus", start);
      control.removeEventListener("blur", stop);
      control.removeEventListener("mouseenter", start);
      control.removeEventListener("mouseleave", stop);
    };
  }, [scope, start, stop]);
}
