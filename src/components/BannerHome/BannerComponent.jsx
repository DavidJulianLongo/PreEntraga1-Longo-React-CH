import './BannerComponent.css';
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; 

export const BannerComponent = () => {
    const images = [
        "/src/assets/img/banner_home/razr50ultra.webp",
        "/src/assets/img/banner_home/edgeultra.webp",
        "/src/assets/img/banner_home/edgepro.webp",
        "/src/assets/img/banner_home/g85.webp",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="banner-container">
            <button className="banner-button left" onClick={handlePrev}>
                <FaChevronLeft /> 
            </button>
            <img src={images[currentIndex]} alt="carousel" className="banner-image" />
            <button className="banner-button right" onClick={handleNext}>
                <FaChevronRight /> 
            </button>
        </div>
    );
};
