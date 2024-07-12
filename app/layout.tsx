import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import type { Viewport } from "next";
import Script from "next/script";

export const viewport: Viewport = {
  themeColor: "black",
};

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kerala Campus Conference 2024",
  description:
    "Join us for the Kerala Campus Conference 2024. Proclaim from the rooftops!",
  keywords:
    "KCC, KCC24, Kerala Campus Conference 24, Jesus Youth, JY, KCC JY, KCC 2024, KCC 24 JY, Conference, August 23, August Conference, KCC jy2024, Proclaim from the rooftops, Kerala Campus Ministry, campus ministers, Kerala, youth leadership, ministry activities, evangelization, leadership training, Christian conference, youth event, campus evangelization, young leaders, faith sharing, ministry vision, grass root ministry, building the kingdom of God, campus ministry, leadership development, spiritual growth, Christian leadership, Kerala Christian event, Jesus Youth Kerala",
  openGraph: {
    title: "Kerala Campus Conference 2024",
    description:
      "Join us for the Kerala Campus Conference 2024. Proclaim from the rooftops!",
    url: "https://kcc24.live",
    siteName: "Kerala Campus Conference 2024",
    images: [
      {
        url: "https://kcc24.live/assets/hero.webp",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kerala Campus Conference 2024",
    description:
      "Join us for the Kerala Campus Conference 2024. Proclaim from the rooftops!",
    images: ["https://kcc24.live/assets/hero.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "./assets/kcclogo16.png", sizes: "16x16", type: "image/png" },
      { url: "./assets/kcclogo32.png", sizes: "32x32", type: "image/png" },
      { url: "./assets/kcclogo48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: "./assets/kcclogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`bg-gray-900 text-white bg-cover ${inter.className}`}
        style={{ backgroundImage: "url('/assets/bg.webp')" }}
      >
        {children}
      </body>
    </html>
  );
}
