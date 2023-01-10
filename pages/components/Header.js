import React from "react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
function Header() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/">
                <h2 className="">kirtanchandak</h2>
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="100"
                      height="100"
                      viewBox="0 0 32 32"
                      className="w-10"
                    >
                      <path d="M 16 4 C 9.3844239 4 4 9.3844287 4 16 C 4 22.615571 9.3844239 28 16 28 C 22.615576 28 28 22.615571 28 16 C 28 9.3844287 22.615576 4 16 4 z M 16 6 C 21.534697 6 26 10.465307 26 16 C 26 21.534693 21.534697 26 16 26 C 10.465303 26 6 21.534693 6 16 C 6 10.465307 10.465303 6 16 6 z M 12.707031 11.292969 L 11.292969 12.707031 L 14.585938 16 L 11.292969 19.292969 L 12.707031 20.707031 L 16 17.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 17.414062 16 L 20.707031 12.707031 L 19.292969 11.292969 L 16 14.585938 L 12.707031 11.292969 z"></path>
                    </svg>
                  ) : (
                    <Image
                      src="/menu.png"
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none w-6"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-2 md:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="pb-0 py-2 md:px-6 text-center text-gray-500 hover:text-gray-600">
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    projects
                  </Link>
                </li>
                <li className="pb-1 py-2 md:px-6 text-center text-gray-500 hover:text-gray-600">
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    hackthons and community
                  </Link>
                </li>
                <li className="pb-1 py-2 md:px-6 text-center">
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    <button
                      className="px-3 py-1.5 rounded-full bg-gray-800 hover:bg-gray-700 text-sm text-white"
                      onClick={() =>
                        window.open("https://github.com/kirtanchandak")
                      }
                    >
                      github
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
