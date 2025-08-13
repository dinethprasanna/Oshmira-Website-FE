import TestimonialCard from './testimonialCard';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation, Autoplay } from 'swiper/modules';
import Aos from 'aos';
import 'aos/dist/aos.css';

const testimonials = [
    {
        clientName: "Sajith Bandara",
        designation: "Founder - GlobalTrans Logistics (Pvt) Ltd",
        clientReview: "We are extremely happy with the outstanding service provided by Oshmira Solutions (Pvt) Ltd. They developed our website with great attention to detail, creativity, and professionalism. The team was very responsive, easy to work with, and delivered everything on time.",
        clientImg: "/pages/home/testimonial/sajith-bandara.png"
    },
    {
        clientName: "Renee Carter",
        designation: "Owner - Carters Cleaning Company",
        clientReview: "I am very happy with how quickly i got my post and how good it is. I am sure i will now get more clients from this post. Thank you so much for taking time out and doing this for me.",
        clientImg: "/pages/home/testimonial/renee-carter.png"
    },
    {
        clientName: "Suhan Himash",
        designation: "Owner - TourLions (Pvt) ltd",
        clientReview: "I explained the design and flow I wanted for my Toursim website, and Oshmira Solutions brought it to life perfectly. They also created a unique business logo that truly reflects my brand. I’m extremely happy with their creativity, professionalism, and attention to detail.",
        clientImg: "/pages/home/testimonial/suhan-himash.png"
    },
    {
        clientName: "Prageeth Patabadige",
        designation: "Business Development Executive - CTK Cricketshop(Pvt)ltd",
        clientReview: "Ranto POS from Oshmira Solutions streamlined our store.easy inventory control, clear profit tracking, and no paper waste. Best software for our business!",
        clientImg: "/pages/home/testimonial/prageeth-patabadige.png"
    },
    {
        clientName: "Chamil Wijewardhana",
        designation: "Accountant - Mansalawa (Pvt)ltd",
        clientReview: "ZKME Tool has truly transformed some of our company’s processes by automating tasks that used to be manual. We now spend significantly less time on these tasks, which has greatly increased our efficiency. It has also made managing paper costs much easier for us.",
        clientImg: "/pages/home/testimonial/chamil-wijewardhana.png"
    },
    {
        clientName: "Raditha Angelo",
        designation: "Founder - Angis property Groups",
        clientReview: "I had the pleasure of working with Oshmira to build my website, and I couldn’t be happier with the results. From the very first conversation, their team was professional, attentive, and genuinely interested in understanding my vision.",
        clientImg: "/pages/home/testimonial/raditha-angelo.png"
    },
    {
        clientName: "Madhawa",
        designation: "Owner - Delssuper (Pvt) ltd",
        clientReview: "Oshmira developed our Del\'Super e-commerce website - clean, fully functional, and delivered in just a few days. Their team was professional, efficient, and paid great attention to detail. We truly appreciate their hard work and highly recommend their services!",
        clientImg: "/pages/home/testimonial/madhawa.png"
    }
];


function HomeTestimonial() {
    Aos.init({ duration: 1000 });
    return (
        <section className="home-testimonial-section relative w-full max-w-(--max-width) mx-auto px-3 md:px-6 lg:px-4 py-8 md:py-16 lg:py-24">
            <div className="testimonial-label label-border-animation py-2 px-2 rounded-md bg-(--bg-second-col) block mb-6 max-w-fit min-w-[120px] md:min-w-[186px] mx-auto" data-aos="zoom-in">
                <p className="font-inter-semibold text-white text-xs text-center">
                    Our Testimonial
                </p>
            </div>
            <h2 className="text-white text-center font-inter-semibold text-2xl md:text-3xl lg:text-4xl mb-3" data-aos="fade-up">What Our <span className='gradient-text-anime'>Client</span> Say</h2>
            <p className='text-base md:text-lg font-inter-light text-white text-center max-w-[760px] mx-auto mb-6' data-aos="fade-up">Their stories inspire us, their trust drives us, and their feedback fuels our growth. Here’s what they have to say about working with us.</p>

            <div className="testimonial-slider flex flex-wrap justify-center mt-6 md:mt-8 lg:mt-10" data-aos="fade-up">
                {/* Swiper Slider */}
                <Swiper
                    modules={[Autoplay, Navigation]}
                    spaceBetween={16}
                    freeMode={true}
                    loop={true}
                    slidesPerView={'auto'}
                    autoplay={{
                        delay: 2500,
                        pauseOnMouseEnter: true,
                    }}
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
            <div className="slide-nav-btns testimonial-navs flex flex-row gap-4" data-aos="fade-up">
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