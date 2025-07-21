function HomeOurPortfolio() {
    return (
        <section className="home-our-portfolio-section relative w-full max-w-(--max-width) mx-auto px-3 md:px-6 lg:px-4 py-8 md:py-16 lg:py-24">
            <div className="our-portfolio-label label-border-animation py-2 px-2 rounded-md bg-(--bg-second-col) block mb-6 max-w-fit min-w-[120px] md:min-w-[186px] mx-auto">
                <p className="font-inter-semibold text-white text-xs text-center">
                    Built to Impress
                </p>
            </div>
            <h2 className="text-white text-center font-inter-semibold text-2xl md:text-3xl lg:text-4xl mb-3">Our <span className='gradient-text-anime'>Portfolio</span></h2>
            <p className='text-base md:text-lg font-inter-thin text-white text-center max-w-[820px] mx-auto mb-6'>Every pixel tells a story. Our work showcases a blend of strategy, creativity, and craft built not just to look good, but to deliver real results. Explore how we turn ideas into stunning digital experiences.</p>
        </section>
    )
}

export default HomeOurPortfolio;