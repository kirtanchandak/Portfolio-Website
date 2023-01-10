import React from "react";
import Link from "next/link";

function Header() {
  return (
    <div>
      <div className="flex flex-row items-center justify-between py-8">
        <div className="name">
          <Link href="/">
            <span className="px-24 name-logo-text font-semibold text-base text-gray-800">
              kirtanchandak
            </span>
          </Link>
        </div>
        <div className="px-72">
          <ul className="header-options-list flex flex-row items-center justify-end gap-5 w-fit h-auto">
            <li className="header-option-item text-sm text-gray-500 hover:text-gray-600">
              <Link href="">projects</Link>
            </li>
            <li className="header-option-item text-sm text-gray-500 hover:text-gray-600">
              <Link href="">hackthons and community</Link>
            </li>

            <li className="header-option-item">
              <button
                className="px-3 py-1.5 rounded-full bg-gray-800 hover:bg-gray-700 text-sm text-white"
                onClick={() => window.open("https://github.com/kirtanchandak")}
              >
                github
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
