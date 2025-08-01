import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const faqItems = [
    {
        question: "1. What services do you provide?",
        answer: "We offer Web Development, Mobile Apps, UI/UX Design, Software Solutions, SEO, and Digital Marketing."
    },
    {
        question: "2. How long will my project take?",
        answer: "A standard website takes about 12 days. Larger or custom projects may take longer."
    },
    {
        question: "3. Do you provide post-launch support?",
        answer: "Yes. We offer ongoing maintenance, updates, and technical assistance."
    },
    {
        question: "4. Can you customize solutions for my business?",
        answer: "Absolutely. Every project is designed to match your business needs and brand."
    },
    {
        question: "5. Do you work with international clients?",
        answer: "Yes. We serve clients in Sri Lanka and worldwide."
    },
    {
        question: "6. Will my website be SEO-friendly?",
        answer: "Yes. All our websites are built with SEO best practices for better search visibility."
    },
    {
        question: "7. How do I get started?",
        answer: "Simply contact us via our website, email, or phone, and we’ll guide you through the process."
    }
];

function FAQ() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <section className="faq-section relative w-full max-w-(--max-width) mx-auto px-3 md:px-6 lg:px-4 py-8 md:py-16 lg:py-24" data-aos="fade-up">

            <h2 className="text-white text-center font-inter-semibold text-2xl md:text-3xl lg:text-4xl mb-3" >Frequently Asked Questions</h2>
            <p className="text-base md:text-lg font-inter-light text-white text-center max-w-[760px] mx-auto mb-6">Have questions? We’ve got answers. Here you'll find quick responses to common queries about our services, process, and how we work at Oshmira Solution.</p>

            <div className="faq-accordion-wrapper text-white max-w-[620px] mx-auto bg-(--bg-second-col) p-4 rounded-md">
                <Accordion type="single" collapsible>
                    <Accordion type="single" collapsible >
                        {faqItems.map((item, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger>{item.question}</AccordionTrigger>
                                <AccordionContent>{item.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </Accordion>
            </div>
        </section>
    )
}

export default FAQ;