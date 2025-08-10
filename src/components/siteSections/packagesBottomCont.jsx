import { Link } from 'react-router';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Button } from '../ui/button';

function PackagesBottomCont() {
    Aos.init({ duration: 2000 });
    return (
        <section className="our-shopify-pricing-plan-section relative w-full max-w-(--max-width) mx-auto px-3 md:px-6 lg:px-4 py-8 md:py-10 lg:py-12">
            <div className="container mx-auto text-white max-w-[900px]" data-aos="fade-up">

                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                    <span className="gradient-text-anime">Let’s take your business further</span> - explore our other support packages by contacting us.
                </h2>
                <p className="text-center text-white mb-6 md:mb-8 mx-auto max-w-[600px]">
                    Have a unique project or custom requirement? We're here to help you bring your vision to life. Reach out today and let’s create something exceptional together!
                </p>

                <div className="btn-grp flex flex-col md:flex-row justify-center gap-4 text-sm ">
                    <Link to={'/contact-us'}><Button>Contact Us</Button></Link>
                    <Link to={'/services'}><Button variant="link" className="font-inter-semibold transition-colors hover:text-orange-500">View Our Services <img src="/icons/right-white-arrow.png" alt="Arrow" /></Button></Link>
                </div>

            </div>
        </section>
    );
}

export default PackagesBottomCont;
