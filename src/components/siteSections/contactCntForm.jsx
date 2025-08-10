import React from "react";
import { Link } from "react-router";
import { Button } from "../ui/button";
import Aos from 'aos';
import 'aos/dist/aos.css';




function ContactCnthtmlForm() {
    Aos.init({ duration: 1000 });

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        try {
            const res = await fetch("http://localhost:4000/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = await res.json();
            alert(result.success ? "Email sent!" : "Failed to send.");
        } catch (err) {
            console.error("Error submitting form:", err);
            alert("Error submitting form.");
        }
    };


    return (
        <section className="contact-contact-htmlForm relative w-full max-w-(--max-width) mx-auto px-3 md:px-6 lg:px-4 py-8 md:py-16 lg:py-24">
            <div className="contact-us-label label-border-animation py-2 px-2 rounded-md bg-(--bg-second-col) block mb-6 max-w-fit min-w-[120px] md:min-w-[186px] mx-auto" data-aos="zoom-in">
                <p className="font-inter-semibold text-white text-xs text-center">
                    Get in Touch
                </p>
            </div>

            <div className="contact-contact-htmlForm-wrapper flex flex-wrap justify-center gap-4 lg:gap-y-[48px] lg:gap-x-[64px] mt-6 md:mt-12 lg:mt-16" data-aos="fade-up">
                <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8 lg:py-4">

                    <div className="flex items-stretch justify-center">
                        <div className="grid lg:grid-cols-3">
                            <div className="h-full pr-6 col-span-1 lg:col-span-1">
                                <h2 className="text-white text-left font-inter-semibold text-2xl md:text-3xl lg:text-4xl mb-6 aos-init aos-animate">Let’s Build Something Exceptional Together</h2>
                                <p className="mt-3 mb-12 text-lg text-white ">
                                    Whether you're ready to start a project or just exploring ideas, we’re here to help. At Oshmira Solution, we turn vision into reality with smart, scalable, and user-focused digital solutions. Reach out today let’s talk about how we can create meaningful impact through technology.
                                </p>
                                <div className="our-contact-details">
                                    <div className="phone mt-3 mb-6 text-lg text-white ">
                                        <p>Phone:</p>
                                        <p><a
                                            href="tel:+94 772203840"
                                            aria-label="Our phone"
                                            title="Our phone"
                                            className="duration-300 text-white font-inter-medium transition-colors hover:text-orange-500"
                                        >
                                            +94 772203840
                                        </a></p>
                                    </div>
                                    <div className="email mt-3 mb-6 text-lg text-white ">
                                        <p>E-mail:</p>
                                        <p>
                                            <a
                                                href="mailto:info@oshmira.com"
                                                aria-label="Our email"
                                                title="Our email"
                                                className="duration-300 text-white font-inter-medium transition-colors hover:text-orange-500"
                                            >
                                                info@oshmira.com
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="card h-fit max-w-6xl p-0 md:px-12 pt-0 col-span-1 lg:col-span-2" id="htmlForm">
                                <form id="contacthtmlForm" onSubmit={handleSubmit}>
                                    <div className="mb-6">
                                        <div className="mx-0 mb-1 sm:mb-4">
                                            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                                <div className="mx-0 mb-1 sm:mb-4">
                                                    <label htmlFor="name" className="text-base md:text-lg font-inter-light text-white block mb-2">Name *</label>
                                                    <input
                                                        type="text"
                                                        id="name"
                                                        name="name"
                                                        autoComplete="given-name"
                                                        placeholder="Your name"
                                                        required
                                                        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md text-white sm:mb-0"
                                                    />
                                                </div>
                                                <div className="mx-0 mb-1 sm:mb-4">
                                                    <label htmlFor="email" className="text-base md:text-lg font-inter-light text-white block mb-2">E-mail Address *</label>
                                                    <input
                                                        type="email"
                                                        id="email"
                                                        name="email"
                                                        autoComplete="email"
                                                        placeholder="Your email address"
                                                        required
                                                        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md text-white sm:mb-0"
                                                    />
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                                <div className="mx-0 mb-1 sm:mb-4">
                                                    <label htmlFor="company_name" className="text-base md:text-lg font-inter-light text-white block mb-2">Company name</label>
                                                    <input
                                                        type="text"
                                                        id="company_name"
                                                        name="company_name"
                                                        autoComplete="given-name"
                                                        placeholder="Your Company Name(Optional)"
                                                        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md text-white sm:mb-0"
                                                    />
                                                </div>
                                                <div className="mx-0 mb-2 sm:mb-4">
                                                    <label htmlFor="phone_number" className="text-base md:text-lg font-inter-light text-white block mb-2">Phone Number</label>
                                                    <input
                                                        type="tel"
                                                        id="phone_number"
                                                        name="phone_number"
                                                        autoComplete="given-name"
                                                        placeholder="Your Phone Number(Optional)"
                                                        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md text-white sm:mb-0"
                                                    />
                                                </div>
                                            </div>

                                        </div>
                                        <div className="mx-0 mb-1 sm:mb-4">
                                            <label htmlFor="message" className="text-base md:text-lg font-inter-light text-white block mb-2">Message *</label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                cols="30"
                                                rows="5"
                                                placeholder="Write your message..."
                                                required
                                                className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md text-white sm:mb-0"
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <button
                                            type="submit"
                                            className="w-full bg-orange-600 hover:bg-orange-700 cursor-pointer text-white px-6 py-3 font-xl rounded-md sm:mb-0"
                                        >
                                            Send Message
                                        </button>
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