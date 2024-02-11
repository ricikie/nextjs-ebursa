import React from "react";
import Link from "next/link"

export default function Header() {
  return (
    <>
      <nav className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl py-6">
        <div className="flex items-center flex-shrink-0 text-gray-800 mr-6">
          <Link href="/">
            <img
              src="/img/home-logo.png"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
          </Link>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-500 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-md font-semibold lg:flex-grow">
            <Link
              href="/"
              className="block mt-4 lg:inline-block lg:mt-0 text-sm text-gray-500 hover:bg-gray-100 px-4 py-2 rounded-xl mr-4"
            >
              Beranda
            </Link>
            <Link
              href="/jobfair"
              className="block mt-4 lg:inline-block lg:mt-0 text-sm text-gray-500 hover:bg-gray-100 px-4 py-2 rounded-xl mr-4"
            >
              Jobfair
            </Link>
            <Link
              href="/about"
              className="block mt-4 lg:inline-block lg:mt-0 text-sm text-gray-500 hover:bg-gray-100 px-4 py-2 rounded-xl mr-4"
            >
              Tentang
            </Link>
          </div>
          <div className="font-semibold">
            <Link
              href="/"
              className="block mt-4 lg:inline-block lg:mt-0 text-sm text-gray-500 hover:bg-gray-100 px-4 py-2 rounded-xl mr-4"
            >
              Masuk
            </Link>
            <button className="text-white text-sm bg-teal-500 px-5 py-3 rounded-full hover:bg-teal-300">
              Mulai Diskusi
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
