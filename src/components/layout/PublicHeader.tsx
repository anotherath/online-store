"use client";

import Link from "next/link";
import CartIcon from "../icons/CartIcon";
import MenuIcon from "../icons/MenuIcon";
import UserIcon from "../icons/UserIcon";
import { usePathname } from "next/navigation";

export default function PublicHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-white/60 backdrop-blur-sm border-b border-transparent">
      <div className="container mx-auto flex justify-between items-center py-5 px-8">
        <a className="font-extrabold tracking-widest text-lg text-black">
          LUMEN
        </a>
        <nav className="hidden md:flex items-center gap-12 text-sm font-medium relative">
          <Link
            href="/"
            className={`transition-colors text-black ${
              pathname === "/" ? "" : "font-light"
            }`}
          >
            Home
          </Link>

          <Link
            href="/products"
            className={`transition-colors text-black ${
              pathname === "/products" ? "" : "font-light"
            }`}
          >
            Products
          </Link>

          <Link
            href="/blog"
            className={`transition-colors text-black ${
              pathname === "/blog" ? "" : "font-light"
            }`}
          >
            Blog
          </Link>

          <Link
            href="/feedback"
            className={`transition-colors text-black ${
              pathname === "/feedback" ? "" : "font-light"
            }`}
          >
            Feedback
          </Link>

          <Link
            href="/about"
            className={`transition-colors text-black ${
              pathname === "/about" ? "" : "font-light"
            }`}
          >
            About
          </Link>

          <Link
            href="/contact"
            className={`transition-colors text-black ${
              pathname === "/contact" ? "" : "font-light"
            }`}
          >
            Contact
          </Link>
        </nav>

        <div className="flex gap-4 items-center">
          <a aria-label="Account">
            <UserIcon className="h-5 w-5" />
          </a>
          <a aria-label="Cart">
            <CartIcon className="h-5 w-5" />
          </a>
          <a className="block md:hidden" aria-label="Open Menu">
            <MenuIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </header>
  );
}
