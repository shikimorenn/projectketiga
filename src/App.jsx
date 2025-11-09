import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Section from "./components/Section";
import Card from "./components/Card";
import LenganPendek from "./pages/LenganPendek";
import Sweater from "./pages/Sweater";
import Tentang from "./pages/Tentang";
import Kontak from "./pages/Kontak";
import baju from "./assets/baju.jpg";
import baju2 from "./assets/baju2.jpg";
import baju3 from "./assets/baju3.jpg";
import baju4 from "./assets/baju4.jpg";
import baju5 from "./assets/baju5.jpg";
import baju6 from "./assets/baju6.jpg";

function Home() {
  const products = [
    {
      id: 1,
      image: baju,
      title: "UNISEX - L",
      size: "L",
      brand: "SPRM - Motion Logo tee Royal Blue",
      price: "Rp. 265.000",
    },
    {
      id: 2,
      image: baju2,
      title: "UNISEX - L",
      size: "L",
      brand: "PLR - Blue Polar",
      price: "Rp. 300.000",
    },
    {
      id: 3,
      image: baju3,
      title: "UNISEX - L",
      size: "L",
      brand: "STUSSY - Alton Stripe T-Shirt",
      price: "Rp. 200.000",
    },
    {
      id: 4,
      image: baju4,
      title: "UNISEX - XL",
      size: "XL",
      brand: "SPRM - Shrek T-Shirt",
      price: "Rp. 235.000",
    },
    {
      id: 5,
      image: baju5,
      title: "UNISEX - L",
      size: "L",
      brand: "PLRS x Joy Division - Broken In T-Shirt",
      price: "Rp. 345.000",
    },
    {
      id: 6,
      image: baju6,
      title: "UNISEX - XL",
      size: "XL",
      brand: "STUSSY - Stripe T-Shirt",
      price: "Rp. 215.000",
    },
  ];

  return (
    <>
      <Section />
      <HeroSection />
      <section className="max-w-6xl mx-auto mt-10">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
          {products.map((product) => (
            <Card key={product.id} {...product} />
          ))}
        </div>
      </section>
    </>
  );
}

export default function App() {
  return (
    <div className="bg-gray-50 pt-16">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lenganpendek" element={<LenganPendek />} />
        <Route path="/about" element={<Tentang />} />
        <Route path="/contact" element={<Kontak />} />
        <Route path="/sweater" element={<Sweater />} />
      </Routes>
      <Footer />
    </div>
  );
}
