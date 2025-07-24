import BreadcrumbHeroSection from "@/components/siteSections/breadcrumbHeroSection";
import ContactCntForm from "@/components/siteSections/contactCntForm";
import CTA from "@/components/siteSections/cta";

function ContactUsPage() {
    return (
        <>
            <main className="mx-auto w-full min-h-[80vh]">
                <BreadcrumbHeroSection title={"Contact"} gradientTitle={"Us"} breadcrumb={'Home / Contact Us'}/>
                <ContactCntForm />
                <CTA />
            </main>
        </>
    );
}

export default ContactUsPage;