// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const techLogoImages = [
  '../../../public/icons/react-logo.png',
  '../../../public/icons/figma-logo.png',
  '../../../public/icons/tailwind-logo.png',
  '../../../public/icons/php-logo.png',
  '../../../public/icons/js-logo.png',
  '../../../public/icons/angular-logo.png',
  '../../../public/icons/flutter-logo.png',
  '../../../public/icons/html-logo.png',
  '../../../public/icons/js-logo.png',
  '../../../public/icons/nodejs-logo.png',
  '../../../public/icons/shopify-logo.png',
  '../../../public/icons/xd-logo.png',
  '../../../public/icons/next-js-logo.png',
  '../../../public/icons/google-cloud-logo.png',
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
