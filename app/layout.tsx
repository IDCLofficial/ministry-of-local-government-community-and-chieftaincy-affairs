import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/navigation";
import Footer from "./components/Footer";
import NextTopLoader from "nextjs-toploader";
import { SITE_METADATA } from "@/utils/constants/metadata";
import ToasterProvider from "./components/ToasterProvider";
import { buildRootMetadata, jsonLd, organizationJsonLd } from "@/lib/seo";

const baseMetadata: Metadata = SITE_METADATA;

export const metadata = buildRootMetadata(baseMetadata);


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          src="https://pulse-track.onrender.com/tracker.min.js"
          data-key="pk_live_827e7c8fd0160a5d36c3caf8"
          defer
        />
      </head>
      <body
        className={`antialiased relative bg-white`}
      >
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(organizationJsonLd) }} />
        <NextTopLoader 
          color="#4CAF50"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #4CAF50,0 0 5px #4CAF50"
        />
        <ToasterProvider />
        <Navigation />
        <div className="">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
