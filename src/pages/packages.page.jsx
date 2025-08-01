import BreadcrumbHeroSection from "@/components/siteSections/breadcrumbHeroSection";
import CTA from "@/components/siteSections/cta";
import PackagesWebDevPlan from "@/components/siteSections/packagesWebDevPlan";

function PackagesPage() {
    return (
        <>
            <main className="mx-auto w-full min-h-[80vh]">
                <BreadcrumbHeroSection title={"Our"} gradientTitle={"Packages"} breadcrumb={'Home / Packages'}/>
                <PackagesWebDevPlan />
                <CTA />
            </main>
        </>
    );
}

export default PackagesPage;