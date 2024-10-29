import { Swiper, SwiperSlide } from "swiper/react";
import "./Swipers.css";

function Swipers() {
  return (
    <section>
      <div className="Swiper-container">
        <div className="Swiper-slider">
          <Swiper slidesPerView={5} spaceBetween={10} className="mySwiper">
            <SwiperSlide className="slide-title first-slide">
              <span className="title1-span1">GOLDEN</span>
              <span className="title1-span2">GOLDEN</span>
            </SwiperSlide>
            <SwiperSlide className="slide-title">
              <span className="title2-span1">ICE CREAM BAR</span>
              <span className="title2-span2">CHIPPY'S</span>
            </SwiperSlide>
            <SwiperSlide className="slide-title">
              <span className="title3-span1">DESIGNLOVERS</span>
              <span className="title3-span2">GEEKHEAVEN</span>
            </SwiperSlide>
            <SwiperSlide className="slide-title">
              <span className="title4-span1">GOLDENGRID</span>
            </SwiperSlide>
            <SwiperSlide className="slide-title last-slide">
              <span className="title5-span1">SWEETY</span>
              <span className="title5-span2">CAFETERIA</span>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Swipers;
