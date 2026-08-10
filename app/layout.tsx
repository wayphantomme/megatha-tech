import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Providers from "./Providers";
import OrganizationSchema from "./components/OrganizationSchema";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const BASE_URL = "https://megatha-tech.vercel.app";
const GTM_ID = "GTM-TGVXDZRZ";
const GA_ID = "G-G2DCXCXDCX";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Megatha Tech — Software House Bali, Indonesia",
  description:
    "Jasa pembuatan web app, sistem otomasi, dan platform digital. Tepat waktu, harga transparan, dari nol sampai live. Berbasis di Bali, melayani seluruh Indonesia dan mancanegara.",
  keywords: [
    "software house bali",
    "jasa pembuatan website",
    "jasa web app",
    "sistem otomasi bisnis",
    "AI automation",
    "web development indonesia",
    "software house indonesia",
    "megatha tech",
  ],
  authors: [{ name: "Megatha Tech", url: BASE_URL }],
  creator: "Megatha Tech",
  verification: {
    google: "NLaB6g1bAhwifsuvLJEXay6w568aZtoi5WiDPEk7KmA",
  },
  openGraph: {
    title: "Megatha Tech — Software House Bali, Indonesia",
    description:
      "Jasa pembuatan web app, sistem otomasi, dan platform digital. Tepat waktu, harga transparan, dari nol sampai live.",
    url: BASE_URL,
    siteName: "Megatha Tech",
    locale: "id_ID",
    alternateLocale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Megatha Tech — Software House Bali",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Megatha Tech — Software House Bali",
    description:
      "Jasa pembuatan web app, sistem otomasi, dan platform digital. Tepat waktu, harga transparan.",
    images: ["/og-image.png"],
    site: "@megathatech",
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakarta.variable} h-full antialiased`}
    >
      <head>
        {/* Google Tag Manager — script */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
        {/* Google Analytics 4 */}
        <Script
          id="ga4-script"
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        />
        <Script
          id="ga4-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-[#111111]">
        {/* Google Tag Manager — noscript fallback */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Providers>
          <OrganizationSchema />
          {children}
          <FloatingWhatsApp />
        </Providers>
      </body>
    </html>
  );
}
