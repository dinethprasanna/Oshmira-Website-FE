import CTA from "@/components/siteSections/cta";
import HomeOurServices from "@/components/siteSections/homeOurServices";
import OurClientsLogoSlider from "@/components/siteSections/ourClientsLogoSlider";


function ServicesPage() {
    return (
        <>
            <main className="mx-auto w-full min-h-[80vh]">
                
                <HomeOurServices />                
                <OurClientsLogoSlider />
                <CTA />
            </main>
        </>
    );
}

export default ServicesPage;