// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const techLogoImages = [
  '../src/assets/icons/react-logo.png',
  '../src/assets/icons/figma-logo.png',
  '../src/assets/icons/tailwind-logo.png',
  '../src/assets/icons/php-logo.png',
  '../src/assets/icons/js-logo.png',
  '../src/assets/icons/angular-logo.png',
  '../src/assets/icons/flutter-logo.png',
  '../src/assets/icons/html-logo.png',
  '../src/assets/icons/js-logo.png',
  '../src/assets/icons/nodejs-logo.png',
  '../src/assets/icons/shopify-logo.png',
  '../src/assets/icons/xd-logo.png',
  '../src/assets/icons/next-js-logo.png',
  '../src/assets/icons/google-cloud-logo.png',
];

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
            delay: 1,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            stopOnLastSlide: false,
            waitForTransition: true,
          }}
          modules={[Autoplay]}
          breakpoints={{
            768: { slidesPerView: 5 },
            1024: { slidesPerView: 5 },
          }}
        >
          {techLogoImages.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="img-card">
                <img
                  src={src}
                  alt={`logo-${index}`}
                  width="64"
                  className="grayscale"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default TechLogoSlider;
