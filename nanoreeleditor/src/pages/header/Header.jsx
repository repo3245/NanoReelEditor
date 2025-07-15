import React, { useState } from "react";
import "./Header.css";
import image1 from "../../assets/website_logo_1.png"; // Adjust the path as necessary
import image2 from "../../assets/website_logo_2.png"; // Adjust the path as necessary

import { Link } from 'react-scroll';
import Modal from './Modal';

const Header = () => {
    const [showModal, setShowModal] = useState(false);



    return (

        <header className="header">
            <nav className="container-1">
                <div className="header-content">
                    <div className="header-nav">
                        <img
                            src={image2}
                            alt="Logo"
                        />
                        <h3 className="header-logo">Nano Reel Editor</h3>
                    </div>
                    <div className="header-container">
                        <ul className="header-links">
                            <li> <Link to="/"
                                spy={true}
                                smooth={true}
                                offset={-50}
                                duration={500}>Home</Link> </li>
                            <li> <Link
                                to="About"
                                spy={true}
                                smooth={true}
                                offset={-50}
                                duration={500}
                            >About</Link> </li>
                            <li><Link to="Features"
                                spy={true}
                                smooth={true}
                                offset={-50}
                                duration={500}> Features </Link></li>
                            <li><Link to="Footer"
                                spy={true}
                                smooth={true}
                                offset={-50}
                                duration={500}> Contact </Link></li>
                            <li className="signup-button"><button onClick={() => setShowModal(true)}>Sign&nbsp;Up</button>

                            </li>
                            <Modal className="signup-button" show={showModal} onClose={() => setShowModal(false)} >
                                <h2 className="modal-text-header">Nano Reel Editor
                                    <img src={image2}
                                        alt="Logo" className="modal-img"></img>
                                </h2>

                                <p>Sign up to gain access to Nano Reel Editor!</p>
                                <form onSubmit={(e) => {
                                    e.preventDefault();
                                    // Handle submission logic
                                }}>
                                    <input type="text" placeholder="Enter your name" required className="input" />
                                    <input type="email" placeholder="Enter your email" required className="input" />
                                    <button type="submit" className="inner-button1">Submit</button>
                                </form>
                            </Modal>
                        </ul>
                    </div>
                </div>
            </nav>
        </header >




    );
};

export default Header;