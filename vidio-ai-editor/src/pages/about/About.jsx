// src/components/home/Home.jsx
import React, { useState, useRef } from "react";
import "./About.css";
import { FaArrowRightLong } from "react-icons/fa6";
import image1 from "../../assets/image1.png"; // Adjust the path as necessary
import image2 from "../../assets/image2.png"; // Adjust the path as necessary
import image3 from "../../assets/image3.png"; // Adjust the path as necessary
import { ShimmerFeaturedGallery } from "react-shimmer-effects";


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
        "📉 73% of consumers prefer short-form videos to learn about products.",
        "🎬 91.8% of internet users watch videos weekly.",
        "📱 65% of total video views are short-form.",
        "🎬 67% of content creators struggle to repurpose long-form content efficiently.",
        "📲 Short-form videos generate 2.5x more engagement than long-form.",
        "📉 TikTok & Instagram Reels drive 60%+ of social video engagement.",
        "📲 Avg. user spends 1 hr 16 min/day on short-form video.",
        "📉 TikTok posts receive 73.7% more comments than Instagram Reels.",
        "🎬 31% of marketers say short-form videos deliver highest ROI.",
        "📉 Short-form video ads projected to surpass $99.4B in 2025.",
        "🎬 Videos under 90 seconds retain 50% of viewers.",
        "📲 60% of marketers say repurposed content generates more leads."
    ];

    const hyperlinks = [
        "https://www.yaguara.co/short-form-video-statistics/",
        "https://www.oberlo.com/statistics/online-video-consumption-statistics",
        "https://techjury.net/industry-analysis/video-consumption-statistics/",
        "https://blog.docswrite.com/statistics-about-content-repurposing",
        "https://firework.com/blog/short-form-video-statistics",
        "https://vidico.com/news/short-form-video-statistics/",
        "https://simplebeen.com/short-form-video-statistics/",
        "https://socialinsider.io/blog/tiktok-vs-instagram-reels-statistics/",
        "https://www.hubspot.com/",
        "https://vidico.com/news/short-form-video-statistics/",
        "https://firework.com/blog/short-form-video-statistics",
        "https://blog.docswrite.com/statistics-about-content-repurposing"
    ]

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
                                            <a href={hyperlinks[index]} target="_blank" rel="noopener noreferrer">Learn More</a>
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
