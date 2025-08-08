import type { Metadata } from 'next';

// Site metadata that follows Next.js Metadata type
export const SITE_METADATA: Metadata = {
  metadataBase: new URL('https://imolga.gov.ng'),
  title: "Ministry of Local Government Area, Community and Chieftaincy Affairs - Imo State",
  description: "Official website of the Imo State Ministry of Local Government Area, Community and Chieftaincy Affairs. Empowering local governance, uniting communities, and honoring traditions across Imo State.",
  authors: [{ name: "Imo State Government" }],
  alternates: {
    canonical: "/",
    languages: {
      'en-NG': '/en-ng',
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Ministry of Local Government Area, Community and Chieftaincy Affairs - Imo State",
    description: "Empowering local governance, uniting communities, and honoring traditions across Imo State.",
    creator: "@ImoStateGov",
    images: ["/assets/twitter-card.jpg"]
  },
  keywords: [
    "Imo State",
    "Local Government",
    "Community Development",
    "Chieftaincy Affairs",
    "Traditional Institutions",
    "Grassroots Governance",
    "Imo State Government",
    "Local Administration",
    "Rural Development",
    "Traditional Rulers",
    "Community Empowerment"
  ],
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://imolga.gov.ng",
    siteName: "Imo State Ministry of Local Government Area, Community and Chieftaincy Affairs",
    title: "Ministry of Local Government Area, Community and Chieftaincy Affairs - Imo State",
    description: "Working hand in hand with Local Governments, communities, and traditional institutions to drive sustainable development across Imo State.",
    images: [
      {
        url: "/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Imo State Ministry of Local Government Area, Community and Chieftaincy Affairs - Empowering Local Governance"
      }
    ]
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: "/assets/favicon.ico",
    shortcut: "/assets/favicon.ico",
    apple: "/assets/apple-touch-icon.png",
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/assets/ng-logo.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/assets/ng-logo.png',
      },
    ],
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#1a365d' },
    { media: '(prefers-color-scheme: dark)', color: '#1a365d' },
  ]
}