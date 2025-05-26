import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';

export default function Index({ children }: { children: React.ReactElement }) {
    const magnetic = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!magnetic.current) return;

        const xTo = gsap.quickTo(magnetic.current, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
        const yTo = gsap.quickTo(magnetic.current, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

        const handleMouseMove = (e: MouseEvent) => {
            if (!magnetic.current) return;
            const { clientX, clientY } = e;
            const { height, width, left, top } = magnetic.current.getBoundingClientRect();
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);
            xTo(x * 0.35);
            yTo(y * 0.35);
        };

        const handleMouseLeave = () => {
            xTo(0);
            yTo(0);
        };

        magnetic.current.addEventListener("mousemove", handleMouseMove);
        magnetic.current.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            if (!magnetic.current) return;
            magnetic.current.removeEventListener("mousemove", handleMouseMove);
            magnetic.current.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [children]);

    return React.cloneElement(children, { ref: magnetic });
}