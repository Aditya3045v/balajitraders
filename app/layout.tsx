import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://balajisolar.in'),
  title: {
    default: 'BALAJI TRADERS SOLAR ENERGY - North Bihar\'s Super Solar Distributor',
    template: '%s | BALAJI TRADERS SOLAR ENERGY'
  },
  description: 'BALAJI TRADERS SOLAR ENERGY - All Solar North Bihar Super Distributorship. Official vendor for NBPDCL & SBPDCL. PM Surya Ghar Yojana partner in Muzaffarpur & Begusarai. Authorized Waaree, Adani, Tata Power solar dealer.',
  keywords: ['solar installation bihar', 'solar panels muzaffarpur', 'solar panels begusarai', 'waaree solar distributor bihar', 'pm surya ghar bihar', 'solar subsidy bihar', 'residential solar bihar', 'balaji traders solar', 'adani solar dealer bihar', 'nbpdcl solar vendor', 'sbpdcl solar vendor'],
  authors: [{ name: 'BALAJI TRADERS SOLAR ENERGY' }],
  creator: 'BALAJI TRADERS SOLAR ENERGY',
  publisher: 'BALAJI TRADERS SOLAR ENERGY',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/assets/logo.png',
    shortcut: '/assets/logo.png',
    apple: '/assets/logo.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://balajisolar.in',
    siteName: 'BALAJI TRADERS SOLAR ENERGY',
    title: 'BALAJI TRADERS SOLAR ENERGY - Premier Solar Distributor in North Bihar',
    description: 'All Solar North Bihar Super Distributorship. Authorized Waaree, Adani & Tata Power solar dealer. Serving Muzaffarpur & Begusarai with PM Surya Ghar subsidies.',
    images: [
      {
        url: '/assets/logo.png',
        width: 800,
        height: 800,
        alt: 'BALAJI TRADERS SOLAR ENERGY Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BALAJI TRADERS SOLAR ENERGY - Solar Super Distributor Bihar',
    description: 'North Bihar\'s trusted solar distributor. Authorized Waaree partner. PM Surya Ghar subsidies available in Muzaffarpur & Begusarai.',
    images: ['/assets/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://balajisolar.in',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "BALAJI TRADERS SOLAR ENERGY",
    "description": "All Solar North Bihar Super Distributorship. Official vendor for NBPDCL & SBPDCL, offering Waaree, Adani, and Tata Power solar products with government subsidies.",
    "url": "https://balajisolar.in",
    "telephone": "+91-7992436836",
    "email": "contact@balajisolar.in",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Muzaffarpur & Begusarai",
      "addressLocality": "Muzaffarpur",
      "addressRegion": "Bihar",
      "postalCode": "842001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "26.1209",
      "longitude": "85.3906"
    },
    "sameAs": [
      "https://facebook.com/balajisolarbihar",
      "https://instagram.com/balajisolarbihar"
    ],
    "priceRange": "₹₹",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "20:00"
    }
  };

  return (
    <html lang="en" className={`${outfit.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="antialiased bg-[#0f172a] text-[#F8FAFC] font-sans">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
