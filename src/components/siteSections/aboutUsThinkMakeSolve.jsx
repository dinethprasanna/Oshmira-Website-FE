import { Link } from "react-router";
import { Button } from "../ui/button";
import Aos from 'aos';
import 'aos/dist/aos.css';

function AboutUsThinkMakeSolveSection() {
    Aos.init({duration:1000});
    return (
        <section className="about-us-think-make-solve-section relative w-full max-w-(--max-width) mx-auto px-3 md:px-6 lg:px-4 py-8 md:py-16 lg:py-24" >
            <div className="about-us-think-make-solve-wrapper bg-[#F24E1E] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative overflow-hidden " data-aos="zoom-in">
                <div className="section-info col-span-1 lg:col-span-2 py-10 px-6 md:px-8 lg:px-12 md:py-10 lg:py-14 flex flex-col justify-center z-3">
                    <h2 className="text-white text-center md:text-left font-inter-semibold text-2xl md:text-3xl lg:text-4xl mb-4 lg:mb-5">Why work at Oshmira?</h2>
                    <div className="white-bg-quote bg-white p-6 md:px-8 md:py-6 w-fit mb-4 lg:mb-5 mx-auto md:mx-0">
                        <p className="m-0 text-[#F24E1E] font-inter-semibold text-3xl md:text-4xl lg:text-5xl text-center md:text-left">Think. Make. Solve.</p>
                    </div>
                    <p className="font-inter-light text-white text-center md:text-left text-base md:text-lg max-w-[520px] mb-6 mx-auto md:mx-0">Discover why leading businesses trust Oshmira Solutions to elevate their digital landscapes. Our portfolio reflects our dedication to excellence and innovation, demonstrating the breadth and impact of our customized IT solutions.Let's Talk</p>
                    <div className="bottom-link flex justify-center md:justify-start ">
                        <Link to={'/'}><Button variant="link" className="font-inter-semibold transition-colors text-black hover:text-orange-500 bg-white">Get Started</Button></Link>
                    </div>
                </div>
                <div className="section-img hidden md:block col-span-1 relative ">
                    
                    <img src="/pages/aboutUs/think-make-solve.png" alt="Rhink Make Solve" className="h-full object-cover w-auto md:max-w-full md:w-auto md:h-full block z-3 relative ml-auto" />
                </div>
            </div>
        </section>
    )
}

export default AboutUsThinkMakeSolveSection;