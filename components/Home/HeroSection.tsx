"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    title: "Boost your health with trusted supplements.",
    desc: "Discover your favorite brands, latest trends, and exclusive discounts in one place.",
    image: "/images/b-1.png",
  },
  {
    id: 2,
    title: "Build muscle faster with premium protein.",
    desc: "High-quality supplements designed for serious performance.",
    image: "/images/b-2.png",
  },
  {
    id: 3,
    title: "Energy & strength for your daily grind.",
    desc: "Stay active, stay strong with our best formulas.",
    image: "/images/b-1.png",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="w-full px-4 py-3">
      <div
        className="relative overflow-hidden rounded-3xl bg-linear-to-r from-[#0f766e] to-[#115e59] 
      h-105 md:h-130 flex items-center py-6 md:py-0"
      >
        {/* SLIDES */}
        <div
          className="flex transition-transform duration-700 ease-in-out w-full h-full"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="min-w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-16"
            >
              {/* LEFT */}
              <div className="max-w-xl text-white">
                <div className="flex items-center gap-3 mb-4">
                  <p className="text-sm opacity-90">Get your supplement Now</p>
                  <span className="bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-full">
                    SALE ON FRIDAY
                  </span>
                </div>

                <h1 className="text-2xl md:text-5xl font-bold leading-tight mb-4">
                  {slide.title}
                </h1>

                <p className="text-white/80 mb-6 text-sm md:text-lg">
                  {slide.desc}
                </p>

                <Button className="rounded-full px-5 py-5 flex items-center gap-2 bg-teal-600 hover:bg-teal-500">
                  Shop Now
                  <ArrowUpRight size={18} />
                </Button>
              </div>

              {/* RIGHT IMAGE */}
              <div className="relative w-55 h-55 md:w-120 md:h-87.5 mt-6 md:mt-0">
                <Image
                  src={slide.image}
                  alt="supplements"
                  fill
                  className="object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          ))}
        </div>

        {/* LEFT ARROW */}
        <button
          onClick={prevSlide}
          className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 
          bg-white/20 backdrop-blur-md hover:bg-white/30 
          transition p-3 md:p-4 rounded-full shadow-lg border border-white/30"
        >
          <ArrowLeft className="text-white w-4 h-4 md:w-5 md:h-5" />
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={nextSlide}
          className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 
          bg-white/20 backdrop-blur-md hover:bg-white/30 
          transition p-3 md:p-4 rounded-full shadow-lg border border-white/30"
        >
          <ArrowRight className="text-white w-4 h-4 md:w-5 md:h-5" />
        </button>

        {/* DOTS */}
        <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 md:gap-3 bg-white/20 px-3 py-1.5 md:px-4 md:py-2 rounded-full backdrop-blur">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`transition-all duration-300 rounded-full ${
                current === i
                  ? "w-5 md:w-6 h-2 bg-white"
                  : "w-2 h-2 bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
