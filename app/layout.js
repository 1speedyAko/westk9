import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react"
import { CookieConsentProvider } from "./context/CookieConsentContext";
import { CookieConsentBanner } from "./components/CookieBanner";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <body>
      <Analytics/>
        <Header/>
        <CookieConsentProvider>
          {children}
          <CookieConsentBanner />
        </CookieConsentProvider>
        <Footer/>
      </body>
    </html>
  );
}
