import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    easeInOut,
    AnimatePresence
} from "framer-motion";
import { useEffect, useCallback, useRef, useState } from "react";


export default function Logo() {
    const [hidden, setHidden] = useState(true);

    const { scrollYProgress } = useScroll();
    const eyeRef = useRef<SVGPathElement>(null);

    const rotation = useTransform(scrollYProgress, (val) => val * 360);
    const smoothRotation = useSpring(rotation, { stiffness: 400, damping: 90 });

    const cursorX = useMotionValue(0);
    const cursorY = useMotionValue(0);

    const pupilRotationX = useTransform(cursorX, [0, 160], [-2, 2]);
    const pupilRotationY = useTransform(cursorY, [-50, 200], [-2, 2]);
    const mouthX = useTransform(cursorX, [0, 160], [-2, 2]);
    const mouthY = useTransform(cursorY, [-50, 200], [-2, 2]);

    const mouseMoveHandler = useCallback(
        (event: MouseEvent) => {
            const rect = eyeRef.current?.getBoundingClientRect();

            cursorX.set(event.clientX);
            cursorY.set(event.clientY);
        },
        [cursorX, cursorY]
    );

    useEffect(() => {
        window.addEventListener("mousemove", mouseMoveHandler);

        return () => window.removeEventListener("mousemove", mouseMoveHandler);
    }, [mouseMoveHandler]);

    const dustParticles = {
        hidden: { opacity: 0, scale: 0 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
        exit: { opacity: 0, scale: 0, transition: { duration: 0.5 } },
    };

    return (
        <div className="relative">
            <AnimatePresence mode="wait">
                {hidden ? (
                    <motion.div
                        initial={{ opacity: 0, y: -10, filter: "blur(8px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{
                            duration: 0.3,
                        }}
                        exit={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                        onClick={() => setHidden(!hidden)}
                        className="w-12 h-10 lg:w-16 lg:h-14 flex items-center justify-center bg-transparent rounded-full"
                        key="logo"
                    >
                        <svg width="37" height="26" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className="fill-black dark:fill-white" d="M15.4654 2.93463C15.4763 4.03914 14.5848 4.44338 13.4803 4.45428C12.3758 4.46517 10.9765 4.08351 10.9656 2.979C10.9548 1.87448 12.3413 0.965337 13.4458 0.954446C14.5503 0.943555 15.4545 1.83011 15.4654 2.93463Z" fill="black" />
                            <path className="fill-black dark:fill-white" d="M14.8779 4.9883C15.7377 4.99287 15.8339 5.55934 15.4507 6.32904C14.2087 8.82405 11.844 10.9713 8.08253 11.0084C4.58265 11.0429 3.07284 10.0577 2.06303 9.06763C1.05328 8.07754 -0.392745 5.17951 4.02358 5.0481C6.82622 4.96471 12.3728 4.97497 14.8779 4.9883Z" fill="black" />
                        </svg>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, y: -10, filter: "blur(8px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{
                            duration: 0.3,
                        }}
                        exit={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                        key="motion-logo"
                        onClick={() => setHidden(!hidden)}
                        className="w-12 h-10 lg:w-16 lg:h-14 flex items-center justify-center bg-white rounded-full"
                    >
                        <motion.svg
                            animate={{ y: 2 }}
                            transition={{
                                repeat: Infinity,
                                repeatType: "reverse",
                                type: "spring",
                            }}
                            width="37" height="26" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg"
                        >
                            <motion.g className="lucy__eyeWrapper"
                                style={{
                                    translateX: pupilRotationX,
                                    translateY: pupilRotationY
                                }}
                            >
                                {/* "M 2 4 L 1 2 L 5 2 L 1 1 L 2 -1 L 8 2 Z"
                                    "M 15 4 L 16 2 L 12 2 L 16 1 L 15 -1 L 10 2 Z" */}
                                <motion.path className="fill-black " d="M14.5 2C14.5 3.10457 13.6046 3.5 12.5 3.5C11.3954 3.5 10 3.10457 10 2C10 0.89543 11.3954 -4.7944e-10 12.5 -8.58946e-10C13.6046 -1.23845e-09 14.5 0.89543 14.5 2Z" fill="black" />
                                <motion.path className="fill-black " d="M6.5 2C6.5 3.10457 5.60457 3.5 4.5 3.5C3.39543 3.5 2 3.10457 2 2C2 0.89543 3.39543 0 4.5 0C5.60457 0 6.5 0.89543 6.5 2Z" fill="black" />
                            </motion.g>
                            <motion.path
                                style={{
                                    translateX: mouthX,
                                    translateY: mouthY,
                                }}
                                className="fill-black "
                                animate={{
                                    d: [
                                        "M13.9396 7C14.7921 7 14.8683 7.55001 14.4829 8.31048C13.2135 10.8154 10.8081 13 7.03785 13C3.5378 13 2.03778 12 1.03778 11C0.0378418 10 -1.38041 7 3.03787 7C6.12948 7 11.5044 7 13.9396 7Z", //அ                         
                                        "M 13 7 C 15 7 14 9 14 9 C 12 11 10 12 7 12 C 4 12 3 11 1 9 C 1 9 0 7 3.0379 7 S 7 7 13 7 Z",   // :)
                                        "M 11 7 C 11 7 12 7 13 9 C 14 11 11 12 8 12 C 5 12 2 11 3 9 C 4 7 5 7 5 7 S 8 6 11 7 Z",  // O
                                        "M 9 7 C 9 7 11 7 11 9 C 10 11 9 11 8 11 C 7 11 6 11 5 9 C 5 7 7 7 7 7 S 8 7 9 7 Z"  // o
                                    ]
                                }}
                                transition={{
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    repeatType: "reverse",
                                    duration: 10,
                                }}
                                fill="black"
                            />
                        </motion.svg>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};