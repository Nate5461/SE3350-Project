import React from "react";
import Image from "next/image";
import "../globals.css";
import Link from "next/link";



export function pageLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body className="p1">{children}</body>
      </html>
    );
  }

export default function InfoLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>

        
            <div className="section" style={{ overflow: 'hidden' }}>
                <Image
                    className="blur contrast-50"
                    src="/OLLI.png"
                    fill={true}
                    alt='logo'
                    objectFit="cover"
                    style={{filter: "brightness(.30)"}}
                />
                <div className="container min-h-screen">

                    {children}

                </div>
            </div>
        </>
    );
}
