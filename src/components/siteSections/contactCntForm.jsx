import { Link } from "react-router";
import { Button } from "../ui/button";
import Aos from 'aos';
import 'aos/dist/aos.css';




function ContactCntForm() {
    Aos.init({duration:2000});
    return (
        <section className="contact-contact-form relative w-full max-w-(--max-width) mx-auto px-3 md:px-6 lg:px-4 py-8 md:py-16 lg:py-24">
            <div className="contact-us-label label-border-animation py-2 px-2 rounded-md bg-(--bg-second-col) block mb-6 max-w-fit min-w-[120px] md:min-w-[186px] mx-auto" data-aos="zoom-in">
                <p className="font-inter-semibold text-white text-xs text-center">
                    Get in Touch
                </p>
            </div>
            <h2 className="text-white text-center font-inter-semibold text-2xl md:text-3xl lg:text-4xl mb-3 max-w-[520px] mx-auto" data-aos="fade-up">Let's Collaborate and Create Powerful Digital  Solutions</h2>
            
            <div className="contact-contact-form-wrapper flex flex-wrap justify-center gap-4 lg:gap-y-[48px] lg:gap-x-[64px] mt-6 md:mt-12 lg:mt-16" data-aos="fade-up">
                
            </div>            
        </section>
    );
}

export default ContactCntForm;