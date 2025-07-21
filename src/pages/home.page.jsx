import HomeHero from "@/components/siteSections/homeHero";
import HomeOurServices from "@/components/siteSections/homeOurServices";

function HomePage() {
    return (
        <>
            <main className="mx-auto w-full min-h-[100vh]">
                <HomeHero />
                <HomeOurServices />
                {/* <div className="max-w-(--max-width) mx-auto w-full">
                    this is home div 1
                </div> */}
            </main>
        </>
    );
}

export default HomePage;