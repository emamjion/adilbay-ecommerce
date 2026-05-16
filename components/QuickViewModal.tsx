"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type Product = {
  name: string;
  image: string;
  price: number;
  rating: number;
  reviews: number;
  stock: number;
  description: string;
};

type Props = {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
};

export default function QuickViewModal({ isOpen, onClose, product }: Props) {
  const [qty, setQty] = useState(1);

  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* OVERLAY */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-[3px] z-50"
            onClick={onClose}
          />

          {/* MODAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="relative w-full max-w-5xl bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] grid md:grid-cols-2 overflow-hidden">
              {/* CLOSE */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-10 h-10 bg-[#ef4444] cursor-pointer hover:bg-red-600 text-white rounded-lg flex items-center justify-center"
              >
                <X size={18} />
              </button>

              {/* LEFT IMAGE */}
              <div className="bg-[#f5f5f5] flex items-center justify-center p-10">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="object-contain"
                />
              </div>

              {/* RIGHT CONTENT */}
              <div className="p-10">
                {/* STOCK */}
                <p className="text-sm text-gray-500">
                  In stock:{" "}
                  <span className="text-green-600 font-medium">
                    {product.stock}
                  </span>
                </p>

                {/* TITLE */}
                <h2 className="text-2xl font-semibold mt-1">{product.name}</h2>

                {/* RATING */}
                <div className="flex items-center gap-1 mt-2 text-yellow-500 text-sm">
                  {"★".repeat(Math.floor(product.rating))}
                  {"☆".repeat(5 - Math.floor(product.rating))}
                  <span className="text-gray-500 text-xs ml-1">
                    {product.rating.toFixed(1)} ({product.reviews} reviews )
                  </span>
                </div>

                {/* DESCRIPTION */}
                <p className="text-gray-500 text-sm mt-4 leading-relaxed max-w-md">
                  {product.description}
                </p>

                {/* PRICE */}
                <h3 className="text-[26px] font-semibold mt-5 text-gray-900">
                  ${product.price.toFixed(2)}
                </h3>

                {/* ACTION ROW */}
                <div className="flex items-center gap-3 mt-6 w-full">
                  {/* Quantity */}
                  <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden shrink-0">
                    <button
                      onClick={() => setQty((q) => Math.max(1, q - 1))}
                      className="px-3 py-2 cursor-pointer"
                    >
                      −
                    </button>
                    <span className="px-4 text-sm">{qty}</span>
                    <button
                      onClick={() => setQty((q) => q + 1)}
                      className="px-3 py-2 cursor-pointer"
                    >
                      +
                    </button>
                  </div>

                  {/* Add to cart */}
                  <button className="bg-[#f36f21] hover:bg-[#e65c0d] text-white px-5 py-3 rounded-lg flex items-center justify-center cursor-pointer gap-2 text-sm font-medium flex-1">
                    Add to cart
                  </button>

                  {/* View details */}
                  <button className="border border-gray-200 cursor-pointer px-5 py-3 rounded-lg flex items-center justify-center gap-2 text-sm font-medium text-gray-700 flex-1">
                    View details
                  </button>
                </div>

                {/* FOOTER */}
                <div className="mt-7 border-t pt-4 text-sm text-gray-500">
                  <p>
                    Category: <span className="text-gray-700">jam-jelly</span>
                  </p>

                  <p className="mt-2">
                    Call Us for Order{" "}
                    <span className="text-[#f36f21] font-medium">
                      019579034
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
