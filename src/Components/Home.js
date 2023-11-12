import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.webp";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import FadeInWhenVisible from "./FadeInWhenVisible";

const Home = () => {
  return (
    <FadeInWhenVisible>
      <div className="home-container">
        <Navbar />
        <div className="home-banner-container">
          <div className="home-bannerImage-container">
            <img src={BannerBackground} alt="" />
          </div>
          <div className="home-text-section">
            <h1 className="primary-heading">
              Get The Best In Play Organization
            </h1>
            <p className="primary-text">
              From two of the industries leading professional play organizers
            </p>
            <button className="secondary-button">
              Book Now <FiArrowRight />{" "}
            </button>
          </div>
          <div className="home-image-section">
            <img src={BannerImage} alt="" />
          </div>
        </div>
      </div>
    </FadeInWhenVisible>
  );
};

export default Home;
