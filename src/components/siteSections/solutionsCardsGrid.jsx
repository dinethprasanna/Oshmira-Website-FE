import { Link } from "react-router";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Button } from "../ui/button";


const cardData = [
    {
        image: '/icons/ranto-pos.png',
        title: 'RANTO POS',
        description: 'RANTO POS by Oshmira Solutions is a smart, all-in-one retail management system built to simplify billing, inventory, and customer operations.',
        link: '/solutions/pos-product'
    },
    {
        image: '/icons/hrm-system.png',
        title: 'HRM System',
        description: 'Streamline employee management, payroll, and performance tracking.',
    },
    {
        image: '/icons/lms.png',
        title: 'LMS',
        description: 'Simplify learning and training with a smart Learning Management System.',
    },
    {
        image: '/icons/e-commerce.png',
        title: 'E-Commerce Systems',
        description: 'Build and manage online stores for seamless digital sales.',
    },
    {
        image: '/icons/sfa-system.png',
        title: 'SFA System',
        description: 'Streamline sales and inventory with transfer management, product labeling, and real-time stock control.',
    },
    {
        image: '/icons/hotel-management.png',
        title: 'Hotel Management system',
        description: 'Manage reservations,room booking, operations, and guests effortlessly.',
    },
];

function SolutionsCardsGrid() {
    Aos.init({ duration: 1000 });
    return (
        <section className="services-our-services relative w-full max-w-(--max-width) mx-auto px-3 md:px-6 lg:px-4 py-8 md:py-16 lg:py-24" data-aos="fade-up">
            <div className="our-services-cards flex flex-wrap justify-center gap-4 lg:gap-y-[48px] lg:gap-x-[64px] mt-6 md:mt-12 lg:mt-16">
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
                                <Link to={card.link} className="text-left block mt-3 p-0"><Button variant="link" className="font-inter-semibold transition-colors hover:text-orange-500 text-left p-0">View More <img src="/icons/right-white-arrow.png" alt="Arrow" /></Button></Link>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default SolutionsCardsGrid;