import BreadcrumbHeroSection from "@/components/siteSections/breadcrumbHeroSection";
import CTA from "@/components/siteSections/cta";
import ServicesOurServices from "@/components/siteSections/servicesOurServices";
import ServicesOurSubServices from "@/components/siteSections/servicesOurSubServices";


function ServicesPage() {
    return (
        <>
            <main className="mx-auto w-full min-h-[80vh]">
                <BreadcrumbHeroSection title={"Our"} gradientTitle={"Services"} breadcrumb={'Home / Services'}/>
                <ServicesOurServices />
                <ServicesOurSubServices />
                <CTA />
            </main>
        </>
    );
}

export default ServicesPage;