import Aos from 'aos';
import 'aos/dist/aos.css';

function TermsConditionContent() {
    Aos.init({ duration: 2000 });
    return (
        <section className="terms-and-conditions-content-section relative w-full max-w-[850px] mx-auto px-3 md:px-6 lg:px-4 py-8 md:py-16 lg:py-24" data-aos="fade-up">

            <h2 className="text-white text-center font-inter-semibold text-2xl md:text-3xl lg:text-4xl mb-3" >Terms and Conditions </h2>
            <p className='text-base md:text-lg font-inter-medium text-white text-center max-w-[760px] mx-auto mb-6'>
                Effective Date: August 1, 2025
            </p>

            <p className='text-sm md:text-base font-inter-light text-white text-center mx-auto mb-6 md:mb-8 lg:mb-12'>
                Welcome to Oshmira Solutions (Pvt) Ltd. These Terms and Conditions (“Terms”) govern your
                use of our services, including web development, mobile app development, UI/UX design,
                software solutions, SEO, and digital marketing (collectively, the “Services”). By engaging with
                us, you agree to these Terms. Please read them carefully.
            </p>

            <hr />

            <div className='py-6 md:py-8 lg:py-12'>
                <h3 className='text-white text-base md:text-lg font-inter-semibold text-left mb-[18px]'>1. Services</h3>
                <p className='text-sm md:text-base font-inter-light text-white text-left mx-auto mb-6'>
                    We provide IT and digital solutions tailored to your requirements. Service details, timelines, and
                    deliverables will be outlined in individual agreements or proposals.
                </p>
            </div>

            <div className='py-6 md:py-8 lg:py-12'>
                <h3 className='text-white text-base md:text-lg font-inter-semibold text-left mb-[18px]'>2. Client Responsibilities </h3>
                <p className='text-sm md:text-base font-inter-light text-white text-left mx-auto mb-6'>
                    You agree to provide accurate, complete information necessary for us to deliver the Services,
                    including content, access credentials, and feedback in a timely manner.
                </p>
            </div>

            <div className='py-6 md:py-8 lg:py-12'>
                <h3 className='text-white text-base md:text-lg font-inter-semibold text-left mb-[18px]'>3. Payment Terms </h3>
                <ul className="text-white text-left font-inter-light text-sm md:text-base list-disc list-outside pl-5 ">
                    <li>
                        All fees and payment schedules will be stated in the project agreement.
                    </li>
                    <li>
                        Payments must be made as agreed; late payments may incur additional charges or delay
                        project delivery.
                    </li>
                    <li>
                        We reserve the right to suspend Services if payments are overdue.
                    </li>
                </ul>
            </div>

            <div className='py-6 md:py-8 lg:py-12'>
                <h3 className='text-white text-base md:text-lg font-inter-semibold text-left mb-[18px]'>4. Intellectual Property</h3>
                <ul className="text-white text-left font-inter-light text-sm md:text-base list-disc list-outside pl-5 ">
                    <li>
                        Upon full payment, ownership of the deliverables (such as websites, apps, designs) will
                        transfer to you, except for third-party components subject to separate licenses.
                    </li>
                    <li>
                        We retain the right to showcase completed projects in our portfolio unless otherwise
                        agreed.
                    </li>
                </ul>
            </div>

            <div className='py-6 md:py-8 lg:py-12'>
                <h3 className='text-white text-base md:text-lg font-inter-semibold text-left mb-[18px]'>5. Confidentiality</h3>
                <p className='text-sm md:text-base font-inter-light text-white text-left mx-auto mb-6'>
                    Both parties agree to keep confidential any sensitive information shared during the project and
                    not disclose it to third parties without consent.
                </p>
            </div>

            <div className='py-6 md:py-8 lg:py-12'>
                <h3 className='text-white text-base md:text-lg font-inter-semibold text-left mb-[18px]'>6. Limitation of Liability </h3>
                <p className='text-sm md:text-base font-inter-light text-white text-left mx-auto mb-6'>
                    Oshmira Solutions is committed to delivering high-quality services. However, we shall not be
                    liable for indirect, incidental, or consequential damages arising from the use or inability to use
                    our Services.
                </p>
            </div>

            <div className='py-6 md:py-8 lg:py-12'>
                <h3 className='text-white text-base md:text-lg font-inter-semibold text-left mb-[18px]'>7. Warranty </h3>
                <p className='text-sm md:text-base font-inter-light text-white text-left mx-auto mb-6'>
                    We warrant that our Services will be performed professionally and according to industry
                    standards. Any defects or issues identified must be reported within a reasonable timeframe for
                    resolution.
                </p>
            </div>

            <div className='py-6 md:py-8 lg:py-12'>
                <h3 className='text-white text-base md:text-lg font-inter-semibold text-left mb-[18px]'>8. Termination </h3>
                <p className='text-sm md:text-base font-inter-light text-white text-left mx-auto mb-6'>
                    Either party may terminate the agreement with written notice. In case of termination, you agree
                    to pay for work completed up to the termination date.
                </p>
            </div>

            <div className='py-6 md:py-8 lg:py-12'>
                <h3 className='text-white text-base md:text-lg font-inter-semibold text-left mb-[18px]'>9. Use of Third-Party Services </h3>
                <p className='text-sm md:text-base font-inter-light text-white text-left mx-auto mb-6'>
                    Our Services may involve third-party tools or platforms. Use of such services is subject to their
                    own terms and conditions.
                </p>
            </div>

            <div className='py-6 md:py-8 lg:py-12'>
                <h3 className='text-white text-base md:text-lg font-inter-semibold text-left mb-[18px]'>10. Governing Law </h3>
                <p className='text-sm md:text-base font-inter-light text-white text-left mx-auto mb-6'>
                    These Terms shall be governed by and construed in accordance with the laws of Sri Lanka.
                </p>
            </div>

            <div className='py-6 md:py-8 lg:py-12'>
                <h3 className='text-white text-base md:text-lg font-inter-semibold text-left mb-[18px]'>11. Changes to Terms</h3>
                <p className='text-sm md:text-base font-inter-light text-white text-left mx-auto mb-6'>
                    We may update these Terms occasionally. Updated versions will be posted on our website with a
                    revised Effective Date.
                </p>
            </div>



        </section>
    )
}

export default TermsConditionContent;