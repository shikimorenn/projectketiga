import React from "react";
import bannerlogo from "../assets/bannerlogo.jpg";
import founder from "../assets/founder.jpg";

const Tentang = () => {
  return (
    <>
      <div className="mt-5">
        <section className="flex justify-center bg-white py-6">
          <img
            src={bannerlogo}
            alt="Worlld Market Logo"
            className="w-full max-w-3xl object-contain"
          />
        </section>
        <section className=" py-10 px-6 md:px-12 flex flex-col md:flex-row items-center justify-center gap-8 max-w-6xl mx-auto rounded-lg">
          <div className="flex-shrink-0">
            <img
              src={founder}
              alt="Founder Worlld Market"
              className="rounded-lg shadow-md w-[250px] md:w-[300px] object-cover"
            />
          </div>

          <div className="text-gray-800 leading-relaxed max-w-xl">
            <p className="text-justify text-sm sm:text-base md:text-lg">
              <strong>Worlld Market</strong> berdiri pada tahun 2022 yang dimana
              saat itu masih terjadi pandemi Covid-19. Awalnya didirikan oleh
              dua orang bernama <strong>Farhan</strong> dan{" "}
              <strong>Iqbal</strong>, namun karena satu dan dua hal, sekarang{" "}
              <strong>Worlld Market</strong> hanya dijalankan oleh Farhan
              sendiri.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Tentang;
