function BreadcrumbHeroSection({ title, breadcrumb }) {
    return (
        <section className="breadcrumb-hero-section">
            <div className="relative w-full min-h-[60vh] overflow-hidden flex flex-col items-center justify-center">
                {/* Lottie Background */}
                <div
                    ref={containerRef}
                    className="absolute pointer-events-none lottie-container"
                />

                {/* Overlay content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-3 md:px-6 lg:px-4 mt-[120px] mb-[40px] lg:mt-[216px] lg:mb-[140px] max-w-(--max-width) mx-auto w-full" data-aos="zoom-in">
                    
                    <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-inter-semibold mx-auto mb-8">Smart Digital Solutions <br className='hidden lg:block' />
                        For your{" "} <span className='gradient-text-anime'>Business Growth</span></h1>

                    <p className='text-base md:text-lg font-inter-thin text-white max-w-[512px] mx-auto mb-6'>Expert development and  Ai Powered Annotation Solutions
                        For a Smarter workforce and Better Data</p>

                    
                </div>
            </div>

        </section>
    )
}

export default BreadcrumbHeroSection; 