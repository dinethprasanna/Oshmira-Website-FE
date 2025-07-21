// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import { Autoplay } from 'swiper/modules';

function TechLogoSlider() {
  return (
    <section className="tech-logo-slider w-full max-w-(--max-width) mx-auto">
      <div className="tech-logo-slider-wrapper max-w-[620px] mx-auto">
        <Swiper
          slidesPerView={5}
          loop={true}
          centeredSlides={true}
          spaceBetween={36}
          freeMode={true}
          speed={3000}
          autoplay={{
            delay: 1, disableOnInteraction: false,
            pauseOnMouseEnter: false,
            stopOnLastSlide: false,
            waitForTransition: true
          }}
          modules={[Autoplay]}
          breakpoints={{
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
        >
          <SwiperSlide>
            <div className="img-card">
              <img
                src="../src/assets/icons/react-logo.png"
                alt="sample"
                width="64px"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img-card">
              <img
                src="../src/assets/icons/figma-logo.png"
                alt="sample"
                width="64px"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img-card">
              <img
                src="../src/assets/icons/tailwind-logo.png"
                alt="sample"
                width="64px"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img-card">
              <img
                src="../src/assets/icons/php-logo.png"
                alt="sample"
                width="64px"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img-card">
              <img
                src="../src/assets/icons/js-logo.png"
                alt="sample"
                width="64px"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img-card">
              <img
                src="../src/assets/icons/angular-logo.png"
                alt="sample"
                width="64px"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img-card">
              <img
                src="../src/assets/icons/flutter-logo.png"
                alt="sample"
                width="64px"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img-card">
              <img
                src="../src/assets/icons/html-logo.png"
                alt="sample"
                width="64px"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img-card">
              <img
                src="../src/assets/icons/js-logo.png"
                alt="sample"
                width="64px"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img-card">
              <img
                src="../src/assets/icons/nodejs-logo.png"
                alt="sample"
                width="64px"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img-card">
              <img
                src="../src/assets/icons/shopify-logo.png"
                alt="sample"
                width="64px"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img-card">
              <img
                src="../src/assets/icons/xd-logo.png"
                alt="sample"
                width="64px"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );



}

export default TechLogoSlider;