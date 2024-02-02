// ServicesPage.tsx

import React from "react";
import Image from "next/image";
import "./style.css"; // Import your stylesheet
import Link from "next/link";

export const ServicesPage = (): JSX.Element => {
  return (
    <div className="page">
      <div className="top-bar">
        <Image src="/OLLI.png" width={50} height={50} alt="logo" />
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
      <div className="section" style={{ overflow: 'hidden' }}>
        <Image src="/OLLI.png" fill={true} alt='logo' objectFit="cover" />
        <div className="container">
          <p className="text-wrapper" style={{ backgroundColor: "rgba(250,250,250,0.2)", color: '#000' }}>
            Services
          </p>
          <p className="description" style={{ backgroundColor: "rgba(250,250,250,0.2)", color: '#000' }}>
            
            
            PUT SERVICES TEXT HERE

            
          </p>
          
        </div>
      </div>
    </div>
  );
};
