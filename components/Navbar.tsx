import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import Bulb from "@/components/Bulb";
import { useRouter } from 'next/router';
import styles from "@/styles/Nav.module.scss";
import Magnetic from "@/common/Magnetic";
import sun from "@/public/images/sun.png";
import moon from "@/public/images/moon.png";
import { useEffect, useState } from "react";
import Logo from "./Logo";

export const Navbar = () => {
  const [active, setActive] = useState(false);
  const { theme, setTheme } = useTheme();

  const router = useRouter();
  const showBulb = router.pathname == '/';

  useEffect(() => {
    console.log('%c✨ Design + Developed By Akilesh • https://www.akilesh.in', 'font-weight: bold; font-size: 16px;color: #00b894');

  }, []);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <div className="container mx-auto px-4 max-w-screen-xl mt-6 relative flex flex-col items-center justify-center">
        <div className={`px-5 ${styles.header} xl:px-0`}>
          <div className={styles.logo}>
            <Magnetic>
            <Link href="/" passHref>
              <Logo />
            </Link>
            </Magnetic>
          </div>
          <div className={styles.nav}>
            <Magnetic>
              <div className={styles.el}>
                <Link
                  href="/blog"
                  className="dark:white black font-semibold text-lg"
                >
                  Blog
                </Link>
                <div className={`dark:bg-white bg-black ${styles.indicator}`}></div>
              </div>
            </Magnetic>

            <Magnetic>
              <div className={styles.el}>
                <Link
                  href="/work"
                  className="dark:white black font-semibold text-lg"
                >
                  Work
                </Link>
                <div className={`dark:bg-white bg-black ${styles.indicator}`}></div>
              </div>
            </Magnetic>
            {/* <Magnetic>
              <div className={styles.el}>
                <Link
                  href="https://store.akilesh.in/"
                  passHref
                  target="_blank"
                  className="dark:white black"
                >
                  Store
                </Link>
                <div className={styles.indicator}></div>
              </div>
            </Magnetic> */}
            <Magnetic>
              <div
                className="flex flex-col relative z-10 py-4 pl-3"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {theme === "dark" ? (
                  <Image
                    // src="https://img.icons8.com/pulsar-color/48/sun.png"
                    src={sun}
                    alt="sun"
                    width={37}
                  />
                ) : (
                  <Image
                    // src="https://img.icons8.com/pulsar-color/48/crescent-moon.png"
                    src={moon}
                    alt="moon"
                    width={28}
                  />
                )
                }
              </div>
            </Magnetic>
          </div>
        </div>

        <div className="absolute top-0 left-0 m-48 mr-4 hidden lg:block">
          {/* {showBulb && <Bulb />} */}
        </div>

        {/* Gradients */}
        {!showBulb && (
          <div className="w-[40rem] relative my-2 block md:hidden scale-67.5">
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-violet-400 dark:via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-violet-300 dark:via-indigo-500 to-transparent h-px w-3/4 " />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-violet-400 dark:via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-violet-300 dark:via-sky-500 to-transparent h-px w-1/4 " />
          </div>
        )}
      </div>
      <style jsx>{`
        .slide-in {
          max-height: 500px;
          overflow: hidden;
          transition: max-height 0.5s ease-in-out;
        }

        .slide-out {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.5s ease-in-out;
        }
      `}</style>
    </>
  );
};
