import React from "react";
import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div
      className="flex flex-1 flex-col
        w-full max-sm:w-full"
    >
      <img src={imgURL} width={280} height={280}></img>
      <div className="mt-8 flex justify-start gap-3">
        <img src={star} alt="rating" width={24} height={24}></img>
        <p
          className="font-montserrat text-slate-gray 
        leading-normal text-xl"
        >
          4.5
        </p>
      </div>
      <h2
        className="leading-normal text-2xl
      font-palanquin font-semibold mt-2"
      >
        {name}
      </h2>
      <p
        className="mt-2 font-semibold
      font-montserrat leading-normal text-2xl
      text-coral-red"
      >
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
