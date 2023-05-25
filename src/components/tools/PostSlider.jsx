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
          {imageSrc?.map((item) => (
            <SwiperSlide>
            {item.url.endsWith(".mp4") ? (
                <VideoPlayer url={item.url} />
              ) : (
                <img src={item.url} alt="pict-slider" />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ImageSlider;
