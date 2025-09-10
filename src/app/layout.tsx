import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeaderBackground from "@/components/HeaderBackground";
import { type Config } from "mixpanel-browser";
import { MixpanelProvider } from "@/providers/mixpanel";

const Matter = localFont({
  src: [
    {
      path: "../../public/fonts/Matter-Regular.db893963.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Matter-Medium.2d3e576a.ttf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-matter",
  display: "swap",
  preload: true, // Додати preload
});

const systemMono = {
  variable: "--font-system-mono",
};

const mixpanelConfig: Partial<Config> = {
  api_host: process.env.NEXT_PUBLIC_MIXPANEL_API_URL,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <title>Boostra - Website UX, Speed, Content &amp; Conversion Tool</title>
        <meta name="description" content="Boostra tool analyzes UX, speed, content, and user behavior to uncover drop-off points and boost conversions through clear, data-driven website improvements" />
        
        {/* Favicon */}
        <link rel="icon" type="image/jpeg" sizes="16x16" href="/Assets/16 x 16.jpg" />
        <link rel="icon" type="image/jpeg" sizes="24x24" href="/Assets/24 x 24.jpg" />
        <link rel="icon" type="image/jpeg" sizes="32x32" href="/Assets/32 x 32.jpg" />
        <link rel="icon" type="image/jpeg" sizes="64x64" href="/Assets/64 x 64.jpg" />
        <link rel="icon" type="image/jpeg" sizes="128x128" href="/Assets/128 x 128.jpg" />
        <link rel="icon" type="image/jpeg" sizes="512x512" href="/Assets/512 x 512.jpg" />
        <link rel="apple-touch-icon" href="/Assets/128 x 128.jpg" />
        
        <link rel="canonical" href="https://getboostra.com/" />
        
        {/* Open Graph */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Boostra - Website UX, Speed, Content &amp; Conversion Tool" />
        <meta property="og:description" content="Boostra tool analyzes UX, speed, content, and user behavior to uncover drop-off points and boost conversions through clear, data-driven website improvements" />
        <meta property="og:url" content="https://getboostra.com/" />
        <meta property="og:site_name" content="Boostra" />
        <meta property="og:image" content="https://getboostra.com/Assets/thumbnail.jpg" />
        <meta property="og:image:type" content="image/jpeg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://getboostra.com/Assets/thumbnail.jpg" />
        
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NW9PFDJ198"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NW9PFDJ198');
          `}
        </Script>
      </head>
      <body className={`${Matter.variable} ${systemMono.variable} antialiased`}>
        <MixpanelProvider config={mixpanelConfig}>
          <div
            className="min-h-screen flex flex-col relative"
            style={{ scrollBehavior: "smooth" }}
          >
            {/* Header background */}
            <HeaderBackground />
            <Header />
            <main className="flex-1 overflow-x-hidden relative z-10">
              {children}
            </main>
            <Footer />
          </div>
        </MixpanelProvider>
      </body>
    </html>
  );
}
