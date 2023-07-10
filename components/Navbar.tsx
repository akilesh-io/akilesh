import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

export const Navbar = () => {
  const [active, setActive] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <div className="container mx-auto max-w-4xl mt-6 px-7">
        <nav className="flex items-center flex-wrap lg:p-0   dark:bg-gradient-to-br dark:from-slate-300 dark:via-cyan-100 dark:to-lime-100 rounded-md ">
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
            className={`${
              active ? "slide-in" : "slide-out"
            } w-full lg:inline-flex lg:flex-grow lg:w-auto `}
          >
            <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto pt-6 lg:pt-0 lg:mr-5">
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
              <a
                href="mailto:2112akilesh@gmail.com"
                className="lg:inline-flex lg:w-auto lg:mr-5 w-full px-3 py-2 rounded text-gray-700 font-bold items-center justify-center "
              >
                Contact
              </a>
              <button
                className="lg:inline-flex lg:w-auto lg:mr-5 w-full px-3 py-2 rounded text-gray-700 font-bold items-center justify-center "
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
              <a
                href="mailto:2112akilesh@gmail.com"
                className="lg:inline-flex lg:w-auto lg:mr-5 w-full px-3 py-2 rounded text-gray-700 font-bold items-center justify-center "
              >
                Contact
              </a>

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
