import React from "react";
import Card from "../components/Card";
import sweater from "../assets/sweater1.jpg";
import sweater1 from "../assets/sweater2.jpg";
import sweater2 from "../assets/sweater3.jpg";
import sweater3 from "../assets/sweater4.jpg";
import sweater4 from "../assets/sweater5.jpg";
import sweater5 from "../assets/sweater6.jpg";

const Sweater = () => {
  const products = [
    {
      id: 1,
      image: sweater,
      title: "UNISEX - L",
      brand: "Have A Good Time - Hoodie White and Blue",
      price: "Rp. 450.000",
    },
    {
      id: 2,
      image: sweater1,
      title: "UNISEX - M",
      brand: "CRHT - Red Carharrt",
      price: "Rp. 500.000",
    },
    {
      id: 3,
      image: sweater2,
      title: "UNISEX - L",
      brand: "Have A Good Time - Hoodie Brown and Red",
      price: "Rp. 475.000",
    },
    {
      id: 4,
      image: sweater3,
      title: "UNISEX - L",
      brand: "GAP - Brown GAP",
      price: "Rp. 350.000",
    },
    {
      id: 5,
      image: sweater4,
      title: "UNISEX - XL",
      brand: "Have A Good Time - Pinkies Hoodie",
      price: "Rp. 495.000",
    },
    {
      id: 6,
      image: sweater5,
      title: "UNISEX - XL",
      size: "XL",
      brand: "SPUSSY - Varsity",
      price: "Rp. 690.000",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto mt-24 mb-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Koleksi Hoodie</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {products.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Sweater;
