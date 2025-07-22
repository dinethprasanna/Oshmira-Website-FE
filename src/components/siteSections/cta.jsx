import { Link } from "react-router";
import { Button } from "../ui/button";

function CTA() {
    return (
        <section className="call-to-action-section relative w-full max-w-(--max-width) mx-auto px-3 md:px-6 lg:px-4 py-8 md:py-16 lg:py-24">
            <div className="cta-gradient-bg rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative overflow-hidden">
                <div className="cta-info col-span-1 lg:col-span-2 py-4 px-6 md:px-8 lg:px-12 flex flex-col justify-center z-3">
                    <h2 className="text-white text-center md:text-left font-inter-semibold text-2xl md:text-3xl lg:text-4xl mb-4 lg:mb-5">Ready to Elevate your Brand?<br />
                        Start Now!</h2>
                    <p className="font-inter-light text-white text-center md:text-left text-base md:text-lg max-w-[520px] mb-6 mx-auto md:mx-0">Take your brand to the next level with our expert web solutions Let's get started today!</p>
                    <div className="bottom-link flex justify-center md:justify-start ">
                        <Link to={'/'}><Button variant="link" className="font-inter-semibold transition-colors text-black hover:text-orange-500 bg-white">Get Started</Button></Link>
                    </div>
                </div>
                <div className="cta-img col-span-1 absolute md:relative left-0 right-0 top-0 bottom-0 z-2">
                    
                    <img src="../../../public/global/cta-girl-on-phone.png" alt="Girl on phone" className="max-w-[420px] h-full w-auto md:max-w-full md:w-auto md:h-full block z-3 relative ml-auto" />
                </div>
                <img src="../../../public/global/cta-band.png" alt="Band" className="abslt-band absolute z-0 w-[504px] md:w-[624px] bottom-0 right-0 top-unset" />
            </div>
        </section>
    )
}

export default CTA;