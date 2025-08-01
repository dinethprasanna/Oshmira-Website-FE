import { Link } from "react-router";
import { Button } from "../ui/button";
import SingleCard from "./singleCard";
import Aos from "aos";
import "aos/dist/aos.css";

const cardData = [
  {
    image: "/icons/WebDevelopment.png",
    title: "Web Development",
    description:
      "Custom web solutions that make your work easier, solve your business problems, and help you grow.",
  },
  {
    image: "/icons/AppDevelopemnt.png",
    title: "App Development",
    description:
      "High-performance mobile apps for accelerate your business growth and delight your users.",
  },
  {
    image: "/icons/E-commerceSolutions.png",
    title: "E-commerce Solutions",
    description:
      "We build eCommerce platforms that showcase your products, convert visitors, and grow your brand.",
  },
  {
    image: "/icons/UIUXDesign.png",
    title: "UI/UX Design",
    description:
      "Craft user-friendly UX and engaging UI designs that make every interaction simple and enjoyable - turning visitors into loyal customers.",
  },
  {
    image: "/icons/GraphicDesign.png",
    title: "Graphic Design",
    description:
      "Eye-catching graphic designs that strengthen your brand identity and communicate your message clearly across all platforms.",
  },
  {
    image: "/icons/WebsiteSEO.png",
    title: "Website SEO",
    description:
      "Optimize your website to improve search engine rankings, increase visibility, and attract more visitors organically.",
  },
];

function ServicesOurServices() {
  Aos.init({ duration: 1000 });
  return (
    <section className="services-our-services relative w-full max-w-(--max-width) mx-auto px-3 md:px-6 lg:px-4 py-8 md:py-16 lg:py-24">
      <div
        className="hero-label label-border-animation py-2 px-2 rounded-md bg-(--bg-second-col) block mb-6 max-w-fit min-w-[120px] md:min-w-[186px] mx-auto"
        data-aos="zoom-in"
      >
        <p className="font-inter-semibold text-white text-xs text-center">
          Services
        </p>
      </div>
      <h2
        className="text-white text-center font-inter-semibold text-2xl md:text-3xl lg:text-4xl mb-3"
        data-aos="fade-up"
      >
        Explore We offering for you
      </h2>

      <div
        className="our-services-cards flex flex-wrap justify-center md:justify-between gap-4 lg:gap-y-[48px] lg:gap-x-[64px] mt-6 md:mt-12 lg:mt-16"
        data-aos="fade-up"
      >
        {cardData.map((card, index) => (
          <div
            key={index}
            className="w-full sm:w-[48%] lg:w-[29%]  max-w-[396px] block"
          >
            <SingleCard
              image={card.image}
              title={card.title}
              description={card.description}
            />
          </div>
        ))}
        <div className="full-sevice-card">
          <div className=" bg-(--bg-second-col) rounded-3xl  min-h-[240px] lg:min-h-[324px] text-center max-w-[396px] md:max-w-full w-full h-full block singleCard shine-card-overlay shadow-[-1px_1px_2px_rgba(255,255,255,0.4)_inset]">
            <div className="our-services-full-width-card grid grid-cols-1 md:grid-cols-2 ">
              <div className="card-title-info p-4 lg:px-8 lg:py-16">
                <img
                  src="/icons/WebDevelopment.png"
                  alt="Software Maintenance and Support"
                  className="mb-4 w-[58px] h-auto object-contain"
                />
                <h3 className="text-white text-base font-inter-semibold text-left mb-[18px]">
                  Software Maintenance and Support
                </h3>
                <p className="text-white text-left text-sm font-inter-light">
                  Providing continuous support to ensure your Business systems
                  runs smoothly at all times.
                </p>
                <p className="text-white text-left text-sm font-inter-light">
                  At Oshmira Solutions, we offer reliable and ongoing Software
                  Maintenance & Support Services to ensure your systems are
                  always running at their best. Whether you're managing an
                  internal platform or a customer-facing solution, our team is
                  here to provide the essential support your business needs.
                </p>
                <div className="block md:hidden px-4">
                  <ul className="text-white text-left font-inter-light text-sm md:text-base list-disc list-outside pb-0 p-4 lg:px-8 lg:py-16 md:flex md:flex-col md:justify-center list-image-[url(/icons/list-tick.png)]">
                    <li className="mb-2 md:mb-3">
                      Email Support & Backup Maintenance
                    </li>
                    <li className="mb-2 md:mb-3">Secure Hosting Services</li>
                    <li className="mb-2 md:mb-3">
                      Basic Profile Management Development
                    </li>
                    <li className="mb-2 md:mb-3">Regular Backup Maintenance</li>
                    <li className="mb-0 md:mb-0">24/7 Technical Support</li>
                  </ul>
                  <ul className="text-white text-left font-inter-light text-sm md:text-base list-disc list-outside p-4 lg:px-8 lg:py-16 md:flex md:flex-col md:justify-center list-image-[url(/icons/list-tick.png)]">
                    <li className="mb-2 md:mb-3">Bug Fixing & Minor Updates</li>
                    <li className="mb-2 md:mb-3">Performance Optimization</li>
                    <li className="mb-0">System Monitoring & Alerts</li>
                  </ul>
                </div>
                <Link to={"/contact-us"} className="block w-fit mt-6 md:mt-8">
                  <Button>Get Started</Button>
                </Link>
              </div>
              <div className="hidden card-bullets-points md:grid grid-cols-1 md:grid-cols-2 px-8 py-4 md:px-8 md:py-16">
                <ul className="text-white text-left font-inter-light text-sm md:text-base list-disc list-outside p-4 lg:px-1 lg:py-16 md:flex md:flex-col md:justify-center list-image-[url(/icons/list-tick.png)]">
                  <li className="mb-2 md:mb-3">
                    Email Support & Backup Maintenance
                  </li>
                  <li className="mb-2 md:mb-3">Secure Hosting Services</li>
                  <li className="mb-2 md:mb-3">
                    Basic Profile Management Development
                  </li>
                  <li className="mb-2 md:mb-3">Regular Backup Maintenance</li>
                  <li className="mb-0 md:mb-0">24/7 Technical Support</li>
                </ul>
                <ul className="text-white text-left font-inter-light text-sm md:text-base list-disc list-outside pt-0 p-4 lg:px-10 lg:py-16 md:flex md:flex-col md:justify-center list-image-[url(/icons/list-tick.png)]">
                  <li className="mb-2 md:mb-3">Bug Fixing & Minor Updates</li>
                  <li className="mb-2 md:mb-3">Performance Optimization</li>
                  <li className="mb-0">System Monitoring & Alerts</li>
                </ul>
              </div>
            </div>
            <div className="shine-card"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesOurServices;
