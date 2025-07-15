// src/components/home/Home.jsx
import React, { useState, useEffect, useRef } from "react";
import "./Home.css";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoNotificationsCircle } from "react-icons/io5";
import { BsCursorFill } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import video1 from "../../assets/video1.mov"; // Adjust the path as necessary
import video2 from "../../assets/video2.mov"; // Adjust the path as necessary
import video3 from "../../assets/video3.mp4"; // Adjust the path as necessary
import video4 from "../../assets/video4.mp4"; // Adjust the path as necessary
import video5 from "../../assets/video5.mp4"; // Adjust the path as necessary
import video6 from "../../assets/video6.mp4"; // Adjust the path as necessary
import video7 from "../../assets/video7.mp4"; // Adjust the path as necessary
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

import lottie from "lottie-web";
import BellIcon from "../../assets/system-solid-46-notification-bell-hover-bell.json";
import PlayIcon from "../../assets/system-solid-26-play-hover-play.json";

import { ShimmerThumbnail } from "react-shimmer-effects";
// <a href="https://lordicon.com/">Icons by Lordicon.com</a>


const Home = () => {

    const animationContainer1 = useRef(null);
    const animationContainer2 = useRef(null);

    useEffect(() => {
        const animationInstance = lottie.loadAnimation({
            container: animationContainer1.current,
            renderer: "svg",
            loop: false,
            autoplay: true,
            animationData: BellIcon,

        });

        return () => animationInstance.destroy(); // clean up on unmount
    }, []); // <-- empty array ensures it only runs once

    useEffect(() => {
        const animationInstance = lottie.loadAnimation({
            container: animationContainer2.current,
            renderer: "svg",
            loop: false,
            autoplay: true,
            animationData: PlayIcon,
        });

        return () => animationInstance.destroy(); // clean up on unmount
    }, []); // <-- empty array ensures it only runs once

    useEffect(() => {
        gsap.registerPlugin(SplitText);
        // split all elements with the class "split" into words and characters
        let split = SplitText.create(".title", { type: "lines" });

        // now animate the characters in a staggered fashion
        gsap.from(split.lines, {
            duration: 1.5,
            y: 100,         // animate from 100px below
            autoAlpha: 0,   // fade in from opacity: 0 and visibility: hidden
            skewY: 5,
            ease: "power4.out"
        });
    }, []);


    const [loading, setLoading] = useState(true);

    // Simulate loading (replace with actual logic if needed)
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    const playVideo = (e) => e.target.play();
    const pauseVideo = (e) => e.target.pause();


    return (

        <section className="home">
            <div className="container-1">
                <div className="home-content">
                    <div className="home-info">
                        <div className="line1-flex">
                            <div className="rectangle1">
                                <div className="icon1">
                                    <div
                                        ref={animationContainer2}
                                        style={{ width: "50px", height: "50px" }}

                                    />
                                </div>
                            </div>
                            <h1 className="title">
                                NANO
                            </h1>
                        </div>

                        <div className="line2-flex">
                            <h1 className="title">
                                REEL
                            </h1>
                            <div className="rectangle2">
                                {/* <IoNotificationsCircle className="icon2" /> */}
                                <div className="icon2">
                                    <div
                                        ref={animationContainer1}
                                        style={{ width: "45px", height: "45px" }}

                                    />
                                </div>
                            </div>
                        </div>

                        <div className="line3-flex">
                            <h1 className="title" id="editor-title">
                                EDITOR
                            </h1>
                        </div>

                        <div className="button">
                            <FaMagnifyingGlass className="icon3" />
                            <p>Search</p>
                            <FaArrowRightLong className="icon4" />
                        </div>
                    </div >

                    <div className="design-info_grid">
                        {loading ? (
                            [video1, video2, video3].map((vid, index) => (
                                <div key={index}>
                                    <ShimmerThumbnail height={675} width={317} />
                                </div>
                            ))
                        ) : (
                            [video1, video2, video3, video4, video5, video6, video7].map((vid, index) => (
                                <div className={`design-item item${index + 1}`} key={index}>
                                    <video
                                        src={vid}
                                        muted
                                        loop
                                        onMouseOver={playVideo}
                                        onMouseOut={pauseVideo}
                                        alt={`Video ${index + 1}`}
                                    />

                                </div>
                            ))
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Home;
