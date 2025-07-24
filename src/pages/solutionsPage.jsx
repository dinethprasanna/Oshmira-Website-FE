import BreadcrumbHeroSection from "@/components/siteSections/breadcrumbHeroSection";
import CTA from "@/components/siteSections/cta";
import SolutionsCardsGrid from "@/components/siteSections/solutionsCardsGrid";

function SolutionsPage() {
    return (
        <>
            <main className="mx-auto w-full min-h-[80vh]">
                <BreadcrumbHeroSection title={"Our"} gradientTitle={"Solutions"} breadcrumb={'Home / Solutions'}/>
                <SolutionsCardsGrid />
                <CTA />
            </main>
        </>
    );
}

export default SolutionsPage;