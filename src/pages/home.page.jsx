import HomeHero from "@/components/siteSections/homeHero";
import HomeOurPortfolio from "@/components/siteSections/homeOurPortfolio";
import HomeOurServices from "@/components/siteSections/homeOurServices";
import HomeTestimonial from "@/components/siteSections/homeTestimonial";
import HomeWhyChooseUs from "@/components/siteSections/homeWhyChooseUs";

function HomePage() {
    return (
        <>
            <main className="mx-auto w-full min-h-[100vh]">
                <HomeHero />
                <HomeOurServices />
                <HomeWhyChooseUs />
                <HomeTestimonial />
                <HomeOurPortfolio />
            </main>
        </>
    );
}

export default HomePage;