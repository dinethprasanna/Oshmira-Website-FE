import { Link } from "react-router";
import { Button } from "../ui/button";

function RantoPosSection() {
    return (
        <section className="ranto-pos-section relative w-full max-w-(--max-width) mx-auto px-3 md:px-6 lg:px-4 py-8 md:py-16 lg:py-24">
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-9 lg:gap-12 py-8 md:py-9 lg:py-12 px-8 md:px-9 lg:px-12 rounded-md bg-(--bg-second-col)">
                <div className="ranto-pos-info col-span-1 md:col-span-2 flex flex-col justify-center">
                    <h2 className="text-white text-center md:text-left font-inter-semibold text-2xl md:text-3xl lg:text-4xl mb-4 lg:mb-5"><span className='gradient-text-anime'>Ranto POS</span></h2>
                    <p className="font-inter-light text-white text-center md:text-left text-base md:text-lg max-w-[496px] mb-6 mx-auto md:mx-0">
                        A smart, user-friendly billing system to manage sales, inventory, and customers - all in one place. Fast, reliable, and fully customizable for your business needs.
                    </p>
                    <img src="../src/assets/global/ranto-pos-banner.png" alt="Ranto POS" className="block md:hidden max-w-[400px] mx-auto lg:max-w-full w-full h-auto mb-6" />
                    <ul className="text-white text-left font-inter-thin text-sm md:text-base list-disc list-outside pl-5 ">
                        <li>Streamline your business operations</li>
                        <li>Print bills instantly and professionally</li>
                        <li>Track sales, inventory & customers -all in one place</li>
                        <li>100% customizable to suit your needs</li>
                    </ul>
                    <div className="btn-grp flex flex-col items-center md:items-start md:flex-row gap text-sm mt-6 lg:mt-8">
                        <Link to={'/'}><Button>Get Started</Button></Link>
                    </div>
                </div>
                <div className="ranto-pos-banner col-span-1 md:col-span-2 lg:col-span-3 md:flex flex-col justify-center hidden">
                    <img src="../src/assets/global/ranto-pos-banner.png" alt="Ranto POS" className="max-w-[400px] mx-auto lg:max-w-full w-full h-auto block" />
                </div>
            </div>
        </section>
    )
}

export default RantoPosSection;