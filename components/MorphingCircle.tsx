import React, { useEffect, useRef, useState, useCallback } from 'react';
import anime from 'animejs';
import styles from '@/styles/MorphingCircle.module.css';


const MorphingCircle = () => {

    const [isActive, setIsActive] = useState(false);
    const circleRef = useRef(null);
    const pathRef = useRef(null);
    const svgRef = useRef(null);
    const decoRef = useRef(null);
    const imgRef = useRef(null);

    const paths = {
        end: "M 189,80.37 C 232.6,46.67 352.5,67.06 350.9,124.1 349.5,173.4 311.7,168 312.4,248.1 312.9,301.1 382.5,319.2 368.5,379.1 349.4,460.6 137.7,467.5 117.6,386.3 98.68,309.7 171.5,292.2 183.6,240.1 195.7,188.2 123.8,130.7 189,80.37 Z",
        start: "M 189,80.37 C 243,66.12 307.3,87.28 350.9,124.1 389.3,156.6 417,211.2 418.1,263.4 419.1,305.7 401.8,355.6 368.5,379.1 298.8,428 179.2,446.4 117.6,386.3 65.4,335.3 78.55,230.3 105.5,160.5 119.7,123.6 152.6,89.85 189,80.37 Z"
    };


    const config = {
        path: {
            duration: 1500,
            delay: 0,
            easing: 'easeOutElastic',
            elasticity: 400,
            scalex: 1,
            scaley: 1,
            translatex: 0,
            translatey: 0,
            rotate: 0
        },
        image: {
            duration: 2000,
            delay: 0,
            easing: 'easeOutElastic',
            elasticity: 400,
            scalex: 1.1,
            scaley: 1.1,
            translatex: 0,
            translatey: 0,
            rotate: 0
        },
        deco: {
            duration: 2500,
            delay: 0,
            easing: 'easeOutQuad',
            elasticity: 400,
            scalex: 0.9,
            scaley: 0.9,
            translatex: 0,
            translatey: 0,
            rotate: 0
        }
    };

    const mouseenterFn = () => {
        setTimeout(() => {
            setIsActive(true);
            animate();
        }, 75);
    }
    const mouseleaveFn = () => {
        if (isActive) {
            setIsActive(false)
            animate();
        }
    }



    function getAnimeObj(targetStr) {
        var target = targetStr;
        switch (targetStr) {
            case 'path':
                target = pathRef.current;
                break;
            case 'image':
                target = imgRef.current;
                break;
            case 'deco':
                target = decoRef.current;
                break;
            default:
                break;
        }

        let animeOpts: any = { // Update the type to 'any'
            targets: target,
            duration: config[targetStr].duration,
            delay: config[targetStr].delay,
            easing: config[targetStr].easing,
            elasticity: config[targetStr].elasticity,
            scalex: isActive ? config[targetStr].scalex : 1,
            scaley: isActive ? config[targetStr].scaley : 1,
            translatex: isActive ? config[targetStr].translatex : 0,
            translatey: isActive ? config[targetStr].translatey : 0,
            rotate: isActive ? config[targetStr].rotate : 0,

        };
        if (targetStr === 'path') {
            animeOpts.d = isActive ? paths.end : paths.start;
        }
        anime.remove(target);
        return animeOpts;
    }

    const animate = useCallback(() => {
        anime(getAnimeObj('path'));
        anime(getAnimeObj('image'));
        anime(getAnimeObj('deco'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isActive]); // Add dependencies used inside animate


    useEffect(() => {
        animate();
    }, [animate]);

    return (
        <>
            <svg className="hidden">
                <defs>
                    <path
                        id="deco1"
                        ref={pathRef}
                        d="M 161,54.69 C 230.4,4.986 303.7,8.661 414.4,92.19 465.7,130.9 432.3,211.4 460,279.5 481,331.2 449.7,430.4 381.1,427 287.1,422.3 172.4,503.8 99.27,444.6 21.03,381.1 10.32,258.3 55.25,145.6 73.73,99.3 129.3,77.36 161,54.69 Z"
                    />
                </defs>
            </svg>

            <div

                onMouseEnter={mouseenterFn}
                onMouseLeave={mouseleaveFn}
                ref={circleRef}
                className={`${styles.item} ${styles['item--style-1']}`}
                style={{ width: '500px', height: '500px', margin: '0 auto' }} // Added fixed width and height, and centering it horizontally
                data-animation-path-duration="800"
                data-animation-path-easing="easeInOutCubic"
                data-path-elasticity="300"
                data-morph-path="M 189,80.37 C 232.6,46.67 352.5,67.06 350.9,124.1 349.5,173.4 311.7,168 312.4,248.1 312.9,301.1 382.5,319.2 368.5,379.1 349.4,460.6 137.7,467.5 117.6,386.3 98.68,309.7 171.5,292.2 183.6,240.1 195.7,188.2 123.8,130.7 189,80.37 Z"
                data-path-scalex="0.8"
                data-path-scaley="1.1"
                data-path-translatex="0"
                data-path-translatey="30"
                data-path-rotate="5"
                data-animation-image-duration="800"
                data-animation-image-easing="easeInOutQuart"
                data-image-elasticity="300"
                data-image-scalex="1.2"
                data-image-scaley="1.2"
                data-image-translatex="-20"
                data-image-translatey="-45"
                data-image-rotate="-5"
                data-animation-deco-duration="1300"
                data-animation-deco-easing="easeOutQuad"
                data-deco-elasticity="300"
                data-deco-scalex="0.8"
                data-deco-scaley="0.9"
                data-deco-translatex="-5"
                data-deco-translatey="-5"
                data-deco-rotate="2"
                onClick={() => {
                    // Navigate to home
                    window.location.href = '/';
                }}
            >
                <svg
                    className={styles.item__svg}
                    ref={svgRef}
                    width="500px"
                    height="500px"
                    viewBox="0 0 500 500"
                >
                    <clipPath id="clipShape1">
                        <path
                            ref={pathRef}
                            className={styles.item__clippath}
                            d="M 189,80.37 C 243,66.12 307.3,87.28 350.9,124.1 389.3,156.6 417,211.2 418.1,263.4 419.1,305.7 401.8,355.6 368.5,379.1 298.8,428 179.2,446.4 117.6,386.3 65.4,335.3 78.55,230.3 105.5,160.5 119.7,123.6 152.6,89.85 189,80.37 Z"
                        />
                    </clipPath>
                    <g className={styles.item__deco} ref={decoRef}>
                        <use xlinkHref="#deco1" />
                    </g>
                    <g clipPath="url(#clipShape1)">
                        <image
                            ref={imgRef}
                            className={styles.item__img}
                            xlinkHref="images/1.png"
                            x="0"
                            y="0"
                            height="500px"
                            width="500px"
                        />
                    </g>
                </svg>
                <div className={styles.item__meta}>
                    <span className={styles.item__reference}>Back To</span>
                    <span className={styles.item__specimen}>Home</span>
                </div>
            </div>
        </>
    );
};

const MorphingEffect = () => {
    const pathRef = useRef(null);

    useEffect(() => {
        if (pathRef.current) {
            anime({
                targets: pathRef.current,
                d: [
                    { value: "M 189,80.37 C 232.6,46.67 352.5,67.06 350.9,124.1 349.5,173.4 311.7,168 312.4,248.1 312.9,301.1 382.5,319.2 368.5,379.1 349.4,460.6 137.7,467.5 117.6,386.3 98.68,309.7 171.5,292.2 183.6,240.1 195.7,188.2 123.8,130.7 189,80.37 Z" },
                    { valur: "M 189,80.37 C 243,66.12 307.3,87.28 350.9,124.1 389.3,156.6 417,211.2 418.1,263.4 419.1,305.7 401.8,355.6 368.5,379.1 298.8,428 179.2,446.4 117.6,386.3 65.4,335.3 78.55,230.3 105.5,160.5 119.7,123.6 152.6,89.85 189,80.37 Z" }
                ],
                easing: 'easeInOutQuad',
                duration: 2000,
                loop: true,
            });
        }
    }, []);

    return (
        <svg
            className={styles.item__svg}
            width="500px"
            height="500px"
            viewBox="0 0 500 500"
        >
            <path
                ref={pathRef}
                fill="lightblue"
                d="M 189,80.37 C 243,66.12 307.3,87.28 350.9,124.1 389.3,156.6 417,211.2 418.1,263.4 419.1,305.7 401.8,355.6 368.5,379.1 298.8,428 179.2,446.4 117.6,386.3 65.4,335.3 78.55,230.3 105.5,160.5 119.7,123.6 152.6,89.85 189,80.37 Z"
            />
        </svg>
    );
};

export { MorphingCircle, MorphingEffect };