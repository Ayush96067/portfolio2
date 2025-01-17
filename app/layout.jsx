import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/pageTransition";
import StairEffect from "@/components/StairEffect";
import { Suspense } from "react";
import Loading from "./loading";
import { Toaster } from "@/components/ui/toaster";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrainsMono",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Ayush Rawat",
  description: "My portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable}  antialiased`}>
        <Header />
        <StairEffect />
        <PageTransition>
          <Suspense fallback={<Loading />}>
            {children}
            <Toaster />
          </Suspense>
        </PageTransition>
      </body>
    </html>
  );
}
