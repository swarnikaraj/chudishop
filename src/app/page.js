"use client";

import { useMemo, useState } from "react";
import {
  Phone,
  MapPin,
  Sparkles,
  Package,
  Globe,
  Factory,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import { galleryData } from "@/data/gallery-data";

const categories = [
  {
    title: "Bangles Collection",
    description:
      "Fancy glass bangles, customized chudi, kangan, chuka, and premium traditional designs in glass, lakh, and metal.",
    image: galleryData.bangles?.[0] || "/images/bangles/1.jpg",
  },
  {
    title: "Home Decor",
    description:
      "Flower vases, candle stands, decorative lamps, chandeliers, and elegant home decoration items.",
    image: galleryData.homeDecor?.[0] || "/images/home-decor/1.jpg",
  },
  {
    title: "Shop Display",
    description:
      "Visit our store in Firozabad for a beautiful collection of bangles, glassware, decorative items, and custom orders.",
    image: galleryData.shop?.[0] || "/images/shop/1.jpg",
  },
];

const productTabs = {
  Bangles: galleryData.bangles || [],
  "Home Decor": galleryData.homeDecor || [],
  Shop: galleryData.shop || [],
};

const highlights = [
  {
    icon: Package,
    title: "Retail & Wholesale",
    text: "All items available in retail as well as wholesale quantities.",
  },
  {
    icon: Globe,
    title: "Orders Across India",
    text: "We take orders from all over India and also support exports to other countries.",
  },
  {
    icon: Factory,
    title: "Factory Customization",
    text: "Customized glass items, chudi, kangan, and chuka can be made to order.",
  },
  {
    icon: Sparkles,
    title: "Wide Variety",
    text: "From bangles to decorative glass items, we offer many styles and designs.",
  },
];

function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-rose-600">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function HeroSection() {
  const mainShopImage = galleryData.shop?.[0] || "/images/shop/1.jpg";
  const sideImage1 = galleryData.bangles?.[0] || "/images/bangles/1.jpg";
  const sideImage2 = galleryData.homeDecor?.[0] || "/images/home-decor/1.jpg";

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(244,63,94,0.12),transparent_30%),radial-gradient(circle_at_top_left,rgba(251,146,60,0.14),transparent_30%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
        <div className="flex flex-col justify-center">
          <div className="w-fit rounded-full border border-rose-200 bg-white px-4 py-2 text-sm font-medium text-rose-700 shadow-sm">
            Firozabad Glass Store • Retail • Wholesale • Export
          </div>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Sneh Srinagar Emporium
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Elegant glass bangles, decorative items, flower vases, candle
            stands, lamps, glass jars, bottles, chandeliers, and custom-made
            creations for customers across India and abroad.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="tel:+919761214515"
              className="inline-flex items-center gap-2 rounded-2xl bg-rose-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-rose-200 transition hover:-translate-y-0.5"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5"
            >
              View Collection <ChevronRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-rose-600" />
                <div>
                  <p className="font-semibold text-slate-900">Visit Our Shop</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Shop No. 4, Chandr Shekar Azad Market, Firozabad, Uttar
                    Pradesh - 283203
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5 text-rose-600" />
                <div>
                  <p className="font-semibold text-slate-900">
                    Call for Orders
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    +91 97612 14515
                    <br />
                    +91 88659 84536
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 rounded-4xl border border-slate-200 bg-white p-3 shadow-xl">
            <Image
              width={1200}
              height={900}
              src={mainShopImage}
              alt="Sneh Srinagar Emporium Shop"
              className="h-[320px] w-full rounded-3xl object-cover"
              priority
            />
          </div>
          <div className="rounded-4xl border border-slate-200 bg-white p-3 shadow-lg">
            <Image
              width={800}
              height={800}
              src={sideImage1}
              alt="Glass bangles"
              className="h-52 w-full rounded-3xl object-cover"
            />
          </div>
          <div className="rounded-4xl border border-slate-200 bg-white p-3 shadow-lg">
            <Image
              width={800}
              height={800}
              src={sideImage2}
              alt="Home decor items"
              className="h-52 w-full rounded-4xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function HighlightsSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {highlights.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50">
                <Icon className="h-6 w-6 text-rose-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {item.text}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function CategorySection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Our Specialties"
        title="Collections that make your shop and home stand out"
        subtitle="A premium showcase of bangles, home decor, and your store collection."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {categories.map((item) => (
          <div
            key={item.title}
            className="overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-sm"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={800}
              height={600}
              className="h-64 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProductGalleryTabs() {
  const tabNames = useMemo(() => Object.keys(productTabs), []);
  const [activeTab, setActiveTab] = useState(tabNames[0]);

  return (
    <section id="gallery" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Gallery"
          title="A premium product showcase with your real photos"
          subtitle="Your website is now using images directly from your folders instead of manual image lists."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {tabNames.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-2xl px-5 py-2.5 text-sm font-semibold transition ${
                activeTab === tab
                  ? "bg-rose-600 text-white shadow-lg shadow-rose-200"
                  : "border border-slate-200 bg-white text-slate-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {productTabs[activeTab].map((image, idx) => (
            <div
              key={`${image}-${idx}`}
              className="group overflow-hidden rounded-4xl border border-slate-200 bg-white p-3 shadow-sm"
            >
              <Image
                src={image}
                alt={`${activeTab} ${idx + 1}`}
                width={800}
                height={1000}
                className="h-80 w-full rounded-3xl object-cover transition duration-300 group-hover:scale-[1.03]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CustomOrderSection() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-4xl bg-slate-900 px-6 py-10 text-white shadow-2xl sm:px-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-rose-300">
              Custom Manufacturing
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Custom-made products crafted to your requirements
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
              We take custom orders for many types of glass products based on
              your design and business needs. Customized chudi, kangan, and
              chuka are also available in glass, lakh, and metal materials.
            </p>
          </div>

          <div className="rounded-[1.75rem] bg-white/10 p-6 backdrop-blur">
            <h3 className="text-xl font-semibold">Best for:</h3>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-200">
              <li>• Bulk wholesale buyers</li>
              <li>• Retail shop owners</li>
              <li>• Wedding and gifting requirements</li>
              <li>• Decorative project orders</li>
              <li>• Export inquiries</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-4xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Contact & Orders
          </h2>
          <div className="mt-6 space-y-5 text-slate-700">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-rose-600">
                Shop Name
              </p>
              <p className="mt-1 text-lg font-medium">Sneh Srinagar Emporium</p>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-rose-600">
                Address
              </p>
              <p className="mt-1 leading-7">
                Shop No. 4, Chandr Shekar Azad Market, Firozabad, Uttar Pradesh
                - 283203
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-rose-600">
                Mobile Numbers
              </p>
              <div className="mt-2 flex flex-wrap gap-3">
                <a
                  href="tel:+919761214515"
                  className="rounded-2xl bg-rose-50 px-4 py-2 font-medium text-rose-700"
                >
                  +91 97612 14515
                </a>
                <a
                  href="tel:+918865984536"
                  className="rounded-2xl bg-rose-50 px-4 py-2 font-medium text-rose-700"
                >
                  +91 88659 84536
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-4xl bg-linear-to-br from-rose-600 to-orange-500 p-8 text-white shadow-xl">
          <h2 className="text-3xl font-bold tracking-tight">
            Serve customers across India and abroad
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-rose-50">
            We accept retail, wholesale, and export orders. Wholesale available.
            Retail and wholesale for all items available.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="tel:+919761214515"
              className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-rose-700 shadow"
            >
              Call for Wholesale
            </a>
            <a
              href="tel:+918865984536"
              className="rounded-2xl border border-white/40 px-5 py-3 text-sm font-semibold text-white"
            >
              Call for Retail
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-sm text-slate-600 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <p>
          © {new Date().getFullYear()} Sneh Srinagar Emporium. All rights
          reserved.
        </p>
        <p>Fancy Bangles • Home Decor • Wholesale • Export</p>
      </div>
    </footer>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#fffaf8] text-slate-900">
      <HeroSection />
      <HighlightsSection />
      <CategorySection />
      <ProductGalleryTabs />
      <CustomOrderSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
