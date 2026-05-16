"use client";

import { motion } from "framer-motion";
import { Expand, ShoppingBag } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import QuickViewModal from "../QuickViewModal";

type Product = {
  id: number;
  name: string;
  image: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  discount?: number;
  sold?: number;
  total?: number;
};

const products: Product[] = Array.from({ length: 20 }).map((_, i) => ({
  id: i + 1,
  name: ["Clementine", "Premium T-Shirt", "Mint", "Lettuce", "Carrot"][i % 5],
  image: "/images/product.png", // 👉 same image use or replace
  price: 30 + i * 5,
  oldPrice: i % 3 === 0 ? 50 + i * 5 : undefined,
  rating: 3 + (i % 2),
  reviews: 5 + i,
  discount: i % 4 === 0 ? 10 : i % 5 === 0 ? 30 : undefined,
  sold: i % 3 === 0 ? 20 + i : undefined,
  total: 100,
}));

export default function PopularProducts() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [open, setOpen] = useState(false);
  return (
    <section className="py-14 bg-[#f7f7f7]">
      {/* HEADER */}
      <div className="text-center mb-10 px-4">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Popular Products for Daily Shopping
        </h2>
        <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm">
          See all our popular products in this week. You can choose your daily
          needs products from this list and get some special offer with free
          shipping.
        </p>
      </div>

      {/* GRID */}
      <div
        className="
        max-w-7xl mx-auto px-4
        grid gap-5
        grid-cols-2
        md:grid-cols-3
        lg:grid-cols-5
        2xl:grid-cols-6
      "
      >
        {products.map((product) => (
          <motion.div
            key={product.id}
            whileHover="hover"
            initial="rest"
            animate="rest"
            className="group bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all"
          >
            {/* IMAGE AREA */}
            <div className="relative bg-gray-100 h-45 flex items-center justify-center">
              {/* Discount */}
              {product.discount && (
                <div className="absolute top-3 right-3 bg-orange-100 text-[#f36f21] text-xs px-2 py-1 rounded-full font-medium">
                  {product.discount}% Off
                </div>
              )}

              <Image
                src={product.image}
                alt={product.name}
                width={140}
                height={140}
                className="object-contain"
              />

              {/* Quick View (hover) */}
              <motion.div
                onClick={() => {
                  setSelectedProduct(product);
                  setOpen(true);
                }}
                variants={{
                  rest: { opacity: 0, y: 20 },
                  hover: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.3 }}
                className="group absolute bottom-4 left-1/2 -translate-x-1/2 bg-white shadow-md px-3 py-2 rounded-full text-xs flex items-center gap-2 whitespace-nowrap cursor-pointer"
              >
                <span className="flex items-center gap-2 text-black transition-colors duration-300 group-hover:text-[#f36f21]">
                  {" "}
                  <Expand size={16} /> Quick View
                </span>
              </motion.div>

              {/* Add to cart */}
              <motion.button
                variants={{
                  rest: { scale: 0.9 },
                  hover: { scale: 1 },
                }}
                className="absolute bottom-3 right-3 bg-[#f36f21] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md"
              >
                <ShoppingBag size={18} />
              </motion.button>
            </div>

            {/* CONTENT */}
            <div className="p-4">
              <h3 className="text-sm font-medium text-gray-800">
                {product.name}
              </h3>

              {/* Rating */}
              <div className="flex items-center gap-1 mt-1 text-yellow-500 text-sm">
                {"★".repeat(Math.floor(product.rating))}
                {"☆".repeat(5 - Math.floor(product.rating))}
                <span className="text-gray-500 text-xs ml-1">
                  {product.rating.toFixed(1)} ({product.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="mt-2 flex items-center gap-2">
                <span className="font-semibold text-gray-900">
                  ${product.price.toFixed(2)}
                </span>
                {product.oldPrice && (
                  <span className="text-gray-400 line-through text-sm">
                    ${product.oldPrice.toFixed(2)}
                  </span>
                )}
              </div>

              {/* SOLD BAR (hover) */}
              {product.sold && (
                <motion.div
                  variants={{
                    rest: { opacity: 0, height: 0 },
                    hover: { opacity: 1, height: "auto" },
                  }}
                  className="mt-3"
                >
                  <div className="flex justify-between text-xs text-gray-500 mb-1">
                    <span>{product.sold} Sold</span>
                    <span>
                      {product.sold}/{product.total}
                    </span>
                  </div>

                  <div className="w-full bg-gray-200 h-1 rounded-full overflow-hidden">
                    <div
                      className="bg-[#f36f21] h-full"
                      style={{
                        width: `${(product.sold / product.total!) * 100}%`,
                      }}
                    />
                  </div>
                </motion.div>
              )}
            </div>

            {/* BORDER HOVER */}
            <motion.div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              variants={{
                rest: { borderColor: "rgba(249, 115, 22, 0)" },
                hover: { borderColor: "#0f766e" },
              }}
              style={{ borderWidth: 1 }}
            />
          </motion.div>
        ))}
      </div>

      <QuickViewModal
        isOpen={open}
        onClose={() => setOpen(false)}
        product={
          selectedProduct && {
            ...selectedProduct,
            stock: 183,
            description:
              "Organic food is food produced by methods complying with the standards of organic farming...",
          }
        }
      />
    </section>
  );
}
