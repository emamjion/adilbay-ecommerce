"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function DeliveryBanner() {
  return (
    // rounded-3xl
    <section className="w-full py-10 overflow-x-hidden">
        {/* bg-linear-to-r from-[#f36f21] to-[#f56b1a] */}
      <div className="max-w-7xl mx-auto bg-[#1a2752]  px-4 sm:px-6 md:px-10 py-10 flex flex-col lg:flex-row items-center justify-between gap-8 overflow-hidden">
        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <Image
            src="/images/delivary-boy.avif"
            alt="Delivery"
            width={500}
            height={400}
            className="object-contain w-full max-w-100 h-auto"
            priority
          />
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 text-center lg:text-left text-white"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-snug">
            Quick Delivery to Your Home
          </h2>

          <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-6 max-w-md mx-auto lg:mx-0">
            There are many products you will find in our shop, Choose your daily
            necessary product from our Adilbay shop and get some special offers.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center sm:justify-start gap-3 bg-black text-white px-5 py-3 rounded-full w-full sm:w-auto"
            >
              <span className="text-xl"></span>
              <div className="text-left">
                <p className="text-xs">Download on the</p>
                <p className="text-sm font-semibold">App Store</p>
              </div>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center sm:justify-start gap-3 bg-black text-white px-5 py-3 rounded-full w-full sm:w-auto"
            >
              <span className="text-xl">▶</span>
              <div className="text-left">
                <p className="text-xs">Download on the</p>
                <p className="text-sm font-semibold">Google Play</p>
              </div>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
