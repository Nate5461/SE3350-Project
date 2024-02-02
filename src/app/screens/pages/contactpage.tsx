import React from "react";
import "./style.css";
import Image from "next/image";
import Link from 'next/link';


export const ContactPage = (): JSX.Element => {
    return (
        <div className="page" style={{backgroundColor: `red`}}>
            <div className="top-bar">
                <Image
                    src="/OLLI.png"
                    width={50}
                    height={50}
                    alt="logo"
                />
                <div className="title">Cheer</div>
                <div className="navigation">
                <Link href="/"> {/* Use Link here */}
            <div className="tab">Home</div> {/* Make sure to use an <a> tag */}
        </Link>
        <Link href="/services"> {/* Use Link here */}
            <div className="tab">Services</div> {/* Make sure to use an <a> tag */}
        </Link>

        <Link href="/aboutus"> {/* Use Link here */}
            <div className="tab">About Us</div> {/* Make sure to use an <a> tag */}
        </Link>

        <Link href="/contact"> {/* Use Link here */}
            <div className="tab">Contact</div> {/* Make sure to use an <a> tag */}
        </Link>
                </div>
            </div>

           
        </div>
    );
};