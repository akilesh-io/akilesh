import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useRouter } from 'next/router';
import styles from "@/styles/Nav.module.scss";
import Magnetic from "@/components/Magnetic";
import sun from "@/public/images/sun.png";
import moon from "@/public/images/moon.png";
import { useEffect } from "react";
import Logo from "./Logo";
// import Bulb from "@/components/Bulb";

export const Navbar = () => {
  // `resolvedTheme` rather than `theme`: `theme` is the literal stored value,
  // which is "system" for anyone who never picked one, so toggling off it
  // sent OS-dark visitors to dark again.
  const { resolvedTheme, setTheme } = useTheme();

  const router = useRouter();
  const showBulb = router.pathname == '/';

  useEffect(() => {
    console.log('%c✨ Design + Developed By Akilesh • https://www.akilesh.in', 'font-weight: bold; font-size: 16px;color: #00b894');

  }, []);

  return (
    <nav className="mx-auto px-4 max-w-screen-xl mt-6 relative flex flex-col items-center justify-center">
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
                  target="_blank"
                  href="https://blog.akilesh.in/"
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
              <button
                type="button"
                aria-label="Toggle dark mode"
                className="flex flex-col relative z-10 py-4 pl-3"
                onClick={() =>
                  setTheme(resolvedTheme === "dark" ? "light" : "dark")
                }
              >
                <Image
                  src={sun}
                  alt=""
                  aria-hidden="true"
                  width={37}
                  className="hidden dark:block"
                />
                <Image
                  src={moon}
                  alt=""
                  aria-hidden="true"
                  width={28}
                  className="block dark:hidden"
                />
              </button>
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
    </nav>
  );
};
