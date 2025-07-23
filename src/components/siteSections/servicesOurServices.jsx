import { Link } from "react-router";
import { Button } from "../ui/button";
import SingleCard from "./singleCard";
import Aos from 'aos';
import 'aos/dist/aos.css';


const cardData = [
    {
        image: '/icons/WebDevelopment.png',
        title: 'Web Development',
        description: 'Custom-built web solutions that streamline your operations, solve unique challenges, and fuel your growth.',
    },
    {
        image: '/icons/AppDevelopemnt.png',
        title: 'App Development',
        description: 'High-performance mobile apps for accelerate your business growth and delight your users.',
    },
    {
        image: '/icons/E-commerceSolutions.png',
        title: 'E-commerce Solutions',
        description: 'We build eCommerce platforms that showcase your products, convert visitors, and grow your brand.',
    },
    {
        image: '/icons/UIUXDesign.png',
        title: 'UI/UX Design',
        description: 'SWe create digital experiences that users love. Intuitive, engaging designs that turn first-time visitors into loyal customers.',
    },
    {
        image: '/icons/GraphicDesign.png',
        title: 'Graphic Design',
        description: 'From sleek vector designs to captivating 2D and 3D creations, we turn your vision into reality.',
    },
    {
        image: '/icons/WebsiteSEO.png',
        title: 'Website SEO',
        description: 'Enhancing website rankings and visibility through keyword strategies, content optimization, and technical SEO to drive organic traffic.',
    },
];

function ServicesOurServices() {
    Aos.init({duration:2000});
    return (
        <section className="services-our-services relative w-full max-w-(--max-width) mx-auto px-3 md:px-6 lg:px-4 py-8 md:py-16 lg:py-24">
            <div className="hero-label label-border-animation py-2 px-2 rounded-md bg-(--bg-second-col) block mb-6 max-w-fit min-w-[120px] md:min-w-[186px] mx-auto" data-aos="zoom-in">
                <p className="font-inter-semibold text-white text-xs text-center">
                    Services
                </p>
            </div>
            <h2 className="text-white text-center font-inter-semibold text-2xl md:text-3xl lg:text-4xl mb-3" data-aos="fade-up">Explore We offering for you</h2>
            
            <div className="our-services-cards flex flex-wrap justify-center gap-4 lg:gap-y-[54px] lg:gap-x-[86px] mt-6 md:mt-12 lg:mt-16" data-aos="fade-up">
                {cardData.map((card, index) => (
                    <div
                        key={index}
                        className="w-full sm:w-[48%] max-w-[396px] block"
                    >
                        <SingleCard
                            image={card.image}
                            title={card.title}
                            description={card.description}
                        />
                    </div>
                ))}
            </div>            
        </section>
    );
}

export default ServicesOurServices;