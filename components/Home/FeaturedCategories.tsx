"use client";

import { motion } from "framer-motion";

const categories = [
  {
    title: "Fish & Meat",
    icon: "🐟",
    items: ["Fish", "Meat"],
  },
  {
    title: "Fruits & Vegetable",
    icon: "🥬",
    items: ["Fresh Fruits", "Dry Fruits", "Fresh Vegetable"],
  },
  {
    title: "Cooking Essentials",
    icon: "🍳",
    items: ["Flour", "Oil"],
  },
  {
    title: "Biscuits & Cakes",
    icon: "🍪",
    items: ["Biscuits", "Cakes"],
  },
  {
    title: "Household Tools",
    icon: "🧴",
    items: ["Water Filter", "Cleaning Tools", "Pest Control"],
  },
  {
    title: "Pet Care",
    icon: "🐱",
    items: ["Dog Care", "Cat Care"],
  },
  {
    title: "Beauty & Healths",
    icon: "👩",
    items: ["Women", "Men"],
  },
  {
    title: "Milk & Dairy",
    icon: "🥛",
    items: ["Butter & Ghee", "Ice Cream", "Dairy"],
  },
  {
    title: "Drinks",
    icon: "🥤",
    items: ["Tea", "Water", "Juice"],
  },
  {
    title: "Breakfast",
    icon: "🍩",
    items: ["Bread", "Cereal"],
  },
];

export default function FeaturedCategories() {
  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          Featured Categories
        </h2>
        <p className="text-gray-500 mt-2 text-sm md:text-base">
          Choose your necessary products from this feature categories.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 max-w-7xl mx-auto">
        {categories.map((cat, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl border hover:border-[#0f766e] border-gray-200 p-5 text-left shadow-sm hover:shadow-md transition-all duration-300"
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-3">
              <div className="text-3xl">{cat.icon}</div>
              <h3 className="font-medium text-gray-800 text-sm md:text-base">
                {cat.title}
              </h3>
            </div>

            {/* Sub Categories */}
            <div className="space-y-1">
              {cat.items.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 6 }} // 🔥 right move animation
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-sm text-gray-500 hover:text-[#0f766e] cursor-pointer flex items-center gap-1"
                >
                  <span className="text-xs">{">"}</span>
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
