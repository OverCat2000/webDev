import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import AutoplayProgress from "../components/AutoplayProgress";
import Slide from "../components/Slide";
import { personalities } from "../constants";
import PersonalityCard from "../components/PersonalityCard";

const Slider = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      onAutoplayTimeLeft={onAutoplayTimeLeft}
      className="w-full h-full"
    >
      {/* <SwiperSlide>
        <Slide content="Slide 1" />
      </SwiperSlide>
      <SwiperSlide>
        <Slide content="Slide 2" />
      </SwiperSlide>
      <SwiperSlide>
        <Slide content="Slide 3" />
      </SwiperSlide>
      <SwiperSlide>
        <Slide content="Slide 4" />
      </SwiperSlide>
      <SwiperSlide>
        <Slide content="Slide 5" />
      </SwiperSlide>
      <SwiperSlide>
        <Slide content="Slide 6" />
      </SwiperSlide>
      <SwiperSlide>
        <Slide content="Slide 7" />
      </SwiperSlide>
      <SwiperSlide>
        <Slide content="Slide 8" />
      </SwiperSlide>
      <SwiperSlide>
        <Slide content="Slide 9" />
      </SwiperSlide> */}
      {personalities.map((item) => (
        <SwiperSlide key={item.title}>
          <div className="flex justify-center items-center bg-deep-blue text-xl h-full">
            <PersonalityCard
              imgURL={item}
              // Uncomment and use these props if needed
              // changeBigImage={(item) => setBigImage(item)}
              // bigImage={bigImage}
            />
          </div>
        </SwiperSlide>
      ))}
      <AutoplayProgress
        progressCircle={progressCircle}
        progressContent={progressContent}
      />
    </Swiper>
  );
};

export default Slider;
