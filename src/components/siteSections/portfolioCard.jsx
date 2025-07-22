function PortfolioCard({ portfolioName, portfolioUrl, portfolioImg }) {
    return (
        <div className="bg-transparent rounded-3xl p-2 min-h-[240px] max-w-[300px] md:max-w-[382px] text-center w-full h-full block shine-card-overlay">
            <div className="relative flex flex-col justify-between h-full gap-4">
                <div className="portfolio-img">
                    <img className="w-full h-auto mx-auto block" src={portfolioImg} alt={portfolioName} />
                </div>
                <div className="porfolio-info text-left flex flex-col gap-1.5 absolute bottom-0 p-4">
                    <p className="text-white leading-none font-inter-medium text-sm md:text-base mb-1">{portfolioName}</p>
                    <p className="text-white font-inter-thin text-xs md:text-sm">{portfolioUrl}</p>
                </div>
            </div>
            <div className="shine-card"></div>
        </div>
    )
}

export default PortfolioCard;