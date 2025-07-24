import lottie from 'lottie-web';
import { useEffect, useRef } from 'react';
import animationData from '/src/assets/meshAnimation.json';
import Aos from 'aos';
import 'aos/dist/aos.css';

function BreadcrumbHeroSection({ title, gradientTitle, breadcrumb }) {
    const containerRef = useRef(null);

    useEffect(() => {
        Aos.init({duration:2000});
        
        //hero lottie animation
        const anim = lottie.loadAnimation({
            container: containerRef.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: animationData,
        });

        return () => anim.destroy();


    }, []);
    
    return (
        <section className="breadcrumb-hero-section">
            <div className="relative w-full min-h-[40vh] md:min-h-[52vh] overflow-hidden flex flex-col items-center justify-center">
                {/* Lottie Background */}
                <div
                    ref={containerRef}
                    className="absolute pointer-events-none lottie-container"
                />

                {/* Overlay content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-3 md:px-6 lg:px-4 mt-[120px] mb-[40px] lg:mt-[216px] lg:mb-[120px] max-w-(--max-width) mx-auto w-full" data-aos="zoom-in">
                    
                    <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-inter-semibold mx-auto mb-8">{title} <span className='gradient-text-anime'>{gradientTitle}</span></h1>

                    <p className='text-base md:text-lg font-inter-light text-white max-w-[512px] mx-auto mb-6'>{breadcrumb}</p>

                    
                </div>
            </div>

        </section>
    )
}

export default BreadcrumbHeroSection; 