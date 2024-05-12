import { navLinks } from "@/constants";
import Link from "next/link";
import React from "react";
import Theme from "./Theme";

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-30 flex w-full items-center justify-between bg-light-1 shadow-sm dark:bg-dark-2 px-6 py-3">
      <Link href="/" className="flex items-center">
        <span
          className={`text-2xl font-bold max-xs:hidden dark:text-white`}
        >
          Tinker
        </span>
        <span
          className={`text-2xl max-xs:hidden dark:text-white`}
        >
            Hub
        </span>
      </Link>
      {navLinks.map((link) => (
        <Link href={link.link} key={link.title} className="dark:text-white max-md:hidden">
          {link.title}
        </Link>
      ))}
      <Theme />
    </nav>
  );
};

export default Navbar;
