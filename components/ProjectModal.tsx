import Image from "next/image";
import { motion } from "motion/react";
import { useEffect } from "react";

export type ProjectDetails = {
  description: string;
  images: string[];
  resource?: { label: string; href: string };
};

type Props = {
  item: { title: string; tech: string[]; link: string; image: string; project?: ProjectDetails };
  onClose: () => void;
};

export function ProjectModal({ item, onClose }: Props) {
  // Close on Escape and stop the page scrolling behind the modal.
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={item.title}
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-mild"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 z-10 h-9 w-9 rounded-full bg-white/80 dark:bg-black/60 text-xl"
        >
          ×
        </button>

        {/* Same layoutId as the card image, so it grows from the card into the modal. */}
        <motion.div layoutId={item.link} className="relative aspect-[4/3] w-full">
          <Image fill priority sizes="768px" src={item.image} alt={item.title} className="object-cover" />
        </motion.div>

        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <p className="text-sm font-semibold uppercase text-sky-800 dark:text-blue-400">{item.tech.join(" · ")}</p>
            <h2 className="mt-1 text-3xl font-bold">{item.title}</h2>
            <p className="mt-3 text-gray-700 dark:text-gray-300">{item.project?.description}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {item.project?.images.map((src) => (
              <div key={src} className="relative aspect-square overflow-hidden rounded-2xl">
                {/* unoptimized keeps GIFs animated */}
                <Image fill sizes="384px" src={src} alt="" unoptimized={src.endsWith(".gif")} className="object-cover" />
              </div>
            ))}
          </div>

          {item.project?.resource && (
            <a
              href={item.project.resource.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full border-2 border-current px-5 py-2 font-semibold"
            >
              {item.project.resource.label}
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
