import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Providers from "./Providers";

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

export const metadata: Metadata = {
  title: "Megatha Tech — Premium Software House for High-Growth Startups",
  description:
    "We build production-ready web applications, Web3 infrastructure, and AI automation workflows for high-growth startups and enterprises. Book a discovery call today.",
  keywords: [
    "software house",
    "web development",
    "Next.js",
    "Web3",
    "AI agents",
    "blockchain",
    "startup engineering",
  ],
  verification: {
    google: "NLaB6g1bAhwifsuvLJEXay6w568aZtoi5WiDPEk7KmA",
  },
  openGraph: {
    title: "Megatha Tech — Premium Software House",
    description:
      "Engineering premium web applications, decentralized infrastructure, and AI-driven automation workflows with high-velocity deployment.",
    type: "website",
  },
};

const GTM_ID = "GTM-TGVXDZRZ";

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
          {children}
          <FloatingWhatsApp />
        </Providers>
      </body>
    </html>
  );
}
