import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import CrewDouglas from "./douglas/CrewDouglas";
import CrewMark from "./mark/CrewMark";
import CrewVictor from "./victor/CrewVictor";
import CrewAnousheh from "./anousheh/CrewAnousheh";

const Crew = () => {
  return (
    <section className="crew">
      <div className="crew__container container">
        <h3 className="crew__title">
          <span className="mini-title-num">02</span>
          <span className="mini-title">Meet your crew</span>
        </h3>

        <Swiper
          modules={[Autoplay]}
          autoplay={true}
          className="mySwiper"
          style={{
            "--swiper-pagination-color": "#FFF",
            "--swiper-pagination-bullet-inactive-color": "#979797",
          }}
        >
          <SwiperSlide>
            <CrewDouglas />
          </SwiperSlide>

          <SwiperSlide>
            <CrewMark />
          </SwiperSlide>

          <SwiperSlide>
            <CrewVictor />
          </SwiperSlide>

          <SwiperSlide>
            <CrewAnousheh />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Crew;
