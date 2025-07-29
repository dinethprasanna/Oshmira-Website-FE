import BreadcrumbHeroSection from "@/components/siteSections/breadcrumbHeroSection";
import CTA from "@/components/siteSections/cta";
import PortfolioAllWorksGrid from "@/components/siteSections/portfolioAllWorksGrid";

function PortfolioPage() {
    return (
        <>
            <main className="mx-auto w-full min-h-[80vh]">
                <BreadcrumbHeroSection title={"Our"} gradientTitle={"Portfolio"} breadcrumb={'Home / Portfolio'}/>
                <PortfolioAllWorksGrid />
                <CTA />
            </main>
        </>
    );
}

export default PortfolioPage;