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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/pagedone@1.1.2/src/css/pagedone.css"
          rel="stylesheet"
        />
        <meta
          name="google-site-verification"
          content="FD8caxnx0zUzRFgtOk1O_cZ_UShPj3WxN3-cLQVBpO0"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js')`,
          }}
        />
        <Script
          id=""
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
              "@context": "https://schema.org",
              "@type": "Event",
              "name": "Kerala Campus Conference 2024",
              "startDate": "2024-08-23T00:00+05:30",
              "endDate": "2024-08-26T23:59+05:30",
              "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
              "eventStatus": "https://schema.org/EventScheduled",
              "location": {
                "@type": "Place",
                "name": "Rajagiri College of Social Sciences",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Rajagiri College of Social Sciences",
                  "addressLocality": "Kalamassery",
                  "postalCode": "683104",
                  "addressRegion": "Kerala",
                  "addressCountry": "India"
                }
              },
              "image": [
                "https://kcc24.live/assets/hero.webp"
              ],
              "description": "Join us for the Kerala Campus Conference 2024. Proclaim from the rooftops!",
              "offers": {
                "@type": "Offer",
                "url": "https://kcc24.live/registration",
                "price": "2000",
                "priceCurrency": "INR",
                "availability": "https://schema.org/InStock",
                "validFrom": "2024-07-01T00:00+05:30"
              },
              "performer": {
                "@type": "PerformingGroup",
                "name": "Jesus Youth"
              }
            }`,
          }}
        />
      </head>
      <body
        className={`bg-gray-900 text-white bg-cover ${inter.className}`}
        style={{ backgroundImage: "url('./assets/bg.webp')" }}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-070KWDF5CS"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-070KWDF5CS');
          `}
        </Script>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PGMF54GR');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
