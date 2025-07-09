// src/components/home/Home.jsx
import React, { useState, useRef } from "react";
import "./About.css";
import { FaArrowRightLong } from "react-icons/fa6";
import image1 from "../../assets/image1.png"; // Adjust the path as necessary
import image2 from "../../assets/image2.png"; // Adjust the path as necessary
import image3 from "../../assets/image3.png"; // Adjust the path as necessary

const About = () => {
    const [activeVideo, setActiveVideo] = useState(null);
    const videoRefs = useRef([]);


    const playVideo = (event) => {
        event.target.play();
    };

    const pauseVideo = (event) => {
        event.target.pause();
    };

    const handlePlay = (index) => {
        setActiveVideo(index);
    };

    const handlePause = () => {
        setActiveVideo(null);
    };

    const images = [
        image3,
        image2,
        image1,
        image2,
        image1,
        image3,
        image1,
        image3,
        image2,
        image3,
        image2,
        image1
    ];

    const description = [
        "📉 80% of social media users prefer short-form videos over longer content.",
        "🎬 67% of content creators struggle to repurpose long-form content efficiently.",
        "📱 TikTok & Instagram Reels account for over 60% of social media video engagement in 2025.",
        "🎬 67% of content creators struggle to repurpose long-form content efficiently.",
        "📲 92% of internet users watch video content weekly, with short-form accounting for 65% of total views.",
        "📉 80% of social media users prefer short-form videos over longer content.",
        "📲 92% of internet users watch video content weekly, with short-form accounting for 65% of total views.",
        "📉 80% of social media users prefer short-form videos over longer content.",
        "🎬 67% of content creators struggle to repurpose long-form content efficiently.",
        "📉 80% of social media users prefer short-form videos over longer content.",
        "🎬 67% of content creators struggle to repurpose long-form content efficiently.",
        "📲 92% of internet users watch video content weekly, with short-form accounting for 65% of total views."
    ];

    const isValidVideoFormat = (src) => {
        const supportedFormats = ['.mov', '.mp4', '.webm', '.ogg'];
        return supportedFormats.some(format => src.toLowerCase().endsWith(format));
    };
    return (

        <section className="about">
            <div className="container-1">
                <div className="about-content">

                    <div className="about-info_grid">

                        {images.map((videoSrc, index) => (
                            <div key={index} className={`about-item about-item${index + 1}`}>

                                {isValidVideoFormat(videoSrc) ? (
                                    <video
                                        ref={ref => videoRefs.current[index] = ref}
                                        src={videoSrc}
                                        alt={`video-${index}`}
                                        muted
                                        loop
                                        onMouseOver={playVideo}
                                        onMouseOut={pauseVideo}
                                        onPlay={() => handlePlay(index)}
                                        onPause={handlePause} />
                                ) : (
                                    <div className={`about-item-tile${index + 1}`} id="tile" />
                                )}

                                <div className="grid-content">
                                    <div className={`about-item-description-container ${activeVideo === index ? 'fade-out' : ''}`}>
                                        <p className={`about-item-description about-item-description${index + 1} ${activeVideo === index ? 'fade-out' : ''}`}>
                                            {description[index] || `Description for video ${index + 1}`}
                                        </p>
                                    </div>

                                    <div className="fade-button-container">
                                        <div className={`fade-button fade-button${index + 1} ${activeVideo === index ? 'fade-out' : ''}`}>
                                            <p>Learn More</p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        ))}

                    </div>

                    <div className="about-info">
                        <div>
                            <h1 className="about_title">
                                About
                            </h1>
                        </div>

                        <div>
                            <p className="about-text">
                                Nano Reel Editor is an AI-powered media transformation platform designed to condense long-form videos, articles, and presentations into engaging, short-form content optimized for social media. Whether you're a creator, educator, journalist, or business professional, Nano Reel Editor helps you instantly extract the most valuable insights and format them for maximum impact on platforms like Instagram, TikTok, X, and LinkedIn.
                            </p>
                        </div>

                        <div className="button2">
                            <div className="button-read">
                                <FaArrowRightLong className="icon5" />
                            </div>
                            <p>
                                Read our Social Media Guide
                            </p>
                        </div>
                    </div >
                </div>
            </div>
        </section >
    );
};

export default About;
