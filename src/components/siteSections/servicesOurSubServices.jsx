import { Link } from "react-router";
import { Button } from "../ui/button";
import SingleCard from "./singleCard";
import Aos from 'aos';
import 'aos/dist/aos.css';


const cardData = [
    {
        image: '/icons/branding.png',
        title: 'Branding',
        description: 'From logo design to complete brand identity, we help you make a strong first impression and build lasting recognition.',
    },
    {
        image: '/icons/social-media-marketing.png',
        title: 'Social Media Marketing',
        description: 'We create eye-catching content and targeted campaigns to grow your online presence and boost engagement.',
    },
    {
        image: '/icons/tv-commercials.png',
        title: 'TV Commercials',
        description: 'We produce creative, high-quality ads that captivate audiences and strengthen brand recall on mainstream media.',
    },
    {
        image: '/icons/videography.png',
        title: 'Videography',
        description: 'We craft compelling visuals - from corporate videos to promos- bringing your brand’s story to life with precision.',
    },
    {
        image: '/icons/audiography.png',
        title: 'Audiography',
        description: 'We craft immersive audio experiences - perfect for advertisements, podcasts, jingles, and voiceovers that leave a lasting impact.',
    },
];

function ServicesOurSubServices() {
    Aos.init({duration:2000});
    return (
        <section className="services-our-services relative w-full max-w-(--max-width) mx-auto px-3 md:px-6 lg:px-4 py-8 md:py-16 lg:py-24">
            
            <h2 className="text-white text-center font-inter-semibold text-2xl md:text-3xl lg:text-4xl mb-3" data-aos="fade-up">Sub Services</h2>
            
            <div className="our-services-cards flex flex-wrap justify-center gap-4 lg:gap-y-[48px] lg:gap-x-[64px] mt-6 md:mt-12 lg:mt-16" data-aos="fade-up">
                {cardData.map((card, index) => (
                    <div
                        key={index}
                        className="w-full sm:w-[48%] lg:w-[29%] max-w-[396px] block"
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

export default ServicesOurSubServices;