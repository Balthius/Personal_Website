import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./css/globals.css";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

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
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body className={inter.className}>
        <div className="page-container">
          <Navbar />
          <main className="content-container">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
