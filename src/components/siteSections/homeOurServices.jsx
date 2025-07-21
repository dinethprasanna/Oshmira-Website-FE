import { Link } from "react-router";
import { Button } from "../ui/button";
import SingleCard from "./singleCard";


const cardData = [
    {
        image: '../src/assets/icons/WebDevelopment.png',
        title: 'Web Development',
        description: 'Custom-built web solutions that streamline your operations, solve unique challenges, and fuel your growth.',
    },
    {
        image: '../src/assets/icons/AppDevelopemnt.png',
        title: 'App Development',
        description: 'High-performance mobile apps for accelerate your business growth and delight your users.',
    },
    {
        image: '../src/assets/icons/E-commerceSolutions.png',
        title: 'E-commerce Solutions',
        description: 'We build eCommerce platforms that showcase your products, convert visitors, and grow your brand.',
    },
    {
        image: '../src/assets/icons/UIUXDesign.png',
        title: 'UI/UX Design',
        description: 'SWe create digital experiences that users love. Intuitive, engaging designs that turn first-time visitors into loyal customers.',
    },
    {
        image: '../src/assets/icons/GraphicDesign.png',
        title: 'Graphic Design',
        description: 'From sleek vector designs to captivating 2D and 3D creations, we turn your vision into reality.',
    },
    {
        image: '../src/assets/icons/WebsiteSEO.png',
        title: 'Website SEO',
        description: 'Enhancing website rankings and visibility through keyword strategies, content optimization, and technical SEO to drive organic traffic.',
    },
];

function HomeOurServices() {
    return (
        <section className="relative w-full max-w-(--max-width) mx-auto px-3 md:px-6 lg:px-4 py-8 md:py-16 lg:py-24">
            <div className="hero-label py-2 px-2 rounded-md bg-(--bg-second-col) block mb-5 max-w-fit min-w-[120px] md:min-w-[186px] mx-auto">
                <p className="font-inter-semibold text-white text-xs text-center">
                    We Providing
                </p>
            </div>
            <h2 className="text-white text-center font-inter-semibold text-2xl md:text-3xl lg:text-4xl mb-3">Our Services</h2>
            <p className='text-base md:text-lg font-inter-thin text-white text-center max-w-[480px] mx-auto mb-6'>Empowering Innovation with Expert Talent <br className="hidden lg:block" />
                Precision Annotations, and Custom Web Solutions</p>

            <div className="our-services-cards flex flex-wrap justify-center gap-4 lg:gap-y-[54px] lg:gap-x-[86px] mt-6 md:mt-12 lg:mt-16">
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
            <div className="bottom-link mt-8 md:mt-12 lg:mt-16 flex justify-center">
                <Link to={'/'}><Button variant="link" className="font-inter-semibold">View Our Services <img src="../src/assets/icons/right-white-arrow.png" alt="Arrow" /></Button></Link>
            </div>
        </section>
    );
}

export default HomeOurServices;