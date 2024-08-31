import React, { useState } from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { statistics, shoes } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const [bigShoeImage, setBigShoeImage] = useState(bigShoe1);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section
      id="home"
      className="w-full
    flex xl:flex-row flex-col
    justify-center max-container
    min-h-screen gap-10"
    >
      <div
        className="relative w-full flex flex-col xl:w-2/5
      justify-center items-start max-xl:padding-x pt-28 pl-10"
      >
        <p className="font-montserrat text-xl text-coral-red">
          Our Summer Collection
        </p>
        <h1
          className="font-palanquin text-8xl mt-10 
          max-sm:text-[50px] 
          max-sm:leading-[82px]
          font-bold xl:whitespace-nowrap z-10"
        >
          <span
            className="
          relative z-10 pr-10"
          >
            The New Arrival
          </span>
          <br />
          <span
            className="text-coral-red
          inline-block mt-3"
          >
            Nike
          </span>
          <span> Air Max 270</span>
        </h1>
        <p
          className="font-montserrat text-slate-gray
        text-lg leading-8 mt-6 mb-14
        sm:max-w-sm"
        >
          Light, comfortable, and stylish. The Nike Air Max 270 is the perfect
          summer shoe.
        </p>
        <Button label="Show me" iconURL={arrowRight} />
        <div className="flex flex-wrap gap-16 items-start w-full mt-20 justify-start">
          {statistics.map((item) => (
            <div key={item.label}>
              <p
                className="text-4xl font-palanquin
              font-bold"
              >
                {item.value}
              </p>
              <p
                className="leading-7 font-montserrat
              text-slate-gray"
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/*right side*/}

      <div
        className="flex-1 flex justify-center 
      items-center xl:min-h-screen
      max-xl:py-40 bg-primary bg-hero
      bg-cover bg-center relative"
      >
        <img
          src={bigShoeImage}
          alt="shoe"
          width={600}
          height={500}
          className="object-contain relative z-10"
        ></img>
        <div
          className="flex absolute
        -bottom-[10%] gap-4 sm:gap-6
        sm:left-[10%] max-sm:px-6"
        >
          <Slider {...settings}>
            {shoes.map((item) => (
              <div>
                <ShoeCard
                  imgURL={item}
                  changeBigShoeImage={(item) => setBigShoeImage(item)}
                  bigShoeImage={bigShoeImage}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Hero;
