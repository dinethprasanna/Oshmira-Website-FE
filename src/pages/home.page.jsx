import CTA from "@/components/siteSections/cta";
import HomeHero from "@/components/siteSections/homeHero";
import HomeOurPortfolio from "@/components/siteSections/homeOurPortfolio";
import HomeOurServices from "@/components/siteSections/homeOurServices";
import HomeTestimonial from "@/components/siteSections/homeTestimonial";
import HomeWhyChooseUs from "@/components/siteSections/homeWhyChooseUs";
import OurClientsLogoSlider from "@/components/siteSections/ourClientsLogoSlider";
import RantoPosSection from "@/components/siteSections/rantoPosSection";

function HomePage() {
    return (
        <>
            <main className="mx-auto w-full min-h-[100vh]">
                <HomeHero />
                <HomeOurServices />
                <HomeWhyChooseUs />
                <HomeTestimonial />
                <HomeOurPortfolio />
                <OurClientsLogoSlider />
                <RantoPosSection />
                <CTA />
            </main>
        </>
    );
}

export default HomePage;