import BreadcrumbHeroSection from "@/components/siteSections/breadcrumbHeroSection";
import ContactCntForm from "@/components/siteSections/contactCntForm";
import CTA from "@/components/siteSections/cta";
import FAQ from "@/components/siteSections/faq";

function ContactUsPage() {
    return (
        <>
            <main className="mx-auto w-full min-h-[80vh]">
                <BreadcrumbHeroSection title={"Contact"} gradientTitle={"Us"} breadcrumb={'Home / Contact Us'}/>
                <ContactCntForm />
                <FAQ />
                <CTA />
            </main>
        </>
    );
}

export default ContactUsPage;