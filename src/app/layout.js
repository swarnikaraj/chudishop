import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://sneh-srinagar-emporium.vercel.app"),
  title: {
    default: "Sneh Srinagar Emporium | Glass Bangles, Home Decor & Wholesale in Firozabad",
    template: "%s | Sneh Srinagar Emporium",
  },
  description:
    "Sneh Srinagar Emporium in Firozabad offers fancy glass bangles, customized chudi, kangan, home decor items, flower vases, candle stands, glass jars, decorative lamps, chandeliers, wholesale, retail, export, and custom glass products across India and abroad.",
  keywords: [
    "Sneh Srinagar Emporium",
    "glass bangles shop Firozabad",
    "fancy bangles Firozabad",
    "customized chudi",
    "customized kangan",
    "home decor shop Firozabad",
    "glass decorative items",
    "flower vase shop",
    "candle stand shop",
    "glass jars wholesale",
    "decorative lamp shop",
    "chandelier shop Firozabad",
    "glass items wholesale India",
    "retail and wholesale bangles",
    "export glass products India",
    "custom glass products",
    "glass lah metal bangles",
    "Firozabad glass market",
  ],
  authors: [{ name: "Sneh Srinagar Emporium" }],
  creator: "Sneh Srinagar Emporium",
  publisher: "Sneh Srinagar Emporium",
  category: "shopping",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sneh Srinagar Emporium | Glass Bangles, Home Decor & Wholesale in Firozabad",
    description:
      "Fancy glass bangles, home decor, decorative glass items, wholesale, retail, export, and custom orders from Firozabad, Uttar Pradesh.",
    url: "https://sneh-srinagar-emporium.vercel.app",
    siteName: "Sneh Srinagar Emporium",
    images: [
      {
        url: "/images/shop/1.jpg",
        width: 1200,
        height: 630,
        alt: "Sneh Srinagar Emporium shop and products",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sneh Srinagar Emporium | Glass Bangles, Home Decor & Wholesale",
    description:
      "Fancy glass bangles, home decor items, glassware, chandeliers, wholesale, retail, export, and customized orders.",
    images: ["/images/shop/1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: "Sneh Srinagar Emporium",
    image: "https://sneh-srinagar-emporium.vercel.app/images/shop/1.jpg",
    url: "https://sneh-srinagar-emporium.vercel.app",
    telephone: ["+91-9761214515", "+91-8865984536"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Shop No. 4, Chandr Shekar Azad Market",
      addressLocality: "Firozabad",
      addressRegion: "Uttar Pradesh",
      postalCode: "283203",
      addressCountry: "IN",
    },
    areaServed: [
      {
        "@type": "Country",
        name: "India",
      },
    ],
    description:
      "Retail and wholesale shop for fancy glass bangles, home decor, decorative glass items, chandeliers, glass jars, lamps, and custom glass products.",
    makesOffer: [
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Fancy Glass Bangles" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Home Decorative Items" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Flower Vases" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Candle Stands" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Glass Jars" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Decorative Lamps" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Chandeliers" } },
    ],
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}