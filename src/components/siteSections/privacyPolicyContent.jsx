import Aos from 'aos';
import 'aos/dist/aos.css';

function PrivacyPolicyContent() {
    Aos.init({ duration: 2000 });
    return (
        <section className="privacy-policy-content-section relative w-full max-w-[850px] mx-auto px-3 md:px-6 lg:px-4 py-8 md:py-16 lg:py-24" data-aos="fade-up">

            <h2 className="text-white text-center font-inter-semibold text-2xl md:text-3xl lg:text-4xl mb-3" >Privacy Policy </h2>
            <p className='text-base md:text-lg font-inter-medium text-white text-center max-w-[760px] mx-auto mb-6'>
                Effective Date: August 1, 2025
            </p>

            <p className='text-sm md:text-base font-inter-light text-white text-center mx-auto mb-6 md:mb-8 lg:mb-12'>
                Oshmira Solutions (Pvt) Ltd (“Oshmira Solutions,” “we,” “our,” or “us”) respects your privacy
                and is committed to protecting the personal information you share with us. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your information when you interact with
                our website, services, or products.
                By using our services, you agree to the practices described in this Privacy Policy.
            </p>

            <hr />

            <div className='py-6 md:py-8 lg:py-12'>
                <h3 className='text-white text-base md:text-lg font-inter-semibold text-left mb-[18px]'>1. Information We Collect</h3>
                <p className='text-sm md:text-base font-inter-light text-white text-left mx-auto mb-6'>
                    We may collect the following types of information:
                </p>
                <ul className="text-white text-left font-inter-light text-sm md:text-base list-disc list-outside pl-5 ">
                    <li>
                        <strong>Personal Information: </strong>Name, email address, phone number, company name, billing
                        details, and other information provided during inquiries, registrations, or service
                        agreements.
                    </li>
                    <li>
                        <strong>Technical Information: </strong>IP address, browser type, device details, operating system, and
                        website usage data.
                    </li>
                    <li>
                        <strong>Project-Related Information: </strong>Specifications, content, or materials you share with us for
                        project development.
                    </li>
                    <li>
                        <strong>Marketing & Communication Data: </strong>Preferences for receiving marketing updates,
                        newsletters, and service notifications.
                    </li>
                </ul>
            </div>

            <div className='py-6 md:py-8 lg:py-12'>
                <h3 className='text-white text-base md:text-lg font-inter-semibold text-left mb-[18px]'>2. How We Use Your Information</h3>
                <p className='text-sm md:text-base font-inter-light text-white text-left mx-auto mb-6'>
                    We use collected information for:
                </p>
                <ul className="text-white text-left font-inter-light text-sm md:text-base list-disc list-outside pl-5 ">
                    <li>
                        Delivering and managing our services (web development, mobile apps, UI/UX design,
                        SEO, etc.).
                    </li>
                    <li>
                        Processing payments and fulfilling contractual obligations.
                    </li>
                    <li>
                        Communicating project updates, technical support, and customer service.
                    </li>
                    <li>
                        Improving our services, website functionality, and user experience.
                    </li>
                    <li>
                        Sending marketing and promotional materials (only with your consent).
                    </li>
                    <li>
                        Complying with legal obligations and resolving disputes.
                    </li>
                </ul>
            </div>

            <div className='py-6 md:py-8 lg:py-12'>
                <h3 className='text-white text-base md:text-lg font-inter-semibold text-left mb-[18px]'>3. Data Security </h3>
                <p className='text-sm md:text-base font-inter-light text-white text-left mx-auto mb-4'>
                    We implement industry-standard security measures (including encryption, firewalls, and secure
                    servers) to protect your information against unauthorized access, alteration, or disclosure.
                </p>
                <p className='text-sm md:text-base font-inter-light text-white text-left mx-auto mb-6'>
                    However, please note that no method of transmission over the internet or electronic storage is
                    100% secure, and we cannot guarantee absolute security.
                </p>
            </div>

            <div className='py-6 md:py-8 lg:py-12'>
                <h3 className='text-white text-base md:text-lg font-inter-semibold text-left mb-[18px]'>4. Cookies & Tracking Technologies</h3>
                <p className='text-sm md:text-base font-inter-light text-white text-left mx-auto mb-6'>
                    Our website uses cookies and similar technologies to:
                </p>
                <ul className="text-white text-left font-inter-light text-sm md:text-base list-disc list-outside pl-5 mb-6">
                    <li>
                        Enhance website functionality and performance.
                    </li>
                    <li>
                        Analyze site traffic and user behavior.
                    </li>
                    <li>
                        Provide a personalized experience for visitors.
                    </li>
                </ul>
                <p className='text-sm md:text-base font-inter-light text-white text-left mx-auto mb-6'>
                    You may choose to disable cookies through your browser settings, but this may affect certain
                    website features.
                </p>
            </div>

            <div className='py-6 md:py-8 lg:py-12'>
                <h3 className='text-white text-base md:text-lg font-inter-semibold text-left mb-[18px]'>5. Third-Party Services</h3>
                <p className='text-sm md:text-base font-inter-light text-white text-left mx-auto mb-6'>
                    We may use third-party tools and platforms (such as hosting providers, analytics services, or
                    marketing platforms) that may collect and process your data in accordance with their own
                    privacy policies. We ensure that such providers comply with data protection standards.
                </p>
            </div>

            <div className='py-6 md:py-8 lg:py-12'>
                <h3 className='text-white text-base md:text-lg font-inter-semibold text-left mb-[18px]'>6. Sharing & Disclosure</h3>
                <p className='text-sm md:text-base font-inter-light text-white text-left mx-auto mb-6'>
                    We do not sell, rent, or trade your personal information. We may share information only in the
                    following cases:
                </p>
                <ul className="text-white text-left font-inter-light text-sm md:text-base list-disc list-outside pl-5 ">
                    <li>
                        With trusted service providers who assist in delivering our services.
                    </li>
                    <li>
                        To comply with legal requirements, court orders, or government requests.
                    </li>
                    <li>
                        To protect our legal rights, safety, or property.
                    </li>
                </ul>
            </div>

            <div className='py-6 md:py-8 lg:py-12'>
                <h3 className='text-white text-base md:text-lg font-inter-semibold text-left mb-[18px]'>7. Your Rights</h3>
                <p className='text-sm md:text-base font-inter-light text-white text-left mx-auto mb-6'>
                    As a user, you have the right to:
                </p>
                <ul className="text-white text-left font-inter-light text-sm md:text-base list-disc list-outside pl-5 mb-6">
                    <li>
                        Access and review the personal information we hold about you.
                    </li>
                    <li>
                        Request correction or deletion of your data.
                    </li>
                    <li>
                        Withdraw consent for marketing communications.
                    </li>
                    <li>
                        Request data portability (where applicable).
                    </li>
                </ul>
                <p className='text-sm md:text-base font-inter-light text-white  text-left mx-auto mb-6'>
                    To exercise these rights, please contact us at <a
                        href="mailto:info@oshmira.com"
                        aria-label="Our email"
                        title="Our email" className='hover:text-orange-500'>info@oshmira.com</a>.
                </p>
            </div>

            <div className='py-6 md:py-8 lg:py-12'>
                <h3 className='text-white text-base md:text-lg font-inter-semibold text-left mb-[18px]'>8. Compliance with Applicable Laws</h3>
                <p className='text-sm md:text-base font-inter-light text-white text-left mx-auto mb-6'>
                    Oshmira Solutions (Pvt) Ltd complies with applicable privacy and data protection laws in Sri
                    Lanka and, where applicable, international best practices (such as GDPR principles for clients
                    outside Sri Lanka).
                </p>
            </div>

            <div className='py-6 md:py-8 lg:py-12'>
                <h3 className='text-white text-base md:text-lg font-inter-semibold text-left mb-[18px]'>9. Changes to This Privacy Policy</h3>
                <p className='text-sm md:text-base font-inter-light text-white text-left mx-auto mb-6'>
                    We may update this Privacy Policy from time to time to reflect changes in our practices, legal
                    requirements, or services. Updates will be posted on our website with the revised “Effective
                    Date.”
                </p>
            </div>

        </section>
    )
}

export default PrivacyPolicyContent;