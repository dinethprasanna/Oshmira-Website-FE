import PortfolioCard from './portfolioCard';

import Aos from 'aos';
import 'aos/dist/aos.css';

const portfolioCards = [
    {
        portfolioName: "Veronisa Tour (Pvt)Ltd",
        portfolioUrl: "Veronisatours.lk",
        portfolioImg: "./pages/portfolio/veronisa-tour.png"
    },
    {
        portfolioName: "E-Kadamandiya (Pvt) Ltd",
        portfolioUrl: "ekadamandiya.com",
        portfolioImg: "./pages/portfolio/e-kadamandiya.png"
    },
    {
        portfolioName: "Booksevoke Institute",
        portfolioUrl: "booksevoke.net",
        portfolioImg: "./pages/portfolio/booksevoke-institute.png"
    },
    {
        portfolioName: "Tourlions (Pvt)Ltd",
        portfolioUrl: "tourlions.com",
        portfolioImg: "./pages/portfolio/tourlions.png"
    },
    {
        portfolioName: "Dels super (Pvt) ltd",
        portfolioUrl: "delsupers.com",
        portfolioImg: "./pages/portfolio/dels-super.png"
    },
    {
        portfolioName: "Globaltrans Logistic (Pvt)Ltd",
        portfolioUrl: "gtl.com",
        portfolioImg: "./pages/portfolio/globaltrans-logistic.png"
    },
    {
        portfolioName: "Phoenix decorators (Pvt)Ltd",
        portfolioUrl: "phoenixdecorator.com",
        portfolioImg: "./pages/portfolio/phoenix-decorators.png"
    },
    {
        portfolioName: "CTH Cricketshop(Pvt)Ltd",
        portfolioUrl: "ctc.oshmira.com",
        portfolioImg: "./pages/portfolio/cth-cricketshop.png"
    },
    {
        portfolioName: "Emromedia",
        portfolioUrl: "Emromedia.com",
        portfolioImg: "./pages/portfolio/emromedia.png"
    },
    {
        portfolioName: "Angi\'s Property Group",
        portfolioUrl: "angiscleaning.com.au",
        portfolioImg: "./pages/portfolio/angis-property-group.png"
    },
];


function PortfolioAllWorksGrid() {
    Aos.init({duration:2000});
    return (
        <section className="our-portfolio-all-work-section relative w-full max-w-(--max-width) mx-auto px-3 md:px-6 lg:px-4 py-8 md:py-16 lg:py-24">
            <div className="our-portfolio-label label-border-animation py-2 px-2 rounded-md bg-(--bg-second-col) block mb-6 max-w-fit min-w-[120px] md:min-w-[186px] mx-auto" data-aos="zoom-in">
                <p className="font-inter-semibold text-white text-xs text-center">
                    Built to Impress
                </p>
            </div>
            <h2 className="text-white text-center font-inter-semibold text-2xl md:text-3xl lg:text-4xl mb-3 max-w-[520px] mx-auto" data-aos="fade-up">
                Discover the Projects That Brought Ideas to Life
            </h2>

            <div className="portfolio-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 md:mt-5 lg:mt-6" data-aos="fade-up">
                    {portfolioCards.map((item, index) => (
                        <div
                            key={index}
                            className="block mx-auto"
                        >
                            <PortfolioCard
                                portfolioName={item.portfolioName}
                                portfolioUrl={item.portfolioUrl}
                                portfolioImg={item.portfolioImg}
                            />
                        </div>
                    ))}
            </div>
            
        </section>
    )
}

export default PortfolioAllWorksGrid;