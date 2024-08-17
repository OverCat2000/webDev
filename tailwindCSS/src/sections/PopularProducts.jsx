import React from "react";
import { products } from "../constants";
import PopularProductCard from "../components/PopularProductCard";

const PopularProducts = () => {
  return (
    <section id="product" className="max-container max-sm:mt-12">
      <div
        className="flex flex-col justify-start
      gap-5"
      >
        <h2
          className="text-4xl font-palanquin
        font-bold"
        >
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit
        </p>
      </div>
      <div
        className="grid lg:grid-cols-4 mt-16 
      md:grid-cols-3 sm:grid-cols-2
       grid-cols-1 sm:gap-4 gaap-14"
      >
        {products.map((item) => (
          <PopularProductCard key={item.name} {...item} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
