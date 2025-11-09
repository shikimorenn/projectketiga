import React from "react";
import Card from "../components/Card";
import baju from "../assets/baju.jpg";
import baju2 from "../assets/baju2.jpg";
import baju3 from "../assets/baju3.jpg";
import baju4 from "../assets/baju4.jpg";
import baju5 from "../assets/baju5.jpg";
import baju6 from "../assets/baju6.jpg";

const LenganPendek = () => {
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
    <div className="max-w-6xl mx-auto mt-24 mb-10">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Koleksi Lengan Pendek
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {products.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default LenganPendek;
