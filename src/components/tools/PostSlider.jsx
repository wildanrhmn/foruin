import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import VideoPlayer from "./VideoPlayer";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../styles/ImageSlider.css";

// import required modules
import { Pagination, Navigation } from "swiper";
const ImageSlider = ({ imageSrc }) => {
  // const filterVideo = imageSrc.filter((item) => item.url.endsWith(".mp4"));
  // const filterImage = imageSrc.filter((item) => !item.url.endsWith(".mp4"));

  return (
    <div className="img-slider">
      <div className="layout">
        <Swiper
          slidesPerView={1}
          grabCursor={true}
          spaceBetween={30}
          loop={true}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {imageSrc &&
            imageSrc
              .filter((item) => !item.url.endsWith('.mp4'))
              .map((item) => (
                <SwiperSlide key={item.public_id}>
                  <img src={item.url} alt="pict-slider" />
                </SwiperSlide>
              ))}
          {imageSrc &&
            imageSrc
              .filter((item) => item.url.endsWith('.mp4'))
              .map((item) => (
                <SwiperSlide key={item.public_id}>
                  <VideoPlayer url={item.url} />
                </SwiperSlide>
              ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ImageSlider;
