import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import animationData from '../../assets/pages/home/meshAnimation.json';
import { Button } from '../ui/button';
import { Link } from 'react-router';
import TechLogoSlider from './techLogoSlider';

function HomeHero() {
    const containerRef = useRef(null);
    const homeHeaidngTextSpanRef = useRef(null);

    const phrases = [
        "Business Growth",
        "Brand Awareness",
        "Customer Engagement",
        "Sales Performance",
        "Digital Success"
    ];

    useEffect(() => {
        // Register plugin
        gsap.registerPlugin(TextPlugin);

        let index = 0;

        const animateText = () => {
            gsap.to(homeHeaidngTextSpanRef.current, {
                duration: 1,
                text: phrases[index],
                ease: "power1.inOut",
                onComplete: () => {
                    setTimeout(() => {
                        index = (index + 1) % phrases.length;
                        animateText();
                    }, 2000); // wait 2s before next change
                }
            });
        };

        animateText();

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
        <section className="">
            <div className="home-hero-section relative w-full min-h-[60vh] overflow-hidden flex flex-col items-center justify-center">
                {/* Lottie Background */}
                <div
                    ref={containerRef}
                    className="absolute pointer-events-none lottie-container"
                />

                {/* Overlay content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-3 md:px-6 lg:px-4 mt-[120px] mb-[40px] lg:mt-[216px] lg:mb-[140px] max-w-(--max-width) mx-auto w-full">
                    <div className="hero-label py-2 px-2 rounded-md bg-(--bg-second-col) flex flex-row gap-2 items-center mb-5">
                        <Button className="text-xs h-[22px]">New</Button>
                        <p className="font-inter-semibold text-white text-xs">
                            Shaping the Future of Identify
                        </p>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-inter-semibold mx-auto mb-8">Smart Digital Solutions <br className='hidden lg:block' />
                        For your{" "} <span className='gradient-text-anime' ref={homeHeaidngTextSpanRef}>Business Growth</span></h1>

                    <p className='text-base md:text-lg font-inter-thin text-white max-w-[512px] mx-auto mb-6'>Expert development and  Ai Powered Annotation Solutions
                        For a Smarter workforce and Better Data</p>

                    <div className="btn-grp flex flex-col md:flex-row gap text-sm mb-12 md:mb-16 lg:mb-20">
                        <Link to={'/'}><Button>Get Started</Button></Link>
                        <Link to={'/'}><Button variant="link" className="font-inter-semibold transition-colors hover:text-orange-500">View Our Services <img src="../src/assets/icons/right-white-arrow.png" alt="Arrow" /></Button></Link>
                    </div>

                    <div className="tech-logos-slider">
                        <TechLogoSlider />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeHero;
