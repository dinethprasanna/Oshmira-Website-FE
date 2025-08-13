// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import Aos from 'aos';
import 'aos/dist/aos.css';

const clientLogoImages = [
    '/pages/home/brands-logo/virelia.png',
    '/pages/home/brands-logo/tour-lions.png',
    '/pages/home/brands-logo/asiacorp.png',
    '/pages/home/brands-logo/phoenix.png',
    '/pages/home/brands-logo/crossbridge.png',
    '/pages/home/brands-logo/kids-and-teens-medical-group.png',
    '/pages/home/brands-logo/angis-property-services.png',
    '/pages/home/brands-logo/kadamandiya.png',
    '/pages/home/brands-logo/healthylife-clinic.png',
    '/pages/home/brands-logo/global-trans-logistics.png',
    '/pages/home/brands-logo/dels-super.png',
    '/pages/home/brands-logo/st-joshep-hospital.png',
];

function OurClientsLogoSlider() {
    Aos.init({duration:1000});
    return (
        <section className="our-clients-logo-slider relative w-full max-w-(--max-width) mx-auto px-3 md:px-6 lg:px-4 py-8 md:py-16 lg:py-24" data-aos="fade-up">
            <div className="testimonial-label label-border-animation py-2 px-2 rounded-md bg-(--bg-second-col) block mb-6 max-w-fit min-w-[150px] md:min-w-[186px] mx-auto" data-aos="zoom-in">
                <p className="font-inter-semibold text-white text-xs text-center">
                    Brands We Work With
                </p>
            </div>
            <h2 className="text-white text-center font-inter-semibold text-2xl md:text-3xl lg:text-4xl mb-3">Our <span className='gradient-text-anime'>Clients</span></h2>
            <p className='text-base md:text-lg font-inter-light text-white text-center max-w-[640px] mx-auto mb-6' >We’re proud to work with brands that value quality and creativity. Here are some of the clients we’ve partnered with over the years.</p>

            <div className="our-clients-logo-slider-wrapper max-w-[820px] mx-auto  px-2 rounded-2xl">
                <Swiper
                    slidesPerView={3}
                    loop={true}
                    centeredSlides={true}
                    spaceBetween={24}
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
                        768: { slidesPerView: 4 },
                        1024: { slidesPerView: 5 },
                    }}
                    className='!py-2'
                >
                    {clientLogoImages.map((src, index) => (
                        <SwiperSlide key={index}>
                            <div className="img-card overflow-hidden rounded-md singleCard">
                                <img
                                    src={src}
                                    alt={`logo-${index}`}
                                    width="64"
                                    className="w-full"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

export default OurClientsLogoSlider;
