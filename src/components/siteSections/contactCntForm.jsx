import { Link } from "react-router";
import { Button } from "../ui/button";
import Aos from 'aos';
import 'aos/dist/aos.css';




function ContactCnthtmlForm() {
    Aos.init({ duration: 2000 });
    return (
        <section className="contact-contact-htmlForm relative w-full max-w-(--max-width) mx-auto px-3 md:px-6 lg:px-4 py-8 md:py-16 lg:py-24">
            <div className="contact-us-label label-border-animation py-2 px-2 rounded-md bg-(--bg-second-col) block mb-6 max-w-fit min-w-[120px] md:min-w-[186px] mx-auto" data-aos="zoom-in">
                <p className="font-inter-semibold text-white text-xs text-center">
                    Get in Touch
                </p>
            </div>
            <h2 className="text-white text-center font-inter-semibold text-2xl md:text-3xl lg:text-4xl mb-3 max-w-[520px] mx-auto" data-aos="fade-up">Let's Collaborate and Create Powerful Digital  Solutions</h2>

            <div className="contact-contact-htmlForm-wrapper flex flex-wrap justify-center gap-4 lg:gap-y-[48px] lg:gap-x-[64px] mt-6 md:mt-12 lg:mt-16" data-aos="fade-up">
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">

                    <div className="flex items-stretch justify-center">
                        <div className="grid md:grid-cols-2">
                            <div className="h-full pr-6">
                                <p className="mt-3 mb-12 text-lg text-white ">
                                    Class aptent taciti sociosqu ad
                                    litora torquent per conubia nostra, per inceptos himenaeos. Duis nec ipsum orci. Ut scelerisque
                                    sagittis ante, ac tincidunt sem venenatis ut.
                                </p>
                                <ul className="mb-6 md:mb-0">
                                    <li className="flex">
                                        <div className="flex h-10 w-10 items-center justify-center rounded bg-red-900 text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" className="h-6 w-6">
                                                <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                                                <path
                                                    d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z">
                                                </path>
                                            </svg>
                                        </div>
                                        <div className="ml-4 mb-4">
                                            <h3 className="mb-2 text-lg font-medium leading-6 text-white ">Our Address
                                            </h3>
                                            <p className="text-white ">1230 Maecenas Street Donec Road</p>
                                            <p className="text-white ">New York, EEUU</p>
                                        </div>
                                    </li>
                                    <li className="flex">
                                        <div className="flex h-10 w-10 items-center justify-center rounded bg-red-900 text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" className="h-6 w-6">
                                                <path
                                                    d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2">
                                                </path>
                                                <path d="M15 7a2 2 0 0 1 2 2"></path>
                                                <path d="M15 3a6 6 0 0 1 6 6"></path>
                                            </svg>
                                        </div>
                                        <div className="ml-4 mb-4">
                                            <h3 className="mb-2 text-lg font-medium leading-6 text-white ">Contact
                                            </h3>
                                            <p className="text-white ">Mobile: +1 (123) 456-7890</p>
                                            <p className="text-white ">Mail: tailnext@gmail.com</p>
                                        </div>
                                    </li>
                                    <li className="flex">
                                        <div className="flex h-10 w-10 items-center justify-center rounded bg-red-900 text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" className="h-6 w-6">
                                                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                                                <path d="M12 7v5l3 3"></path>
                                            </svg>
                                        </div>
                                        <div className="ml-4 mb-4">
                                            <h3 className="mb-2 text-lg font-medium leading-6 text-white ">Working
                                                hours</h3>
                                            <p className="text-white">Monday - Friday: 08:00 - 17:00</p>
                                            <p className="text-white">Saturday &amp; Sunday: 08:00 - 12:00</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="card h-fit max-w-6xl p-5 md:px-12 pt-0" id="htmlForm">
                                <h2 className="mb-4 text-2xl font-bold text-white">Ready to Get Started?</h2>
                                <form id="contacthtmlForm">
                                    <div className="mb-6">
                                        <div className="mx-0 mb-1 sm:mb-4">
                                            <div className="mx-0 mb-1 sm:mb-4">
                                                <label htmlFor="name" className="pb-1 text-xs uppercase tracking-wider"></label><input type="text" id="name" autoComplete="given-name" placeholder="Your name" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md text-white sm:mb-0" name="name" />
                                            </div>
                                            <div className="mx-0 mb-1 sm:mb-4">
                                                <label htmlFor="email" className="pb-1 text-xs uppercase tracking-wider"></label><input type="email" id="email" autoComplete="email" placeholder="Your email address" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md text-white sm:mb-0" name="email" />
                                            </div>
                                        </div>
                                        <div className="mx-0 mb-1 sm:mb-4">
                                            <label htmlFor="textarea" className="pb-1 text-xs uppercase tracking-wider"></label><textarea id="textarea" name="textarea" cols="30" rows="5" placeholder="Write your message..." className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md text-white sm:mb-0"></textarea>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="w-full bg-red-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0">Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactCnthtmlForm;