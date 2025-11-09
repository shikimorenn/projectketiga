import React from "react";
import BannerImage from "../assets/Banner.jpg";
import ImageSweeter from "../assets/sweeter.jpg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section id="product" className="w-full grid grid-cols-1 md:grid-cols-2">
      <div className="relative h-[250px] sm:h-[350px] md:h-[500px] cursor-pointer group">
        <Link to="/lenganpendek">
          <img
            src={BannerImage}
            alt="bannerimage"
            className="w-full h-full object-cover group-hover:brightness-75 transition-all"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-all">
            <h2 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg group-hover:scale-105 transition-transform">
              LENGAN PENDEK
            </h2>
          </div>
        </Link>
      </div>
      <div className="relative h-[250px] sm:h-[350px] md:h-[500px] cursor-pointer group">
        <Link to="/sweater">
          <img
            src={ImageSweeter}
            alt="sweaterimage"
            className="w-full h-full object-cover group-hover:brightness-75 transition-all"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-all">
            <h2 className="text-white text-2xl sm:text-3xl md:text-5xl font-bold drop-shadow-lg group-hover:scale-105 transition-transform">
              HOODIE
            </h2>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
