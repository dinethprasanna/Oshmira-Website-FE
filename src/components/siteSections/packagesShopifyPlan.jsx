import { Link } from 'react-router';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Button } from '../ui/button';

function PackagesShopifyPlan() {
    Aos.init({ duration: 1000 });
    return (
        <section className="our-shopify-pricing-plan-section relative w-full max-w-(--max-width) mx-auto px-3 md:px-6 lg:px-4 py-8 md:py-16 lg:py-24">
            <div className="container mx-auto text-white" data-aos="fade-up">

                <h2 className="text-3xl md:text-4xl font-bold text-left mb-4">
                    Scalable <span className='text-orange-500'>Shopify Plans</span> for Every Stage of Your Store
                </h2>
                <p className="text-left text-white mb-10 md:mb-16">
                    Whether you're just starting or scaling your e-commerce empire, our Shopify solutions are designed to grow with you. We provide clear, transparent pricing with top-notch development and support.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full mx-auto">

                    {/* Plan 1: Starter */}
                    <div className="bg-(--bg-second-col) rounded-lg shadow-lg p-6 flex flex-col border border-gray-700">
                        <h3 className="text-xl font-semibold mb-4">Starter</h3>
                        <div className="mb-6">
                            <span className="text-4xl font-bold">Starting at $120</span>
                        </div>
                        <p className="mb-6 text-sm">
                            Ideal for: New Shopify merchants launching their first store.
                        </p>
                        <ul className="space-y-3 text-sm feature-list flex-grow">
                            {[
                                "Clean, branded Shopify store with a free theme",
                                "Up to 20 products & 2 collections",
                                "Core pages: Home, Product, Collection, Cart, Contact",
                                "Basic theme customization (colors, fonts, layout tweaks)",
                                "Mobile-friendly responsive design",
                                "30 Days free support"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start">
                                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5"
                                         xmlns="http://www.w3.org/2000/svg" fill="none"
                                         viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <Link to={'/contact-us'} className='mt-6 mb-3'><Button className="w-full">Contact Us</Button></Link>
                    </div>

                    {/* Plan 2: Growth / Recommended */}
                    <div className="bg-(--bg-second-col) rounded-lg shadow-lg p-6 flex flex-col border-2 border-orange-400 relative">
                        <span className="absolute top-0 right-4 -mt-3 bg-orange-400 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                            Recommended
                        </span>
                        <h3 className="text-xl font-semibold mb-4">Growth</h3>
                        <div className="mb-6">
                            <span className="text-4xl font-bold">Starting at $250</span>
                        </div>
                        <p className="mb-6 text-sm">
                            Ideal for growing businesses wanting a polished, professional Shopify store with advanced features.
                        </p>
                        <ul className="space-y-3 text-sm feature-list flex-grow">
                            {[
                                "Custom Shopify store design from your Figma/Adobe XD layouts",
                                "Up to 30 products & 5 collections setup",
                                "Includes all Starter pages plus Policy pages (Terms, Privacy) and About Us",
                                "Moderate theme & layout customizations",
                                "Fully responsive, mobile-first design",
                                "Installation of up to 2 Shopify apps",
                                "45 Days free support"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start">
                                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5"
                                         xmlns="http://www.w3.org/2000/svg" fill="none"
                                         viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <Link to={'/contact-us'} className='mt-6 mb-3'><Button className="w-full">Contact Us</Button></Link>
                    </div>

                    {/* Plan 3: Enterprise */}
                    <div className="bg-(--bg-second-col) rounded-lg shadow-lg p-6 flex flex-col border border-gray-700">
                        <h3 className="text-xl font-semibold mb-4">Enterprise</h3>
                        <div className="mb-6">
                            <span className="text-4xl font-bold">Starting at $350</span>
                        </div>
                        <p className="mb-6 text-sm">
                            Ideal for established businesses seeking a highly personalized and scalable Shopify store with advanced features.
                        </p>
                        <ul className="space-y-3 text-sm feature-list flex-grow">
                            {[
                                "Full custom Shopify store from unique Store design",
                                "Up to 50 products & 8 collections setup",
                                "Includes all Standard pages plus 2 extra pages (FAQ, Blog, Testimonials)",
                                "Advanced custom development (currency converters, multilingual support, etc.)",
                                "Fully responsive and scalable design for future growth",
                                "Installation of up to 3 essential Shopify apps",
                                "6 months premium support"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start">
                                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5"
                                         xmlns="http://www.w3.org/2000/svg" fill="none"
                                         viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <Link to={'/contact-us'} className='mt-6 mb-3'><Button className="w-full">Contact Us</Button></Link>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default PackagesShopifyPlan;
