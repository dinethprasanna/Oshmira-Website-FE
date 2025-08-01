import BreadcrumbHeroSection from "@/components/siteSections/breadcrumbHeroSection";
import CTA from "@/components/siteSections/cta";
import PrivacyPolicyContent from "@/components/siteSections/privacyPolicyContent";


function PrivacyPolicyPage() {
    return (
        <>
            <main className="mx-auto w-full min-h-[80vh]">
                <BreadcrumbHeroSection title={"Our"} gradientTitle={"Privacy Policy"} breadcrumb={'Home / Privacy Policy'}/>
                <PrivacyPolicyContent />
                <CTA />
            </main>
        </>
    );
}

export default PrivacyPolicyPage;