import React from "react";
import bannerlogo from "../assets/bannerlogo.jpg";
import { FaWhatsapp, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="mt-5">
      <section className="flex justify-center bg-white py-6">
        <img
          src={bannerlogo}
          alt="Worlld Market Logo"
          className="w-full max-w-3xl object-contain"
        />
      </section>
      <section className="max-w-6xl mx-auto bg-gray-100 py-10 px-6 md:px-12 rounded-lg shadow-md mt-10 text-gray-800">
        <h2 className="text-center text-2xl sm:text-3xl font-bold mb-8">
          HUBUNGI KAMI
        </h2>

        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-4 text-lg sm:text-xl">
            <FaWhatsapp className="text-green-600 text-3xl" />
            <span>0812-9900-4985</span>
          </div>
          <div className="flex items-center gap-4 text-lg sm:text-xl">
            <FaInstagram className="text-pink-600 text-3xl" />
            <span>@Worldmarket_</span>
          </div>
          <div className="flex items-center gap-4 text-lg sm:text-xl">
            <FaXTwitter className="text-black text-3xl" />
            <span>@Worldmarket_</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
