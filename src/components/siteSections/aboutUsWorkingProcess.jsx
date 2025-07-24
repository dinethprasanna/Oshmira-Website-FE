import { Link } from "react-router";
import { Button } from "../ui/button";
import Aos from 'aos';
import 'aos/dist/aos.css';




function AboutUsWorkingProcess() {
    Aos.init({duration:2000});
    return (
        <section className="about-us-working-process relative w-full max-w-(--max-width) mx-auto px-3 md:px-6 lg:px-4 py-8 md:py-16 lg:py-24">
            <div className="about-us-working-process-label label-border-animation py-2 px-2 rounded-md bg-(--bg-second-col) block mb-6 max-w-fit min-w-[120px] md:min-w-[186px] mx-auto" data-aos="zoom-in">
                <p className="font-inter-semibold text-white text-xs text-center">
                    Process
                </p>
            </div>
            <h2 className="text-white text-center font-inter-semibold text-2xl md:text-3xl lg:text-4xl mb-3 max-w-[520px] mx-auto" data-aos="fade-up">Working Process</h2>
            
            <div className="about-us-working-process-wrapper mb-8 md:mt-14" data-aos="fade-up">

                <div className="card-wrapper flex flex-col md:flex-row gap-6 md:gap-4 justify-evenly relative">
                    <div className="card p-4 w-full max-w-[100%] md:max-w-[312px] flex flex-row gap-3 md:block mx-auto relative z-2">
                        <div className="card-icon mr-3 md:mr-0 md:mb-7 w-[20%] md:w-auto">
                            <img alt="Idea Generation" class="w-[116px] h-auto object-contain block mx-auto" src="/icons/idea-generation.png" />
                        </div>
                        <div className="card-info w-[80%] md:w-auto">
                            <h4 className="text-white text-base font-inter-semibold text-left md:text-center mb-[18px]">Idea Generation</h4>
                            <p className="text-white text-left md:text-center text-sm font-inter-light">We start by identifying your business needs, challenges, and goals. Through collaborative brainstorming, we generate innovative and strategic ideas tailored to your vision.</p>
                        </div>                        
                    </div>
                    <div className="card p-4 w-full max-w-[100%] md:max-w-[312px] flex flex-row gap-3 md:block mx-auto relative z-2">
                        <div className="card-icon mb-5 md:mb-7 w-[20%] md:w-auto">
                            <img alt="Sketch & Design" class="w-[116px] h-auto object-contain block mx-auto" src="/icons/sketch-and-design.png" />
                        </div>
                        <div className="card-info w-[80%] md:w-auto">
                            <h4 className="text-white text-base font-inter-semibold text-left md:text-center  mb-[18px]">Sketch & Design</h4>
                            <p className="text-white text-left md:text-center  text-sm font-inter-light">Our UI/UX designers translate ideas into visual concepts. Wireframes and design mockups are created to define user flow, structure, and experience.</p>
                        </div>                        
                    </div>
                    <div className="card p-4 w-full max-w-[100%] md:max-w-[312px] flex flex-row gap-3 md:block mx-auto relative z-2">
                        <div className="card-icon mb-5 md:mb-7 w-[20%] md:w-auto">
                            <img alt="Development" class="w-[116px] h-auto object-contain block mx-auto" src="/icons/development.png" />
                        </div>
                        <div className="card-info w-[80%] md:w-auto">
                            <h4 className="text-white text-base font-inter-semibold text-left md:text-center  mb-[18px]">Development</h4>
                            <p className="text-white text-left md:text-center  text-sm font-inter-light">Once the designs are approved, our development team transforms them into fully functional, scalable digital solutions using the latest technologies and frameworks.</p>
                        </div>                        
                    </div>
                    <div className="card p-4 w-full max-w-[100%] md:max-w-[312px] flex flex-row gap-3 md:block mx-auto relative z-2">
                        <div className="card-icon mb-5 md:mb-7 w-[20%] md:w-auto">
                            <img alt="App Development" class="w-[116px] h-auto object-contain block mx-auto" src="/icons/testing-result.png" />
                        </div>
                        <div className="card-info w-[80%] md:w-auto">
                            <h4 className="text-white text-base font-inter-semibold text-left md:text-center  mb-[18px]">Testing Result</h4>
                            <p className="text-white text-left md:text-center  text-sm font-inter-light">Before launch, we conduct thorough quality assurance, bug fixing, and performance testing to ensure a seamless and error-free user experience. We focus on delivering real, measurable results.</p>
                        </div>                        
                    </div>

                    <div className="work-process-line absolute left-[11vw] md:left-0 md:right-0 w-fit md:w-full h-full md:h-auto top-0 md:top-[64px] z-0">
                        <img src="/pages/aboutUs/working-process-arrow-line.png" alt="work-process-line" className="hidden md:block w-full" />
                        <img src="/pages/aboutUs/working-process-arrow-line-mob.png" alt="work-process-line" className="block md:hidden h-full" />
                    </div>
                </div>
                
            </div>            
        </section>
    );
}

export default AboutUsWorkingProcess;