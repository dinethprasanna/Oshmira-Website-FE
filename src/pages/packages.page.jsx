import BreadcrumbHeroSection from "@/components/siteSections/breadcrumbHeroSection";
import OurClientsLogoSlider from "@/components/siteSections/ourClientsLogoSlider";
import PackagesBottomCont from "@/components/siteSections/packagesBottomCont";
import PackagesShopifyPlan from "@/components/siteSections/packagesShopifyPlan";
import PackagesWebDevPlan from "@/components/siteSections/packagesWebDevPlan";

function PackagesPage() {
    return (
        <>
            <main className="mx-auto w-full min-h-[80vh]">
                <BreadcrumbHeroSection title={"Our"} gradientTitle={"Packages"} breadcrumb={'Home / Packages'}/>
                <PackagesWebDevPlan />
                <PackagesShopifyPlan />
                <PackagesBottomCont />
                <OurClientsLogoSlider />
            </main>
        </>
    );
}

export default PackagesPage;