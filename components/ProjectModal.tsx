import Image from "next/image";
import { animate, usePresence } from "motion/react";
import { useEffect, useLayoutEffect, useRef } from "react";

export type ProjectDetails = {
  description: string;
  images: string[];
  resource?: { label: string; href: string };
};

type Props = {
  item: { title: string; tech: string[]; link: string; image: string; project?: ProjectDetails };
  onClose: () => void;
};

// Shared with the card image so the browser reuses the already-loaded file.
export const HERO_SIZES = "(min-width: 768px) 50vw, 100vw";

const morphTiming = { duration: 0.5, ease: [0.32, 0.72, 0, 1] } as const;

export function ProjectModal({ item, onClose }: Props) {
  const { description, images = [], resource } = item.project ?? {};
  useScrollLock(); // before useCardMorph, which measures the unlocked layout otherwise
  useEscape(onClose);
  const { backdropRef, panelRef, heroRef } = useCardMorph(`a[href="${item.link}"] img`);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6" onClick={onClose}>
      <div ref={backdropRef} className="absolute inset-0 bg-black/30 dark:bg-black/60 backdrop-blur-sm" />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-title"
        onClick={(e) => e.stopPropagation()}
        className="relative grid w-full max-w-5xl max-h-[calc(100dvh-1.5rem)] sm:max-h-[85vh] gap-3 p-3 rounded-[1.75rem] bg-white dark:bg-black border-2 border-mild/10 dark:border-white/10 shadow-2xl grid-rows-[auto_minmax(0,1fr)_auto] [grid-template-areas:'hero''text''actions'] md:grid-cols-[1.15fr_1fr] md:grid-rows-[auto_minmax(0,1fr)] md:[grid-template-areas:'hero_text''actions_text']"
      >
        <div ref={heroRef} className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl origin-top-left [grid-area:hero]">
          <Image fill priority sizes={HERO_SIZES} src={item.image} alt={item.title} className="object-cover" />
        </div>

        <div className="[grid-area:text] overflow-y-auto overscroll-contain px-2 md:pl-4 md:pr-5 md:py-5">
          <h2 id="project-title" className="pr-12 text-4xl sm:text-5xl font-bold tracking-tight">
            {item.title}
          </h2>
          <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-300">{description}</p>
          {images.length > 0 && <Gallery images={images} />}
        </div>

        <div className="[grid-area:actions] self-end flex flex-wrap items-center justify-between gap-3 p-2 md:p-3">
          <Tags tags={item.tech} />
          {resource && <ResourceLink {...resource} />}
        </div>

        <CloseButton onClick={onClose} />
      </div>
    </div>
  );
}

function Gallery({ images }: { images: string[] }) {
  return (
    <div className="mt-8">
      <p className="font-mono text-xs uppercase tracking-widest text-sky-800 dark:text-blue-400">Gallery</p>
      <div className="mt-3 grid grid-cols-2 gap-3">
        {images.map((src) => (
          <div key={src} className="relative aspect-square overflow-hidden rounded-2xl bg-mild/5 dark:bg-white/5">
            {/* The image optimizer would drop GIF animation. */}
            <Image fill sizes="240px" src={src} alt="" unoptimized={src.endsWith(".gif")} className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}

function Tags({ tags }: { tags: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li key={tag} className="px-2.5 py-1 rounded-md border-2 border-mild dark:border-white text-xs font-semibold">
          {tag}
        </li>
      ))}
    </ul>
  );
}

function ResourceLink({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-2 py-3 px-6 rounded-full font-semibold bg-mild text-white dark:bg-white dark:text-black"
    >
      {label}
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        aria-hidden
        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      >
        <path d="M2 10L10 2M4 2h6v6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  );
}

function CloseButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      autoFocus
      onClick={onClick}
      aria-label="Close"
      className="absolute top-5 right-5 md:top-6 md:right-6 grid h-10 w-10 place-items-center rounded-full border-2 border-mild dark:border-white bg-white dark:bg-black transition-transform hover:rotate-90"
    >
      <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden>
        <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </button>
  );
}

/**
 * Grows the panel out of the card at `cardSelector` on open, and shrinks it back on close.
 * The panel is revealed through a clip-path that starts at the card's rectangle, while the
 * hero moves from the card to its place, so the card visibly becomes the modal.
 */
function useCardMorph(cardSelector: string) {
  const backdropRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const [isPresent, safeToRemove] = usePresence();

  const play = async (direction: "open" | "close") => {
    const card = document.querySelector(cardSelector)?.getBoundingClientRect();
    const [backdrop, panel, hero] = [backdropRef.current, panelRef.current, heroRef.current];
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!card || !backdrop || !panel || !hero || reduceMotion) return;

    const p = panel.getBoundingClientRect();
    const h = hero.getBoundingClientRect();
    const collapsed = {
      clipPath: `inset(${card.top - p.top}px ${p.right - card.right}px ${p.bottom - card.bottom}px ${card.left - p.left}px round 16px)`,
      hero: { x: card.left - h.left, y: card.top - h.top, scale: card.width / h.width },
      opacity: 0,
    };
    const expanded = {
      clipPath: "inset(0px 0px 0px 0px round 28px)",
      hero: { x: 0, y: 0, scale: 1 },
      opacity: 1,
    };
    const [from, to] = direction === "open" ? [collapsed, expanded] : [expanded, collapsed];

    await Promise.all([
      animate(panel, { clipPath: [from.clipPath, to.clipPath] }, morphTiming),
      animate(hero, { x: [from.hero.x, to.hero.x], y: [from.hero.y, to.hero.y], scale: [from.hero.scale, to.hero.scale] }, morphTiming),
      animate(backdrop, { opacity: [from.opacity, to.opacity] }, morphTiming),
    ]);
    // The clip would hide the panel's shadow once open.
    if (direction === "open") panel.style.clipPath = "";
  };

  useLayoutEffect(() => {
    play("open");
  }, []);

  useEffect(() => {
    if (!isPresent) play("close").then(safeToRemove);
  }, [isPresent]);

  return { backdropRef, panelRef, heroRef };
}

/** Stops the page scrolling; padding fills in for the hidden scrollbar so nothing shifts. */
function useScrollLock() {
  useLayoutEffect(() => {
    const root = document.documentElement;
    root.style.paddingRight = `${window.innerWidth - root.clientWidth}px`;
    root.style.overflow = "hidden";
    return () => {
      root.style.overflow = "";
      root.style.paddingRight = "";
    };
  }, []);
}

function useEscape(onEscape: () => void) {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => e.key === "Escape" && onEscape();
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onEscape]);
}
