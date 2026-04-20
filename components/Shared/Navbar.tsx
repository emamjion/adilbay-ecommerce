"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  Heart,
  House,
  Menu,
  Search,
  ShoppingCart,
  User,
  User2,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [showStickyCart, setShowStickyCart] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 80;
      setIsScrolled(scrolled);
      setShowStickyCart(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="w-full ">
      {/* 🔝 TOP BAR */}
      <div className="bg-[#0f766e] text-white text-[13px] px-6 py-2 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <span>Need Support? Call Us</span>
          <span className="bg-yellow-400 text-black px-2 py-0.5 rounded text-xs font-medium">
            (480) 555-0103
          </span>
        </div>

        <div className="hidden lg:flex items-center gap-6 text-[13px]">
          <span className="flex items-center gap-1 cursor-pointer">
            English <ChevronDown size={14} />
          </span>
          <span className="flex items-center gap-1 cursor-pointer">
            USD <ChevronDown size={14} />
          </span>
          <span className="flex items-center gap-2">
            Fashion Category
            <span className="bg-yellow-400 text-black px-2 py-0.5 rounded text-xs font-semibold">
              25% OFF
            </span>
          </span>
          <span>Today</span>
          <span>About us</span>
          <span>My Account</span>
          <span>My Wishlist</span>
          <span>Compare</span>
          <span>Order Tracking</span>
        </div>
      </div>

      {/* 🟡 MAIN HEADER */}
      <div
        className={`bg-white px-6 py-4 flex items-center justify-between border-b`}
      >
        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-bold text-[#0f766e] tracking-tight"
        >
          AdilBay
        </Link>

        {/* Search */}
        <div className="hidden md:flex flex-1 max-w-2xl mx-10 relative">
          <Input
            placeholder="Search for items..."
            className="rounded-full pl-5 pr-12 h-11 text-sm border-gray-300"
          />
          <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          {/* Account */}
          <div className="hidden md:flex items-center gap-3 bg-yellow-400 px-4 py-2 rounded-xl cursor-pointer hover:opacity-90 transition">
            <User size={18} />
            <div className="leading-tight">
              <p className="text-[11px]">Account</p>
              <p className="text-sm font-semibold">Log in</p>
            </div>
          </div>

          {/* Cart */}
          <div className="flex items-center gap-3 bg-yellow-400 px-4 py-2 rounded-xl relative">
            <ShoppingCart size={18} />
            <div className="leading-tight">
              <p className="text-[11px]">Cart</p>
              <p className="text-sm font-semibold">0 - Items</p>
            </div>

            {/* Badge */}
            <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full">
              0
            </span>
          </div>

          {/* Mobile Menu */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <Menu />
          </Button>
        </div>
      </div>

      {/* MENU BAR */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: isScrolled ? 0 : 0 }}
        transition={{ duration: 0.3 }}
        className={`bg-[#f8fafc] px-6 py-3 flex items-center gap-8 border-b z-50 sticky top-0 ${
          isScrolled ? "shadow-md backdrop-blur bg-white/90" : ""
        }`}
      >
        {/* Categories */}
        <div className="relative">
          <button
            onClick={() => setCategoryOpen(!categoryOpen)}
            className="bg-[#0f766e] text-white px-5 py-2.5 rounded-lg flex items-center gap-2 font-medium shadow-sm"
          >
            ☰ Explore All Categories <ChevronDown size={16} />
          </button>

          <AnimatePresence>
            {categoryOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.25 }}
                className="absolute top-14 left-0 w-72 bg-white border rounded-xl shadow-lg p-2 max-h-96 overflow-y-auto z-50"
              >
                {[
                  "Skincare",
                  "Air Freshners",
                  "Breakfast",
                  "Dairy & Desserts",
                  "Diabetes Care",
                  "Diet & Nutrition",
                  "Gym Supplements",
                  "Haircare Solutions",
                  "Health & Immunity Box",
                ].map((cat, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 5 }}
                    className="px-4 py-2.5 text-sm hover:bg-gray-100 rounded-lg cursor-pointer flex items-center justify-between"
                  >
                    {cat}
                    <ChevronDown size={14} className="text-gray-400" />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Menu */}
        <div className="hidden lg:flex gap-8 text-[15px] font-medium text-gray-700">
          {["Home", "Shop", "Pages", "Mega Menu"].map((item) => (
            <motion.span
              key={item}
              whileHover={{ y: -2 }}
              className="hover:text-black cursor-pointer"
            >
              {item} <ChevronDown size={14} className="inline ml-1" />
            </motion.span>
          ))}
          <span>Blog</span>
          <span>About Us</span>
          <span>Contact Us</span>
        </div>

        {/* RIGHT SIDE */}
        <div className="ml-auto flex items-center gap-4">
          {/* 🔥 Scroll Cart Button */}
          <AnimatePresence>
            {showStickyCart && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                className="relative bg-[#0f766e] text-white p-2 rounded-lg cursor-pointer"
              >
                <ShoppingCart size={18} />
                <span className="absolute -top-1 -right-1 bg-yellow-400 text-black text-[10px] w-5 h-5 flex items-center justify-center rounded-full">
                  0
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Support */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
              🎧
            </div>
            <div>
              <p className="text-xs text-gray-500">24/7 Support</p>
              <p className="font-semibold text-sm">888-777-999</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 📱 MOBILE */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black z-40"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 left-0 h-full w-[85%] bg-white z-50 shadow-xl p-5 flex flex-col"
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-[#0f766e]">AdilBay</h1>
                <button onClick={() => setMobileOpen(false)}>✕</button>
              </div>

              {/* Menu */}
              <div className="space-y-4 text-gray-700 text-[15px]">
                {[
                  "Categories",
                  "Home",
                  "Shop",
                  "Pages",
                  "Mega Menu",
                  "Blog",
                  "About Us",
                  "Contact Us",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex justify-between items-center border-b pb-2"
                  >
                    <span>{item}</span>
                    <ChevronDown size={16} />
                  </div>
                ))}
              </div>

              {/* Bottom */}
              <div className="mt-auto space-y-5 pt-6">
                <div className="flex items-center gap-3">
                  <div className="bg-orange-100 p-2 rounded-full">🔒</div>
                  <span>Login / Sign Up</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-orange-100 p-2 rounded-full">📞</div>
                  <span>888-777-999</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* 📱 BOTTOM NAVBAR */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t z-50 flex justify-around py-2">
        {[
          { name: "Home", icon: <House /> },
          { name: "My Order", icon: <ShoppingCart /> },
          { name: "Wishlist", icon: <Heart /> },
          { name: "My Account", icon: <User2 /> },
        ].map((item) => (
          <div
            key={item.name}
            className="flex flex-col items-center text-xs text-gray-600"
          >
            <span className="text-lg">{item.icon}</span>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
