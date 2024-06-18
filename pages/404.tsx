
import styles from "@/styles/404.module.css";
import { gsap } from "gsap";
import Burger404 from "@/components/Burger404";
// import Solo404 from "@/components/Solo404";
import { MorphingCircle } from "@/components/MorphingCircle";
import { useEffect } from "react";

export default function Custom404() {


    useEffect(() => {
        const tl = gsap.timeline();
        tl.from(".notFound span, .logo", {
            duration: 0.8,
            stagger: {
                amount: 0.7,
            },
            y: 200,
            skewY: 10,
            opacity: 0,
        });
        tl.from(".home-btn", {
            scale: 0,
            duration: 0.5,
            stagger: {
                amount: 0.6,
            },
        }, "-=.4");
    }, []);

    return (
        // <div className=" mx-auto max-w-4xl justify-center px-4 place-items-center grid">
        <div className=" mx-auto h-screen justify-center px-4 grid">

            <div className="flex-wrap flex flex-col sm:flex-row sm:justify-center items-center  mx-0 my-auto font-bigilla">
                <div className="flex flex-col sm:flex-row items-center ">
                    <div className="text-center sm:text-start flex flex-col w-7/10 relative order-1 m-16 overflow-visible">
                        <span className="sm:text-9xl text-8xl leading-[89%] text-gray-200 font-bold overflow-hidden">PAGE</span>
                        <span className="sm:text-9xl text-8xl leading-[89%] text-gray-200 font-bold overflow-hidden ">
                            <div className="inline-block w-max sm:text-9xl text-8xl text-center py-2 my-2 px-12 mr-5 rounded-full border-2 border-yellow-600">404</div>
                            NOT
                        </span>
                        <span className="sm:text-9xl text-8xl leading-[89%] text-gray-200 font-bold overflow-hidden">FOUND</span>
                    </div>
                    {/* <Solo404 /> */}

                </div>
                {/* <Burger404 /> */}
                <MorphingCircle />

            </div>
        </div>
    )
}