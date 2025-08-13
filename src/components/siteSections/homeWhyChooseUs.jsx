import { Link } from "react-router";
import { Button } from "../ui/button";
import Aos from 'aos';
import 'aos/dist/aos.css';

function HomeWhyChooseUs() {
    Aos.init({duration:1000});
    return (
        <section className="why-choose-us-section relative w-full max-w-(--max-width) mx-auto px-3 md:px-6 lg:px-4 py-8 md:py-16 lg:py-24">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-x-[42px] lg:gap-x-[58px] text-white">
                <div className="left-col col-span-1 md:col-span-2 flex flex-col items-center md:items-start" data-aos="fade-right">
                    <div className="why-choose-us-label label-border-animation py-2 px-2 rounded-md bg-(--bg-second-col) block mb-6 max-w-fit min-w-[120px] md:min-w-[186px]">
                        <p className="font-inter-semibold text-white text-xs text-center">
                            Why us
                        </p>
                    </div>
                    <h2 className="text-white text-center md:text-left font-inter-semibold text-2xl md:text-3xl lg:text-4xl mb-3">Choose <span className='gradient-text-anime'>Oshmira <br className="hidden lg:block" />
                        Solutions</span></h2>
                    <p className='text-base md:text-lg font-inter-light text-white text-center md:text-left mb-6'>At Oshmira Solutions, we don’t just build software we craft future-ready solutions. Backed by strategy, design, and technology, we empower businesses to grow, innovate, and lead in the digital era. With our Think. Make. Solve. philosophy, every project becomes a success story.</p>

                    <div className="btn-grp flex flex-col md:flex-row gap text-sm">
                        <Link to={'/contact-us'}><Button>Book a Call</Button></Link>
                    </div>
                </div>
                <div className="right-col col-span-1 md:col-span-3 grid grid-cols-1 gap-4 md:gap-6 h-fit" data-aos="fade-left">
                    <div className="rounded-3xl shine-card-overlay px-4 md:px-8 lg:px-10 py-4 md:py-6 lg:py-8 flex flex-row gap-4 justify-start bg-(--bg-second-col) shadow-[-1px_1px_2px_rgba(255,255,255,0.4)_inset]">
                        <div className="point-no text-xl md:text-2xl font-inter-semibold text-[#FF6725]">1.</div>
                        <div className="card-info text-white max-w-[594px]">
                            <h3 className="text-xl md:text-2xl text-white font-inter-semibold">Driven by Strategy</h3>
                            <p className='text-base md:text-lg font-inter-light text-white text-left mt-3 mb:mt-4'>We don’t just build software - we design solutions that solve real problems. Every project starts with strategic thinking and ends with measurable results.</p>
                        </div>
                        <div className="shine-card"></div>
                    </div>
                    <div className="rounded-3xl shine-card-overlay px-4 md:px-8 lg:px-10 py-4 md:py-6 lg:py-8 flex flex-row gap-4 justify-start bg-(--bg-second-col) shadow-[-1px_1px_2px_rgba(255,255,255,0.4)_inset]">
                        <div className="point-no text-xl md:text-2xl font-inter-semibold text-[#FF6725]">2.</div>
                        <div className="card-info text-white max-w-[594px]">
                            <h3 className="text-xl md:text-2xl text-white font-inter-semibold">User-First Design</h3>
                            <p className='text-base md:text-lg font-inter-light text-white text-left mt-3 mb:mt-4'>Our UI/UX process is backed by psychological research and user behavior insights. We create experiences that are not only beautiful but also functional and intuitive.</p>
                        </div>
                        <div className="shine-card"></div>
                    </div>
                    <div className="rounded-3xl shine-card-overlay px-4 md:px-8 lg:px-10 py-4 md:py-6 lg:py-8 flex flex-row gap-4 justify-start bg-(--bg-second-col) shadow-[-1px_1px_2px_rgba(255,255,255,0.4)_inset]">
                        <div className="point-no text-xl md:text-2xl font-inter-semibold text-[#FF6725]">3.</div>
                        <div className="card-info text-white max-w-[594px]">
                            <h3 className="text-xl md:text-2xl text-white font-inter-semibold">End-to-End Services</h3>
                            <p className='text-base md:text-lg font-inter-light text-white text-left mt-3 mb:mt-4'>From concept to launch and beyond—we handle everything. Whether it’s a website, app, or custom software, we deliver a full-stack solution under one roof.</p>
                        </div>
                        <div className="shine-card"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeWhyChooseUs;