// src/components/home/Home.jsx
import React, { useEffect } from "react";
import "./Home.css";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoNotificationsCircle } from "react-icons/io5";
import { BsCursorFill } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import video1 from "../../assets/video1.mov"; // Adjust the path as necessary
import video2 from "../../assets/video1.mov"; // Adjust the path as necessary
import video3 from "../../assets/video3.mp4"; // Adjust the path as necessary
import video4 from "../../assets/video4.mp4"; // Adjust the path as necessary
import video5 from "../../assets/video5.mp4"; // Adjust the path as necessary
import video6 from "../../assets/video6.mp4"; // Adjust the path as necessary
import video7 from "../../assets/video7.mp4"; // Adjust the path as necessary
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";



const Home = () => {


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

    // Function to play video on hover
    const playVideo = (event) => {
        event.target.play();
    };

    const pauseVideo = (event) => {
        event.target.pause();
    };

    return (

        <section className="home">
            <div className="container-1">
                <div className="home-content">
                    <div className="home-info">
                        <div className="line1-flex">
                            <div className="rectangle1">
                                <BsCursorFill className="icon1" />
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
                                <IoNotificationsCircle className="icon2" />
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
                        <div class="design-item item1">
                            <video src={video1} alt="1" muted loop onMouseOver={playVideo} onMouseOut={pauseVideo}>
                                <a href="https://www.vecteezy.com/free-videos/nature">Nature Stock Videos by Vecteezy</a>
                            </video>
                        </div>
                        <div class="design-item item2">
                            <video src={video2} alt="2" muted loop onMouseOver={playVideo} onMouseOut={pauseVideo}>
                                <a href="https://www.vecteezy.com/free-videos/nature">Nature Stock Videos by Vecteezy</a>
                            </video>
                        </div>
                        <div class="design-item item3">
                            <video src={video3} alt="3" muted loop onMouseOver={playVideo} onMouseOut={pauseVideo}>
                                <a href="https://www.vecteezy.com/free-videos/nature">Nature Stock Videos by Vecteezy</a>
                            </video>
                        </div>
                        <div class="design-item item4">
                            <video src={video4} alt="4" muted loop onMouseOver={playVideo} onMouseOut={pauseVideo}>
                                <a href="https://www.vecteezy.com/free-videos/nature">Nature Stock Videos by Vecteezy</a>
                            </video>
                        </div>
                        <div class="design-item item5">
                            <video src={video5} alt="5" muted loop onMouseOver={playVideo} onMouseOut={pauseVideo}>
                                <a href="https://www.vecteezy.com/free-videos/nature">Nature Stock Videos by Vecteezy</a>
                            </video>
                        </div>
                        <div class="design-item item6">
                            <video src={video6} alt="6" muted loop onMouseOver={playVideo} onMouseOut={pauseVideo}>
                                <a href="https://www.vecteezy.com/free-videos/nature">Nature Stock Videos by Vecteezy</a>
                            </video>
                        </div>
                        <div class="design-item item7">
                            <video src={video7} alt="7" muted loop onMouseOver={playVideo} onMouseOut={pauseVideo}>
                                <a href="https://www.vecteezy.com/free-videos/nature">Nature Stock Videos by Vecteezy</a>
                            </video>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
