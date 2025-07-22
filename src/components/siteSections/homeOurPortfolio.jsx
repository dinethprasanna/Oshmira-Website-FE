import PortfolioCard from './portfolioCard';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Autoplay, Navigation } from 'swiper/modules';
import { Link } from 'react-router';
import { Button } from '../ui/button';
import Aos from 'aos';
import 'aos/dist/aos.css';

const portfolioCards = [
    {
        portfolioName: "Veronisa Tour (Pvt)Ltd",
        portfolioUrl: "Veronisatours.lk",
        portfolioImg: "./pages/home/portfolio/site-1.png"
    },
    {
        portfolioName: "Veronisa Tour (Pvt)Ltd",
        portfolioUrl: "Veronisatours.lk",
        portfolioImg: "./pages/home/portfolio/site-2.png"
    },
    {
        portfolioName: "Veronisa Tour (Pvt)Ltd",
        portfolioUrl: "Veronisatours.lk",
        portfolioImg: "./pages/home/portfolio/site-3.png"
    },
    {
        portfolioName: "Veronisa Tour (Pvt)Ltd",
        portfolioUrl: "Veronisatours.lk",
        portfolioImg: "./pages/home/portfolio/site-4.png"
    },
    {
        portfolioName: "Veronisa Tour (Pvt)Ltd",
        portfolioUrl: "Veronisatours.lk",
        portfolioImg: "./pages/home/portfolio/site-5.png"
    },
];


function HomeOurPortfolio() {
    Aos.init({duration:2000});
    return (
        <section className="home-our-portfolio-section relative w-full max-w-(--max-width) mx-auto px-3 md:px-6 lg:px-4 py-8 md:py-16 lg:py-24">
            <div className="our-portfolio-label label-border-animation py-2 px-2 rounded-md bg-(--bg-second-col) block mb-6 max-w-fit min-w-[120px] md:min-w-[186px] mx-auto" data-aos="zoom-in">
                <p className="font-inter-semibold text-white text-xs text-center">
                    Built to Impress
                </p>
            </div>
            <h2 className="text-white text-center font-inter-semibold text-2xl md:text-3xl lg:text-4xl mb-3" data-aos="fade-up">Our <span className='gradient-text-anime'>Portfolio</span></h2>
            <p className='text-base md:text-lg font-inter-thin text-white text-center max-w-[820px] mx-auto mb-6' data-aos="fade-up">Every pixel tells a story. Our work showcases a blend of strategy, creativity, and craft built not just to look good, but to deliver real results. Explore how we turn ideas into stunning digital experiences.</p>

            <div className="portfolio-slider flex flex-wrap justify-center mt-4 md:mt-5 lg:mt-6" data-aos="fade-up">
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
                        nextEl: '.bottom-portfolio .swiper-next',
                        prevEl: '.bottom-portfolio .swiper-prev',
                    }}
                    className="!py-2"
                >
                    {portfolioCards.map((item, index) => (
                        <SwiperSlide
                            key={index}
                            className="!w-[300px] md:!w-[340px] lg:!w-[400px]" // Adjust width per card
                        >
                            <PortfolioCard
                                portfolioName={item.portfolioName}
                                portfolioUrl={item.portfolioUrl}
                                portfolioImg={item.portfolioImg}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
            <div className="bottom-portfolio flex flex-row justify-between items-center gap-3" data-aos="fade-up">
                <div className="slide-nav-btns flex flex-row gap-4">
                    <button className="swiper-prev text-white cursor-pointer p-3 md:p-4 rounded-lg bg-(--bg-second-col) transition-all hover:bg-[#2a2a2a]"
                        style={{
                            boxShadow: 'inset -3px 3px 2px -2px rgba(255, 255, 255, 0.4)',
                        }}>
                        <img src="./icons/prev-arrow.png" alt="Previous" />
                    </button>
                    <button className="swiper-next text-white cursor-pointer p-3 md:p-4 rounded-lg bg-(--bg-second-col) transition-all hover:bg-[#2a2a2a]"
                        style={{
                            boxShadow: 'rgba(255, 255, 255, 0.4) 3px 3px 2px -2px inset',
                        }}>
                        <img src="./icons/next-arrow.png" alt="Next" />
                    </button>
                </div>
                <div className="see-more bottom-link flex justify-center">
                    <Link to={'/'}><Button variant="link" className="font-inter-semibold transition-colors hover:text-orange-500">View More <img src="./icons/right-white-arrow.png" alt="Arrow" /></Button></Link>
                </div>
            </div>
        </section>
    )
}

export default HomeOurPortfolio;