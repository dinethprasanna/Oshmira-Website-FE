import BreadcrumbHeroSection from "@/components/siteSections/breadcrumbHeroSection";
import CTA from "@/components/siteSections/cta";
import TermsConditionContent from "@/components/siteSections/termsConditionContent";


function TermsConditionsPage() {
    return (
        <>
            <main className="mx-auto w-full min-h-[80vh]">
                <BreadcrumbHeroSection title={"Our"} gradientTitle={"Terms & Conditions"} breadcrumb={'Home / Terms & Conditions'}/>
                <TermsConditionContent />
                <CTA />
            </main>
        </>
    );
}

export default TermsConditionsPage;