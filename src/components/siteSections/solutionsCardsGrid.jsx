import { Link } from "react-router";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Button } from "../ui/button";


const cardData = [
    {
        image: '/icons/branding.png',
        title: 'RANTO POS',
        description: 'RANTO POS by Oshmira Solutions is a smart, all-in-one retail management system built to simplify billing, inventory, and customer operations.',
        link: '/solutions/pos-product'
    },
    {
        image: '/icons/social-media-marketing.png',
        title: 'HRM System',
        description: 'We create eye-catching content and targeted campaigns to grow your online presence and boost engagement.',
    },
    {
        image: '/icons/tv-commercials.png',
        title: 'LMS',
        description: 'We produce creative, high-quality ads that captivate audiences and strengthen brand recall on mainstream media.',
    },
    {
        image: '/icons/videography.png',
        title: 'E-Commerce Systems',
        description: 'We craft compelling visuals - from corporate videos to promos- bringing your brand’s story to life with precision.',
    },
    {
        image: '/icons/audiography.png',
        title: 'SFA System',
        description: 'We craft immersive audio experiences - perfect for advertisements, podcasts, jingles, and voiceovers that leave a lasting impact.',
    },
    {
        image: '/icons/audiography.png',
        title: 'Hotel Management system',
        description: 'We craft immersive audio experiences - perfect for advertisements, podcasts, jingles, and voiceovers that leave a lasting impact.',
    },
];

function SolutionsCardsGrid() {
    Aos.init({ duration: 2000 });
    return (
        <section className="services-our-services relative w-full max-w-(--max-width) mx-auto px-3 md:px-6 lg:px-4 py-8 md:py-16 lg:py-24">
            <div className="our-services-cards flex flex-wrap justify-center gap-4 lg:gap-y-[48px] lg:gap-x-[64px] mt-6 md:mt-12 lg:mt-16" data-aos="fade-up">
                {cardData.map((card, index) => (
                    <div
                        key={index}
                        className="w-full sm:w-[48%] lg:w-[29%] max-w-[396px] block"
                    >
                        <div className="bg-(--bg-second-col) rounded-3xl p-4 lg:px-8 lg:py-16 min-h-[240px] lg:h-[324px] text-center w-full h-full block singleCard shine-card-overlay shadow-[-1px_1px_2px_rgba(255,255,255,0.4)_inset]">
                            <img src={card.image} alt={card.title} className="mb-4 w-[58px] h-auto object-contain" />
                            <h3 className="text-white text-base font-inter-semibold text-left mb-[18px]">{card.title}</h3>
                            <p className="text-white text-left text-sm font-inter-light">{card.description}</p>
                            <div className="shine-card"></div>

                            {card.link && (                                
                                <Link to={card.link} className="text-left block mt-3 p-0"><Button variant="link" className="font-inter-semibold transition-colors hover:text-orange-500 text-left p-0">View Our Services <img src="/icons/right-white-arrow.png" alt="Arrow" /></Button></Link>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default SolutionsCardsGrid;