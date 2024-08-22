import React from "react";
import { personalities } from "../constants";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PersonalityCard from "../components/PersonalityCard";

const Cards = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        {/* small Image Cards */}
        {personalities.map((item) => (
          <div key={item.title}>
            <PersonalityCard
              imgURL={item}
              //   changeBigImage={(item) => setBigImage(item)}
              //   bigImage={bigImage}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Cards;
