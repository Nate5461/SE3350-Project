import React from "react";
import Link from "next/link";
import Image from "next/image";
import "../globals.css";

export default function InfoLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>

            <div className="section" style={{ overflow: 'hidden'}}>
                <Image
                    className="blur contrast-50 object-cover"
                    src="/olli.png"
                    fill={true}
                    alt='logo'
                    style={{filter: "brightness(.30)"}}
                />
                <div className="container min-h-screen " style={{width: '100%'}}>

                    {children}

                </div>
            </div>
        </>
    );
}
