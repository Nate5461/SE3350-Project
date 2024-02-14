import type { Metadata } from "next";
import React from "react";
import Image from "next/image";
import Link from 'next/link';
import { Inter } from "next/font/google";
import "./globals.css";
import Button from "./button";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CHEER",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body className={`${inter.className} min-h-full`}>
        <div className="page min-h-full">
          <div className="top-bar">
            <Link href="/">
              <Image src="/OLLI.png"
                width={50}
                height={50}
                alt="logo"
              />


            </Link>
            <div className="title"><Link href="/">Cheer</Link></div>

            <div className="navigation">

              <Link href="/"> {/* Use Link here */}
                <div className="tab">Home</div> {/* Make sure to use an <a> tag */}
              </Link>
              <Link href="/info/services"> {/* Use Link here */}
                <div className="tab">Services</div> {/* Make sure to use an <a> tag */}
              </Link>

              <Link href="/info/aboutus"> {/* Use Link here */}
                <div className="tab">About Us</div> {/* Make sure to use an <a> tag */}
              </Link>

              <Link href="/info/contact"> {/* Use Link here */}
                <div className="tab">Contact</div> {/* Make sure to use an <a> tag */}
              </Link>

            </div>
          </div>

          {children}
        </div>

        
        <Button />
      </body>
    </html >
  );
}
