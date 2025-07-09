// src/components/home/Home.jsx
import React, { useState, useRef } from "react";
import "./Footer.css";
import { IoLogoFacebook } from "react-icons/io5";
import { SiInstagram } from "react-icons/si";
import { RiTwitterXFill } from "react-icons/ri";



const Footer = () => {

    return (

        <section className="footer">
            <div className="container-1">
                <div className="footer-content">

                    <div className="rectangle3">
                        <div className="footer-info">
                            <h1 className="footer-title">
                                Contact Information
                            </h1>

                            <div className="contact-info">
                                <div className="communication-channel-title">
                                    Phone
                                </div>
                                <div>
                                    303-720-0000
                                </div>
                                <div className="communication-channel-title">
                                    Email
                                </div>
                                <div>
                                    alcalderabanalo@gmail.com
                                </div>
                                <div className="social-media-icons">
                                    <IoLogoFacebook />
                                    <SiInstagram />
                                    <RiTwitterXFill />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section >
    );
};

export default Footer;
