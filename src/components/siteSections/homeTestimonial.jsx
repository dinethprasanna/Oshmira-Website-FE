import TestimonialCard from './testimonialCard';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

const testimonials = [
    {
        clientName: "Sarah Thompson",
        designation: "Marketing Lead",
        clientReview: "Working with this team has been a game-changer. Their attention to detail and passion truly show.",
        clientImg: "/pages/home/testimonial/sample-client-profile.png"
    },
    {
        clientName: "James Warner",
        designation: "Product Manager",
        clientReview: "Top-notch service and constant support. I’m genuinely impressed!",
        clientImg: "/pages/home/testimonial/sample-client-profile.png"
    },
    {
        clientName: "Emily Tran",
        designation: "UX Designer",
        clientReview: "Their creative approach and quick turnarounds exceeded my expectations.",
        clientImg: "/pages/home/testimonial/sample-client-profile.png"
    },
    {
        clientName: "David Kim",
        designation: "CTO",
        clientReview: "We’ve collaborated on multiple projects and they always deliver beyond expectations.",
        clientImg: "/pages/home/testimonial/sample-client-profile.png"
    },
    {
        clientName: "Priya Desai",
        designation: "Business Analyst",
        clientReview: "Excellent communication and dedication throughout. Truly recommended!",
        clientImg: "/pages/home/testimonial/sample-client-profile.png"
    },
    {
        clientName: "Liam Gallagher",
        designation: "Founder, TechNova",
        clientReview: "Their team feels like an extension of ours. Great chemistry and output.",
        clientImg: "/pages/home/testimonial/sample-client-profile.png"
    }
];


function HomeTestimonial() {
    return (
        <section className="home-testimonial-section relative w-full max-w-(--max-width) mx-auto px-3 md:px-6 lg:px-4 py-8 md:py-16 lg:py-24">
            <div className="testimonial-label label-border-animation py-2 px-2 rounded-md bg-(--bg-second-col) block mb-6 max-w-fit min-w-[120px] md:min-w-[186px] mx-auto">
                <p className="font-inter-semibold text-white text-xs text-center">
                    Our Testimonial
                </p>
            </div>
            <h2 className="text-white text-center font-inter-semibold text-2xl md:text-3xl lg:text-4xl mb-3">What Our <span className='gradient-text-anime'>Client</span> Say</h2>
            <p className='text-base md:text-lg font-inter-thin text-white text-center max-w-[760px] mx-auto mb-6'>Our clients are the heartbeat of everything we do. Their stories inspire us, their trust drives us, and their feedback fuels our growth. Here’s what they have to say about working with us.</p>

            <div className="testimonial-slider flex flex-wrap justify-center mt-6 md:mt-8 lg:mt-10">
                {/* Swiper Slider */}
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={16}
                    freeMode={true}
                    loop={true}
                    slidesPerView={'auto'}
                    grabCursor={true}
                    breakpoints={{
                        541: {
                            spaceBetween: 32,
                        },
                        821: {
                            spaceBetween: 42,
                        },
                    }}
                    navigation={{
                        nextEl: '.testimonial-navs .swiper-next',
                        prevEl: '.testimonial-navs .swiper-prev',
                    }}
                    className="!py-6"
                >
                    {testimonials.map((item, index) => (
                        <SwiperSlide
                            key={index}
                            className="!w-[300px] md:!w-[340px] lg:!w-[400px]" // Adjust width per card
                        >
                            <TestimonialCard
                                clientName={item.clientName}
                                designation={item.designation}
                                clientReview={item.clientReview}
                                clientImg={item.clientImg}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
            <div className="slide-nav-btns testimonial-navs flex flex-row gap-4">
                <button className="swiper-prev text-white cursor-pointer p-3 md:p-4 rounded-lg bg-(--bg-second-col) transition-all hover:bg-[#2a2a2a]"
                    style={{
                        boxShadow: 'inset -3px 3px 2px -2px rgba(255, 255, 255, 0.4)',
                    }}>
                    <img src="/icons/prev-arrow.png" alt="Previous" />
                </button>
                <button className="swiper-next text-white cursor-pointer p-3 md:p-4 rounded-lg bg-(--bg-second-col) transition-all hover:bg-[#2a2a2a]"
                    style={{
                        boxShadow: 'rgba(255, 255, 255, 0.4) 3px 3px 2px -2px inset',
                    }}>
                    <img src="/icons/next-arrow.png" alt="Next" />
                </button>
            </div>
        </section>
    )
}

export default HomeTestimonial;