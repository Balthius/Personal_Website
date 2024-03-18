import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./css/globals.css";
import { Providers } from "./Providers";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import ThemeSwitch from "@/components/ThemeSwitch/ColorModeSwitcher";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Josh Folsom",
  description: "Personal Website for Josh Folsom"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body className={inter.className}>
        <Providers>
          <div className="page-container">
            <Navbar />
            <ThemeSwitch />
            <main className="content-container">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
