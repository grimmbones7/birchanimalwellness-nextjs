"use client";

import React, { useCallback, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bars3Icon } from "@heroicons/react/24/outline";

type HeaderMenuLink = {
  label: string;
  href: string;
  icon?: React.ReactNode;
  submenu?: HeaderMenuLink[];
};

export const menuLinks: HeaderMenuLink[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about-me",
  },
{
    label: "Services",
    href: "",
    submenu: [
      { label: "For your Horse", href: "/horse-services" },
      { label: "For your Dog", href: "/dog-services" },
      { label: "For your Cat", href: "/cat-services" },
      { label: "For your Other Pets", href: "/other-animal-services" },
      { label: "Common Issues", href: "/common-issues" },
    ],
  },
  {
    label: "Shop",
    href: "/shop",
  },
  {
    label: "Contact",
    href: "/contact",
    submenu: [{ label: "Policies", href: "/policies" }],
  },

];

const HeaderSubmenu = ({ submenu }: { submenu: HeaderMenuLink[] }) => {
  return (
    <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md">
      {submenu.map(({ label, href }) => (
        <li key={href}>
          <Link href={href} passHref className="block px-4 py-2 text-sm hover:bg-gray-100">
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export const HeaderMenuLinks = () => {
  const pathname = usePathname();

  return (
    <>
      {menuLinks.map(({ label, href, icon, submenu }) => {
        const isActive = pathname === href;
        return (
          <li key={href} className="relative group">
            <Link
              href={href}
              passHref
              className={`${
                isActive ? "bg-secondary shadow-md" : ""
              } hover:bg-secondary hover:shadow-md focus:!bg-secondary active:!text-neutral py-1.5 px-3 text-sm rounded-full gap-6 grid grid-flow-col`}
            >
              {icon}
              <span>{label}</span>
            </Link>
            {submenu && submenu.length > 0 && (
              <div className="hidden group-hover:block">
                <HeaderSubmenu submenu={submenu} />
              </div>
            )}
          </li>
        );
      })}
    </>
  );
};

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Logo" width={50} height={50} />
            <span className="ml-2 text-xl font-bold">Birch Animal Wellness</span>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>

          {/* Desktop menu */}
          <nav className="hidden lg:flex space-x-4">
            {menuLinks.map((link) => (
              <div key={link.href} className="relative group">
                <Link
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    pathname === link.href ? "bg-gray-200" : "hover:bg-gray-100"
                  }`}
                >
                  {link.label}
                </Link>
                {link.submenu && (
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                      {link.submenu.map((sublink) => (
                        <Link
                          key={sublink.href}
                          href={sublink.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                        >
                          {sublink.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden ${isOpen ? "block" : "hidden"}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    pathname === link.href ? "bg-gray-200" : "hover:bg-gray-100"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
                {link.submenu && (
                  <div className="pl-4 space-y-1">
                    {link.submenu.map((sublink) => (
                      <Link
                        key={sublink.href}
                        href={sublink.href}
                        className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100"
                        onClick={() => setIsOpen(false)}
                      >
                        {sublink.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};
