import { Link } from "react-router";
import { Button } from "../ui/button";
import Aos from 'aos';
import 'aos/dist/aos.css';

function AboutUsCompanyOverview() {
    Aos.init({ duration: 2000 });
    return (
        <section className="about-us-company-overview-section relative w-full max-w-(--max-width) mx-auto px-3 md:px-6 lg:px-4 ">
            <div className="abt-company-info grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-x-[42px] lg:gap-x-[58px] text-white py-8 md:py-16 lg:py-24">
                <div className="left-col col-span-1 md:col-span-3 flex flex-col items-center md:items-start" data-aos="fade-right">
                    <div className="why-choose-us-label label-border-animation py-3 px-2 rounded-md bg-(--bg-second-col) block mb-6 max-w-fit min-w-[120px] md:min-w-[186px] min-h-[40px]">
                        <p className="font-inter-semibold text-white text-xs text-center">
                            Our Mission
                        </p>
                    </div>
                    <h2 className="text-white text-center md:text-left font-inter-semibold text-2xl md:text-3xl lg:text-4xl mb-3">Driving innovation through <br className="hidden lg:block" /> <span className='gradient-text-anime'>intelligent technology</span></h2>

                    <div className="flex md:hidden logo-wrapper flex-col h-full items-center justify-center my-6">
                        <img src="/pages/aboutUs/oshmira-logo-company-overview.png" alt="Oshmira Solution" className="block w-full h-auto max-w-[340px]" />
                    </div>

                    <p className='text-base md:text-lg font-inter-light text-white text-center md:text-left mb-4'>As a modern IT company based in Sri Lanka, we specialize in delivering innovative, user-focused, and business-driven technology solutions. From web and mobile development to customized software systems and creative UI/UX design, our mission is to empower businesses with tools that drive real growth.
                    </p>
                    <p className='text-base md:text-lg font-inter-light text-white text-center md:text-left mb-6'>
                        With a passionate team of developers, designers, strategists, and problem solvers, we blend creativity, technology, and strategy to deliver results that matter. Whether you're a startup or an enterprise, we work closely with you to understand your vision and turn it into powerful digital experiences.
                    </p>

                </div>
                <div className="hidden right-col col-span-1 md:grid grid-cols-1 md:col-span-2 gap-4 md:gap-6 h-full" data-aos="fade-left">
                    <div className="logo-wrapper flex flex-col h-full items-center justify-center">
                        <img src="/pages/aboutUs/oshmira-logo-company-overview.png" alt="Oshmira Solution" className="block w-full h-auto max-w-[420px]" />
                    </div>
                </div>
            </div>

            <div className="abt-company-vision-mission grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-x-[42px] lg:gap-x-[58px] text-white py-8 md:py-16 lg:py-24">
                <div className="left-col col-span-1 md:col-span-2 flex flex-col items-center md:items-start" data-aos="fade-right">
                    <div className="logo-wrapper flex flex-col h-full items-center justify-center">
                        <img src="/pages/aboutUs/oshmira-building.png" alt="Oshmira Solution" className="block w-full h-auto" />
                    </div>

                </div>
                <div className="right-col col-span-1 md:grid grid-cols-1 md:col-span-3 gap-4 md:gap-6 h-full" data-aos="fade-left">
                    <div className="flex flex-col justify-center h-full gap-6">
                        <div className="rounded-3xl shine-card-overlay px-4 md:px-8 lg:px-10 py-4 md:py-6 lg:py-8 flex flex-row gap-4 justify-start bg-(--bg-second-col) shadow-[-1px_1px_2px_rgba(255,255,255,0.4)_inset]">
                            <div className="point-no text-xl md:text-2xl font-inter-semibold text-[#FF6725]">
                                <img alt="Our Vision" className="w-[58px] h-auto object-contain" src="/icons/our-vision.png" />
                            </div>
                            <div className="card-info text-white max-w-[594px]">
                                <h3 className="text-xl md:text-2xl text-white font-inter-semibold">Our Vision</h3>
                                <p className='text-base md:text-lg font-inter-light text-white text-left mt-3 mb:mt-4'>To be the benchmark of excellence in the Sri Lankan IT industry  and to extend our reputation as a global leader in technology solutions.</p>
                            </div>
                            <div className="shine-card"></div>
                        </div>
                        <div className="rounded-3xl shine-card-overlay px-4 md:px-8 lg:px-10 py-4 md:py-6 lg:py-8 flex flex-row gap-4 justify-start bg-(--bg-second-col) shadow-[-1px_1px_2px_rgba(255,255,255,0.4)_inset]">
                            <div className="point-no text-xl md:text-2xl font-inter-semibold text-[#FF6725]">
                                <img alt="Our Mission" className="w-[58px] h-auto object-contain" src="/icons/our-mission.png" />
                            </div>
                            <div className="card-info text-white max-w-[594px]">
                                <h3 className="text-xl md:text-2xl text-white font-inter-semibold">Our Mission</h3>
                                <p className='text-base md:text-lg font-inter-light text-white text-left mt-3 mb:mt-4'>To empower businesses by crafting innovative and customized technology solutions that simplify operations, enhance user experience, and drive sustainable growth.</p>
                            </div>
                            <div className="shine-card"></div>
                        </div>
                        <div className="rounded-3xl shine-card-overlay px-4 md:px-8 lg:px-10 py-4 md:py-6 lg:py-8 flex flex-row gap-4 justify-start bg-(--bg-second-col) shadow-[-1px_1px_2px_rgba(255,255,255,0.4)_inset]">
                            <div className="point-no text-xl md:text-2xl font-inter-semibold text-[#FF6725]">
                                <img alt="Our Goal" className="w-[58px] h-auto object-contain" src="/icons/our-goal.png" />
                            </div>
                            <div className="card-info text-white max-w-[594px]">
                                <h3 className="text-xl md:text-2xl text-white font-inter-semibold">Our Goal</h3>
                                <p className='text-base md:text-lg font-inter-light text-white text-left mt-3 mb:mt-4'>To transform complex challenges into impactful digital solutions through strategic thinking, design precision, and cutting-edge technology - helping our clients stay ahead in an ever-evolving digital world.</p>
                            </div>
                            <div className="shine-card"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUsCompanyOverview;