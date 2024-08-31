import React from "react";
import { statistics, personalities } from "../constants";
import PersonalityCard from "../components/PersonalityCard";
import openness from "../assets/openness.png";

export const Hero = () => {
  const [bigImage, setBigImage] = React.useState(openness);
  return (
    <section
      className="w-full flex
    xl:flex-row flex-col
    justify-center max-container
    min-h-screen gap-10)"
    >
      <div
        className="relative w-full flex-col xl:w-2/5
      justify-center items-start max-xl:padding-x
      pt-28 pl-10"
      >
        <h1>Discover Your Personality</h1>
        <p>Find out what makes you, you.</p>
        <div
          className="flex flex-wrap gap-5
            items-start w-full mt-20 justify-start"
        >
          {statistics.map((item) => (
            <div>
              <p
                className="text-xl font-palanquin
              font-bold"
              >
                {item.title}
              </p>
              <p
                lassName="leading-7 font-montserrat
              text-slate-gray"
              >
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* Right side */}
      <div
        className="flex-1 flex justify-center
      items-center xl:min-h-screen max-xl:py-40
      bg-slate-800 bg-cover bg-center relative"
      >
        {/* big Image */}
        <img
          src={bigImage}
          alt="personality"
          width={600}
          height={500}
          className="object-contain relative z-10"
        />
        <div
          className="flex absolute
        -bottom-[25%] gap-4 sm:gap-6
        sm:left-[10%] max-sm:px-6"
        >
          {/* small Image Cards
          {personalities.map((item) => (
            <div key={item.title}>
              <PersonalityCard
                imgURL={item}
                changeBigImage={(item) => setBigImage(item)}
                bigImage={bigImage}
              />
            </div>
          ))} */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
