import { Button } from "@/components/ui/button";
import { Link } from "react-router";


function NotFoundPage() {
    return(
        <section className="404-section">
            <div className="relative w-full min-h-[100vh] overflow-hidden flex flex-col items-center justify-center">
                
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-3 md:px-6 lg:px-4 mt-[120px] mb-[40px] lg:mt-[216px] lg:mb-[140px] max-w-(--max-width) mx-auto w-full">
                    
                    <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-inter-semibold mx-auto mb-8">404</h1>

                    <p className='text-base md:text-lg font-inter-light text-white max-w-[512px] mx-auto mb-6'>Oops! Page not found</p>

                    <div className="btn-grp flex flex-col md:flex-row gap text-sm mb-12 md:mb-16 lg:mb-20">
                        <Link to={'/'}><Button>Back to Home</Button></Link>
                        <Link to={'/services'}><Button variant="link" className="font-inter-semibold transition-colors hover:text-orange-500">View Our Services <img src="/icons/right-white-arrow.png" alt="Arrow" /></Button></Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NotFoundPage;