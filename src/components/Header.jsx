import { Button } from "@/components/ui/button"
import { Link } from "react-router";
import { useState } from 'react';

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    return (
        <header className="mx-auto w-full px-3 md:px-6 lg:px-4 fixed top-[16px] md:top-[24px] lg:top-[36px] text-white z-99">
            <div className="max-w-(--max-width) mx-auto w-full px-[18px] py-3 bg-(--bg-second-col) rounded-md relative">
                {/* desktop nav */}
                <div className="desktop-nav hidden lg:flex justify-between items-center gap-3">
                    <div className="">

                        <Link to="/" className="relative inline-block group w-fit">
                            {/* Default image */}
                            <img
                                src="../src/assets/header/Oshmira-logo.png"
                                alt="Oshmira"
                                className="w-[100px] opacity-100 group-hover:opacity-0 transition-all"
                            />
                            {/* Hover image */}
                            <img
                                src="../src/assets/header/Oshmira-logo-white.png"
                                alt="Oshmira Hover"
                                className="w-[100px] opacity-0 group-hover:opacity-100 absolute top-0 left-0 transition-all"
                            />
                        </Link>
                    </div>
                    <div className="flex justify-center gap-6">
                        <Link to={'/'}>
                            <p className="m-0 p-0 font-inter-semibold text-white text-sm transition-colors hover:text-orange-500">Home</p>
                        </Link>
                        <Link to={'/about-us'}>
                            <p className="m-0 p-0 font-inter-semibold text-white text-sm transition-colors hover:text-orange-500">About us</p>
                        </Link>
                        <Link to={'/solutions'}>
                            <p className="m-0 p-0 font-inter-semibold text-white text-sm transition-colors hover:text-orange-500">Solutions</p>
                        </Link>
                        <Link to={'/products'}>
                            <p className="m-0 p-0 font-inter-semibold text-white text-sm transition-colors hover:text-orange-500">Products</p>
                        </Link>
                        <Link to={'/services'}>
                            <p className="m-0 p-0 font-inter-semibold text-white text-sm transition-colors hover:text-orange-500">Services</p>
                        </Link>
                        <Link to={'/portfolio'}>
                            <p className="m-0 p-0 font-inter-semibold text-white text-sm transition-colors hover:text-orange-500">Portfolio</p>
                        </Link>
                        <Link to={'/contact-us'}>
                            <p className="m-0 p-0 font-inter-semibold text-white text-sm transition-colors hover:text-orange-500">Contact us</p>
                        </Link>
                    </div>
                    <div className="">
                        <Link to={'/'}>
                            <Button >Get started</Button>
                        </Link>
                    </div>
                </div>

                {/* Mobile nav with hamburge menu */}
                <div className="mobile-nav flex justify-between items-center lg:hidden">
                    <Link to="/" className="relative inline-block group">
                        {/* Default logo */}
                        <img
                            src="../src/assets/header/Oshmira-logo.png"
                            alt="Oshmira"
                            className="w-[90px]"
                        />
                    </Link>

                    <button
                        className="text-white text-3xl focus:outline-none"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <img
                            src={
                                isMobileMenuOpen
                                    ? "../src/assets/header/hamburge-menu-close.png"
                                    : "../src/assets/header/hamburge-menu.png"
                            }
                            alt="Oshmira"
                            className="w-[24px] transition-all"
                        />
                    </button>
                </div>




                <div className="nav-animate-border rounded-md"></div>
            </div>
            {/* Mobile menu links dropdown */}
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out rounded-md bg-(--bg-second-col) mt-6`}
                style={{
                    maxHeight: isMobileMenuOpen ? '1000px' : '0px',
                    boxShadow: isMobileMenuOpen ? '0 0 0 10000px #490800d1' : 'none',
                    transition: 'all 0.3s ease',
                    overflow: 'hidden'
                }}
            >
                <div className="p-6 border-b-2 border-white flex flex-col gap-4">
                    <Link to="/" className="block text-sm font-semibold text-white hover:text-orange-500">Home</Link>
                    <Link to="/about-us" className="block text-sm font-semibold text-white hover:text-orange-500">About us</Link>
                    <Link to="/solutions" className="block text-sm font-semibold text-white hover:text-orange-500">Solutions</Link>
                    <Link to="/products" className="block text-sm font-semibold text-white hover:text-orange-500">Products</Link>
                    <Link to="/services" className="block text-sm font-semibold text-white hover:text-orange-500">Services</Link>
                    <Link to="/portfolio" className="block text-sm font-semibold text-white hover:text-orange-500">Portfolio</Link>
                    <Link to="/contact-us" className="block text-sm font-semibold text-white hover:text-orange-500">Contact us</Link>
                    <Link to="/">
                        <Button className="mt-2">Get started</Button>
                    </Link>
                </div>
            </div>
        </header >
    );
}

export default Header;