import React from "react";
import "./style.css";
import Image from "next/image";


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
                    <div className="tab">Home</div>
                    <div className="tab">Services</div>
                    <div className="tab">Contact</div>
                    <div className="tab">About Us</div>
                </div>
            </div>

           
        </div>
    );
};