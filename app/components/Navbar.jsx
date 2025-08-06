"use client";

import Link from "next/link";
import { ChevronDown, Equal } from "lucide-react";
import { useState } from "react";

export default function Navbar({ blok }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white border-gray-100">
      <div className="max-w-[311px] mx-auto py-4 pb-8 md:max-w-[700px] md:py-8 lg:max-w-[960px] xl:max-w-[1140px]">
        <div className="flex items-center justify-between">
          <img src={blok.logo?.filename} alt="Aircall" className="h-10" />

          <nav className="hidden lg:flex items-center space-x-8 text-aircall-grey-900">
            {blok.nav_items.map((item) =>
              item.type === "link" ? (
                <Link
                  key={item._uid}
                  href={item.url}
                  className="hover:text-emerald-500"
                >
                  {item.label}
                </Link>
              ) : (
                <div key={item._uid} className="relative group cursor-pointer">
                  <span className="hover:text-emerald-500 flex items-center gap-1">
                    {item.label}
                    {item.type[0] !== "link" && (
                      <ChevronDown className="w-3 h-3 opacity-30" />
                    )}
                  </span>
                </div>
              )
            )}
          </nav>

          <button className="hidden lg:inline bg-aircall-green text-white px-5 py-2 rounded font-semibold">
            {blok.cta_text}
          </button>

          <button
            className="block lg:hidden "
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            <span className="px-2 text-aircall-green flex items-center">
              MENU <Equal className="w-6 h-8 text-aircall-green ml-2" />
            </span>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden mt-4 space-y-2 text-aircall-grey-900">
            {blok.nav_items.map((item) =>
              item.type === "link" ? (
                <Link
                  key={item._uid}
                  href={item.url}
                  className="block hover:text-emerald-500"
                >
                  {item.label}
                </Link>
              ) : (
                <div key={item._uid} className="cursor-pointer">
                  <span className="hover:text-emerald-500 flex items-center gap-1">
                    {item.label}
                    {item.type[0] !== "link" && (
                      <ChevronDown className="w-3 h-3 opacity-30" />
                    )}
                  </span>
                </div>
              )
            )}

            <button className="block w-full bg-aircall-green text-white px-5 py-2 rounded font-semibold mt-2">
              {blok.cta_text}
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
