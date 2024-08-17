import React from "react";

const Button = ({ label, iconURL }) => {
  return (
    <button
      className="flex justify-center bg-coral-red 
    px-7 py-4 border gap-2
    leading-none items-center
    rounded-full font-montserrat 
    text-white text-lg border-coral-red"
    >
      {label}
      <img
        src={iconURL}
        className="ml-2 rounded-full
      w-5 h-5"
      ></img>
    </button>
  );
};

export default Button;
