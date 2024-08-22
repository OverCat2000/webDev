import React from "react";

const PersonalityCard = ({ imgURL, changeBigImage, bigImage }) => {
  const handleClick = () => {
    if (bigImage !== imgURL.image) {
      changeBigImage(imgURL.image);
    }
  };
  return (
    <div
      className={`border-2 rounded-xl
    ${bigImage === imgURL.image ? `border-coral-red` : `border-transparent`}
    cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div
        className="flex justify-center
        items-center bg-gray-800
        bg-center bg-cover sm:w-40 sm:h-40
        rounded-xl max-sm:p-4"
      >
        <img
          src={imgURL.image}
          alt="personality"
          width={120}
          height={120}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default PersonalityCard;
