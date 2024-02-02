import React from "react";
import Image from "next/image";
import "../globals.css";

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
