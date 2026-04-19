"use client";

import {} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const footerLinks = {
  marketplace: {
    title: "Marketplace",
    links: [
      { label: "All Categories", href: "/categories" },
      { label: "Flash Deals", href: "/deals" },
      { label: "New Arrivals", href: "/new" },
      { label: "Top Sellers", href: "/top-sellers" },
      { label: "Brand Stores", href: "/brands" },
      { label: "Wholesale", href: "/wholesale" },
    ],
  },
  vendors: {
    title: "Vendors",
    links: [
      { label: "Become a Seller", href: "/sell" },
      { label: "Seller Dashboard", href: "/dashboard" },
      { label: "Vendor Policy", href: "/vendor-policy" },
      { label: "Commission Rates", href: "/commissions" },
      { label: "Verified Sellers", href: "/verified" },
      { label: "Seller Support", href: "/seller-support" },
    ],
  },
  customer: {
    title: "Customer",
    links: [
      { label: "My Orders", href: "/orders" },
      { label: "Track Package", href: "/track" },
      { label: "Returns & Refunds", href: "/returns" },
      { label: "Help Center", href: "/help" },
      { label: "Buyer Protection", href: "/protection" },
      { label: "Report Issue", href: "/report" },
    ],
  },
};

const trustBadges = [
  { icon: "🔒", title: "Secure Payments", sub: "SSL Encrypted" },
  { icon: "🚚", title: "Fast Delivery", sub: "Nationwide coverage" },
  { icon: "↩️", title: "Easy Returns", sub: "7-day policy" },
  { icon: "✅", title: "Verified Vendors", sub: "Quality assured" },
  { icon: "🎧", title: "24/7 Support", sub: "Always available" },
];

const topVendors = [
  "TechZone BD",
  "FashionHub",
  "GadgetKing",
  "HomeDecor+",
  "SportsPro",
  "BeautyCart",
  "FreshMart",
  "BookWorld",
  "KidsZone",
  "+ 2,400 more",
];

const paymentMethods = ["VISA", "MC", "bKash", "Nagad", "COD"];

const socialLinks = [
  { label: "𝕏", href: "https://twitter.com" },
  { label: "f", href: "https://facebook.com" },
  { label: "in", href: "https://linkedin.com" },
  { label: "▶", href: "https://youtube.com" },
  { label: "📷", href: "https://instagram.com" },
];

const legalLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
  { label: "Sitemap", href: "/sitemap" },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: integrate newsletter API
    setEmail("");
  };

  return (
    <footer className="bg-[#0f0f0f] text-[#f0ede8] font-sans">
      {/* ── Main Grid ── */}
      <div className="border-t border-[#2a2a2a] bg-[#161616]">
        <div className="mx-auto max-w-7xl px-6 py-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_1.2fr]">
          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <div>
              <p className=" text-2xl font-medium tracking-wide text-white">
                AdilBay
              </p>
              <p className="mt-0.5 text-[10px] uppercase tracking-[0.2em] text-[#888]">
                Multi-Vendor Marketplace
              </p>
            </div>
            <p className="text-sm text-[#888] leading-relaxed max-w-60">
              Thousands of sellers&apos; best products in one platform.
              Reliable, fast, and affordable.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-lg border border-[#2a2a2a] bg-[#1e1e1e] text-sm transition-colors hover:border-[#3ac2b7] hover:bg-[#1e1a12]"
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.values(footerLinks).map((col) => (
            <div key={col.title}>
              <h3 className="mb-4 text-[10px] uppercase tracking-[0.2em] font-medium text-[#3ac2b7]">
                {col.title}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="inline-block text-sm text-[#888] transition-all duration-300 transform hover:translate-x-1.5 ease-in-out hover:text-[#3ac2b7]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter Column */}
          <div>
            <h3 className="mb-2 text-[10px] uppercase tracking-[0.2em] font-medium text-[#3ac2b7] ">
              Stay Updated
            </h3>
            <p className="mb-4 text-xs text-[#888] leading-relaxed">
              Get offers, new products, and updates delivered directly to your
              inbox.
            </p>
            <form onSubmit={handleSubscribe} className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 min-w-0 rounded-l-lg border border-[#2a2a2a] bg-[#1e1e1e] px-3 py-2.5 text-xs text-[#f0ede8] placeholder:text-[#555] outline-none focus:border-[#0f766e]  transition-colors"
              />
              <button
                type="submit"
                className="rounded-r-lg bg-[#0f766e] cursor-pointer px-4 py-2.5 text-[11px] font-medium tracking-wide text-white whitespace-nowrap hover:bg-[#3ac2b7] transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-2.5 text-[11px] text-[#555]">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>

      {/* ── Trust Badges ── */}
      <div className="border-t border-[#2a2a2a]">
        <div className="mx-auto max-w-7xl px-6 py-6 flex gap-3 overflow-x-auto">
          {trustBadges.map((badge) => (
            <div
              key={badge.title}
              className="flex items-center gap-3 min-w-40 shrink-0 rounded-xl border border-[#2a2a2a] bg-[#1e1e1e] px-4 py-3"
            >
              <span className="text-xl leading-none">{badge.icon}</span>
              <div>
                <p className="text-xs font-medium text-[#f0ede8]">
                  {badge.title}
                </p>
                <p className="text-[11px] text-[#888]">{badge.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Top Vendor Pills ── */}
      <div className="border-t border-[#2a2a2a]">
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-wrap items-center gap-3">
          <span className="text-[11px] uppercase tracking-[0.15em] text-[#888] whitespace-nowrap">
            Top Stores
          </span>
          <div className="flex flex-wrap gap-2">
            {topVendors.map((v) => (
              <span
                key={v}
                className="cursor-pointer rounded-full border border-[#2a2a2a] px-3 py-1 text-[11px] text-[#888] transition-colors hover:border-[#0f766e]  hover:text-[#0f766e]"
              >
                {v}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-[#2a2a2a]">
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs text-[#888]">
            © 2026 <span className="text-[#3ac2b7]">AdilBay</span>. All rights
            reserved. Develop by{" "}
            <Link
              href={"https://codeclubitsolutions.com/"}
              className="text-[#3ac2b7] hover:text-white duration-300 transition-all "
            >
              CodeClub IT Solutions
            </Link>
            .
          </p>

          {/* Payment Methods */}
          <div className="flex gap-1.5 items-center">
            {paymentMethods.map((m) => (
              <span
                key={m}
                className="rounded-md border border-[#2a2a2a] bg-[#1e1e1e] px-2.5 py-1 text-[10px] font-medium tracking-wide text-[#888]"
              >
                {m}
              </span>
            ))}
          </div>

          {/* Legal Links */}
          <div className="flex gap-4">
            {legalLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-[11px] text-[#888] transition-colors hover:text-[#f0ede8]"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
