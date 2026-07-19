"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type CaseStudyGalleryFigureProps = {
  src: string;
  alt: string;
  title: string;
  description: string;
  sizes?: string;
  className?: string;
  stageClassName?: string;
  openLabel: string;
  closeLabel: string;
  naturalAspect?: boolean;
  captionMode?: "full" | "text";
};

export default function CaseStudyGalleryFigure({
  src,
  alt,
  title,
  description,
  sizes = "(max-width: 768px) 100vw, 50vw",
  className = "",
  stageClassName = "aspect-video",
  openLabel,
  closeLabel,
  naturalAspect = false,
  captionMode = "full",
}: CaseStudyGalleryFigureProps) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogTitleId = `gallery-dialog-${title.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}`;

  function closeDialog() {
    setIsOpen(false);
    triggerRef.current?.focus();
  }

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeDialog();
      if (event.key === "Tab") {
        event.preventDefault();
        closeButtonRef.current?.focus();
      }
    };

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <figure className={`w-full overflow-hidden rounded-lg border border-border bg-card ${className}`}>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label={openLabel}
        className={`flex w-full items-center justify-center bg-background/60 p-3 transition-colors hover:bg-background/80 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-[-2px] sm:p-4 ${naturalAspect ? "" : stageClassName}`}
      >
        <Image
          src={src}
          alt={alt}
          width={2000}
          height={1200}
          sizes={sizes}
          className={naturalAspect ? "h-auto w-full" : "h-full w-full object-contain"}
        />
      </button>
      <figcaption className={captionMode === "full" ? "border-t border-border px-5 py-4" : "border-t border-border px-4 py-3 font-mono text-xs leading-relaxed text-muted"}>
        {captionMode === "full" ? (
          <>
            <h3 className="font-mono font-semibold text-text">{title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted">{description}</p>
          </>
        ) : description}
      </figcaption>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-8" role="dialog" aria-modal="true" aria-labelledby={dialogTitleId}>
          <button
            type="button"
            onClick={closeDialog}
            aria-label={closeLabel}
            className="absolute inset-0 cursor-default bg-black/85"
          />
          <div className="relative z-10 flex max-h-full w-full max-w-6xl flex-col rounded-lg border border-border bg-card p-3 shadow-2xl sm:p-4">
            <div className="mb-3 flex items-start justify-between gap-4">
              <div>
                <h3 id={dialogTitleId} className="font-mono text-sm font-semibold text-text sm:text-base">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{description}</p>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={closeDialog}
                className="rounded border border-border p-2 text-muted transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
                aria-label={closeLabel}
              >
                <X size={18} aria-hidden="true" />
              </button>
            </div>
            <div className="min-h-0 flex-1 overflow-auto bg-background/60 p-2 sm:p-4">
              <Image
                src={src}
                alt={alt}
                width={2000}
                height={1200}
                sizes="100vw"
                className="mx-auto h-auto max-h-[calc(100vh-10rem)] w-auto max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </figure>
  );
}
