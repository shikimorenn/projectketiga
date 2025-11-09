import React from "react";
import bannerImage from "../assets/worldmarket.png";

const Section = () => {
  return (
    <section id="home" className="relative w-full">
      <img
        src={bannerImage}
        alt="banner"
        className="w-full h-[150px] sm:h-[300px] md:h-[400px] object-cover"
      />
      <div className="py-2 overflow-hidden bg-white">
        <div className="animate-marquee whitespace-nowrap">
          <span className="mx-6 text-sm sm:text-base md:text-lg font-semibold">
            WORLLD MARKET TEMPAT THRIFT NOMOR 1 DI VILA PERTIWI
          </span>
          <span className="mx-6 text-lg font-semibold">
            WORLLD MARKET TEMPAT THRIFT NOMOR 1 DI VILA PERTIWI
          </span>
          <span className="mx-6 text-lg font-semibold">
            WORLLD MARKET TEMPAT THRIFT NOMOR 1 DI VILA PERTIWI
          </span>
          <span className="mx-6 text-lg font-semibold">
            WORLLD MARKET TEMPAT THRIFT NOMOR 1 DI VILA PERTIWI
          </span>
        </div>
      </div>
    </section>
  );
};

export default Section;
