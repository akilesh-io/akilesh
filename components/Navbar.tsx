import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import Bulb from "@/components/Bulb";

export const Navbar = () => {
  const [active, setActive] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <div className="container max-w-5xl px-7 mx-auto mt-6 relative ">
        <nav className="flex items-center flex-wrap lg:p-0  dark:bg-gradient-to-br dark:from-slate-300 dark:via-cyan-100 dark:to-lime-100 rounded-md  bg-neutral-200">
          <Link href="/" passHref>
            <Image
              src="https://img.icons8.com/doodle/48/iceberg.pnghttps://img.icons8.com/doodle/48/iceberg.png"
              alt="logo"
              width={48}
              height={48}
              className="p-1"
            />
          </Link>

          <div className="group ml-auto">
            <button
              className="inline-flex p-3 rounded lg:hidden text-white "
              onClick={handleClick}
            >
              <svg
                className="w-6 h-6 text-cyan-900 "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          <div
            className={`${active ? "slide-in" : "slide-out"
              } w-full lg:inline-flex lg:flex-grow lg:w-auto `}
          >
            <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto pt-1 lg:pt-0 lg:mr-5">
              <Link
                href="/blog"
                className="lg:inline-flex lg:w-auto lg:mr-5 w-full px-3 py-2 rounded text-gray-700 font-bold items-center justify-center "
              >
                Blog
              </Link>
              <Link
                href="/work"
                passHref
                className="lg:inline-flex lg:w-auto lg:mr-5 w-full px-3 py-2 rounded text-gray-700 font-bold items-center justify-center "
              >
                Work
              </Link>
              <Link
                href="https://store.akilesh.in/"
                passHref
                className="lg:inline-flex lg:w-auto lg:mr-5 w-full px-3 py-2 rounded text-gray-700 font-bold items-center justify-center "
              >
                Store
              </Link>
              <button
                className="lg:inline-flex lg:w-auto lg:mr-5 w-full px-3 py-2 rounded text-gray-700 font-bold items-center justify-center"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {theme === "dark" ? (
                  <Image
                    src="https://img.icons8.com/pulsar-color/48/sun.png"
                    alt="sun"
                    width={24}
                    height={24}
                  />
                ) : (
                  <Image
                    src="https://img.icons8.com/pulsar-color/48/crescent-moon.png"
                    alt="moon"
                    width={24}
                    height={24}
                  />
                )}
              </button>
            </div>
          </div>

          <div className="hidden w-full lg:inline-flex lg:flex-grow lg:w-auto ">
            <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto pt-6 lg:pt-0 lg:mr-5">
              <Link
                href="/blog"
                className="lg:inline-flex lg:w-auto lg:mr-5 w-full px-3 py-2 rounded text-gray-700 font-bold items-center justify-center hover:bg-white"
              >
                Blog
              </Link>
              <Link
                href="/work"
                passHref
                className="lg:inline-flex lg:w-auto lg:mr-5 w-full px-3 py-2 rounded text-gray-700 font-bold items-center justify-center hover:bg-white"
              >
                Work
              </Link>

              <Link
                href="https://store.akilesh.in/"
                passHref
                className="lg:inline-flex lg:w-auto lg:mr-5 w-full px-3 py-2 rounded text-gray-700 font-bold items-center justify-center hover:bg-white"
              >
                Store
              </Link>

              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {theme === "dark" ? (
                  <Image
                    src="https://img.icons8.com/pulsar-color/48/sun.png"
                    alt="sun"
                    width={24}
                    height={24}
                  />
                ) : (
                  <Image
                    src="https://img.icons8.com/pulsar-color/48/crescent-moon.png"
                    alt="moon"
                    width={24}
                    height={24}
                  />
                )}
              </button>
            </div>
          </div>
        </nav>
        <div className="absolute top-0 right-0 mt-60 mr-4 hidden lg:block">
          <Bulb />
        </div>
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
