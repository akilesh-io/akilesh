import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    tech: string;
    link: string;
    image: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-8",
        className
      )}
    >
      {items.map((item, idx) => (
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.5,
              delay: 0.2 * idx,
              ease: "easeOut",
              once: true,
            },
          }}
          key={"card" + idx}
        >
          <Link
            href={item?.link}
            key={item?.link}
            className="relative group block py-4 md:p-2 h-full w-full"
            target="_blank"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-white/30 dark:bg-mild block rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <Card className="group-hover:shadow-lg">
              <CardImage src={item?.image} title={item?.title} />
              {hoveredIndex === idx && (
                <motion.div
                  className="absolute top-0 right-0 bg-white dark:bg-mild rounded-bl-lg shadow-lg hidden sm:block"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="absolute -top-0 -left-24 h-3 w-24 rounded-tr-lg bg-transparent shadow-[0.5rem_0_0_0] shadow-white dark:shadow-mild"></div>
                  <div className="absolute -bottom-0 right-0 h-3 w-24 top-6 rounded-tr-lg bg-transparent shadow-[0.5rem_0_0_0] shadow-white dark:shadow-mild"></div>

                  <motion.button className="text-xs font-semibold dark:text-white mt-1 mr-1 p-1">
                    {item?.tech}
                  </motion.button>
                </motion.div>
              )}

              <motion.div
                className="absolute top-0 left-0 bg-white dark:bg-mild rounded-br-lg shadow-lg sm:hidden block"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
              >
                <div className="absolute -bottom-3 right-2 h-3 w-24 rounded-tl-3xl bg-transparent shadow-[-0.5rem_0_0_0] shadow-white dark:shadow-mild"></div>
                <div className="absolute bottom-5 -right-24 h-2 w-24  rounded-tl-3xl bg-transparent shadow-[-0.5rem_0_0_0] shadow-white dark:shadow-mild"></div>

                <motion.button className="text-xs font-semibold dark:text-white mt-1 mr-1 p-1">
                  {item?.tech}
                </motion.button>
              </motion.div>
            </Card>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full overflow-hidden dark:bg-black bg-white relative z-10",
        className
      )}
    >
      <div className="relative z-10">
        <div>{children}</div>
      </div>
    </div>
  );
};

export const CardImage = ({
  className,
  src,
  title,
}: {
  className?: string;
  src: string;
  title: string;
}) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <div className="group relative">
      <Image
        width={400}
        height={400}
        src={src}
        alt={title}
        loading="lazy"
        decoding="async"
        blurDataURL={typeof src === "string" ? src : undefined}
        onLoad={() => setLoading(false)}
        className={cn(
          "transition duration-300 w-full h-full object-cover object-center",
          isLoading ? "blur-sm" : "blur-0",
          "group-hover:rounded-tr-3xl",
          "sm:rounded-tl-none rounded-tl-3xl" // Apply rounded-tr-3xl on mobile screens

        )}
      />
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};