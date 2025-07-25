import BreadcrumbHeroSection from "@/components/siteSections/breadcrumbHeroSection";
import AboutUsCompanyOverview from "@/components/siteSections/aboutUsCompanyOverview";
import AboutUsWorkingProcess from "@/components/siteSections/aboutUsWorkingProcess";
import AboutUsThinkMakeSolveSection from "@/components/siteSections/aboutUsThinkMakeSolve";

function AboutUsPage() {
    return (
        <>
            <main className="mx-auto w-full min-h-[80vh]">
                <BreadcrumbHeroSection title={"About"} gradientTitle={"Us"} breadcrumb={'Home / About Us'} />
                <AboutUsCompanyOverview />
                <AboutUsWorkingProcess />
                <AboutUsThinkMakeSolveSection />
            </main>
        </>
    )
}

export default AboutUsPage;