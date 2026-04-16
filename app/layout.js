import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react"
import { CookieConsentProvider } from "./context/CookieConsentContext";
import { CookieConsentBanner } from "./components/CookieBanner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "West K9 — Professional Dog Training, Grooming & Breeding in Kisumu",
  description:
    "West K9 offers professional dog training, grooming, breeding, and handler training in Kisumu County, Kenya. Science-backed methods tailored to your dog's unique needs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <Analytics />
        <Header />
        <CookieConsentProvider>
          <main>{children}</main>
          <CookieConsentBanner />
        </CookieConsentProvider>
        <Footer />
      </body>
    </html>
  );
}
