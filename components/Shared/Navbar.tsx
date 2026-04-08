"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ITopNavMenus } from "@/types";
import { AnimatePresence, motion } from "framer-motion";
import {
  Bell,
  Home,
  LayoutGrid,
  Menu,
  Search,
  ShoppingCart,
  User,
  X,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";



const topNavMenus: ITopNavMenus[] = [
  {
    item: "About Us",
    href: "/about",
  },
  {
    item: "Contact Us",
    href: "/contact",
  },
  {
    item: "My Account",
    href: "/my-account",
  },
  {
    item: "Login",
    href: "/login",
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* TOP INFO BAR */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: isScrolled ? -50 : 0 }}
        transition={{ duration: 0.3 }}
        className="hidden md:flex justify-between items-center px-6 py-2 text-sm bg-gray-100 fixed top-0 left-0 w-full z-50"
      >
        <p>
          We are available 24/7, Need help??{" "}
          <span className="text-[#0f766e] font-semibold">+965 505 31 223</span>
        </p>
        <div className="flex items-center text-gray-600 text-sm">
          {topNavMenus.map((item, index) => (
            <Link
              href={item.href}
              key={item.item}
              className={`cursor-pointer px-2 transition-colors duration-200 hover:text-[#0f766e] ${
                index !== 0 ? "border-l border-gray-300" : ""
              }`}
            >
              {item.item}
            </Link>
          ))}
        </div>
      </motion.div>

      {/* MAIN NAVBAR */}
      <motion.div
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
        className={`fixed left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "top-0 bg-[#0f766e] shadow-lg py-2"
            : "top-0 md:top-9 bg-[#0f766e] py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between gap-3">
            {/* LEFT */}
            <div className="flex items-center gap-3  text-white">
              <Menu
                className="w-6 h-6 cursor-pointer md:hidden"
                onClick={() => setOpen(true)}
              />

              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-white text-[#0f766e] font-bold flex items-center justify-center rounded-md">
                  A
                </div>
                <div className="leading-tight">
                  <h1 className="font-bold text-lg">Adilbay</h1>
                </div>
              </div>
            </div>

            {/* SEARCH DESKTOP */}
            <div className="hidden md:flex flex-1 max-w-2xl">
              <div className="relative w-full">
                <Input
                  placeholder="Search for products (e.g. shirt, pant)"
                  className="rounded-lg h-12 pl-6 pr-14 bg-white"
                />
                <Search className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-5 text-white">
              <div className="relative">
                <ShoppingCart className="w-6 h-6" />
                <span className="absolute -top-2 -right-2 bg-white text-[#0f766e] text-xs px-1 rounded-full">
                  0
                </span>
              </div>
              <Bell className="w-6 h-6 hidden md:block" />
              <User className="w-6 h-6" />
            </div>
          </div>

          {/* MOBILE SEARCH */}
          <div className="mt-3 md:hidden">
            <div className="relative">
              <Input
                placeholder="Search in..."
                className="rounded-lg h-11 pl-4 pr-12 bg-white"
              />
              <Button
                size="icon"
                className="absolute right-1 top-1 rounded-full bg-[#0f766e]"
              >
                <Search className="w-4 h-4 text-white" />
              </Button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* SIDEBAR */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 z-40"
              onClick={() => setOpen(false)}
            />

            <motion.div
              initial={{ x: -320 }}
              animate={{ x: 0 }}
              exit={{ x: -320 }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 left-0 w-72 h-full bg-white z-50 p-4 overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-semibold text-lg">Menu</h2>
                <X onClick={() => setOpen(false)} className="cursor-pointer" />
              </div>

              {/* USER BOX */}
              <div className="bg-[#0f766e] text-white p-4 rounded-xl mb-4">
                <p className="text-sm opacity-80">Hello there!</p>
                <p className="font-semibold">Sign in / Register</p>
              </div>

              {/* MENU */}
              <ul className="space-y-3 text-sm">
                {[
                  "Mobile",
                  "Tablet",
                  "Laptop",
                  "Gadget",
                  "Smartwatch",
                  "Accessories",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex justify-between border-b pb-2 cursor-pointer"
                  >
                    {item}
                    <span>{">"}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* BOTTOM MOBILE NAV */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t z-50 md:hidden">
        <div className="grid grid-cols-5 text-center py-2 text-xs">
          <div className="flex flex-col items-center">
            <Home size={18} />
            Home
          </div>
          <div className="flex flex-col items-center">
            <LayoutGrid size={18} />
            Menu
          </div>

          {/* CENTER CART */}
          <div className="flex flex-col items-center -mt-6">
            <div className="bg-[#0f766e] text-white p-3 rounded-full shadow-lg">
              <ShoppingCart size={20} />
            </div>
            Cart
          </div>

          <div className="flex flex-col items-center">
            <Search size={18} />
            Search
          </div>
          <div className="flex flex-col items-center">
            <User size={18} />
            Account
          </div>
        </div>
      </div>

      {/* SPACER */}
      {/* <div className="h-30 md:h-32" /> */}
    </>
  );
}
