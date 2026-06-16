"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-zinc-900 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-black dark:text-white"
        ></Link>
        <ul className="flex gap-6">
          <li>
            <Link
              href="/"
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/students"
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              Students
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
