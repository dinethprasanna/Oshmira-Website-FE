import { Button } from "@/components/ui/button"
import { Link, NavLink } from "react-router";
import { useState, useRef, useEffect } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const headerContainerRef = useRef();
    const [isScrolled, setIsScrolled] = useState(false);

    // Handle scroll event
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 2) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useGSAP(() => {
        const q = gsap.utils.selector(headerContainerRef); // scoped selector

        gsap.from(headerContainerRef.current, {
            zoom: 0.8,
            opacity: 0,
            delay: 0.6,
            ease: "power1.out",
            y: 40,
        });

        gsap.from(q(".desk-nav-links a"), {
            opacity: 0,
            x: 0,
            duration: 0.6,
            delay: 0.5,
            ease: "power1.out",
            stagger: {
                amount: 0.5,
            },
        });

        gsap.from(q(".header-logo", "nav-btn1"), {
            zoom: 0.8,
            opacity: 0,
            delay: 0.6,
            y: 0,
            ease: "power1.out",
        });
    }, { scope: headerContainerRef });


    return (
        <header ref={headerContainerRef} className="site-header mx-auto w-full max-w-full px-3 md:px-6 lg:px-4 fixed top-[16px] md:top-[24px] lg:top-[36px] text-white z-99">
            <div className="max-w-(--max-width) mx-auto w-full px-[18px] py-3 bg-(--bg-second-col) rounded-md relative">
                {/* desktop nav */}
                <div className="desktop-nav hidden lg:flex justify-between items-center gap-3">
                    <div className="">

                        <Link to="/" className="header-logo relative inline-block group w-fit">
                            {/* Default image */}
                            <img
                                src="/header/Oshmira-logo.png"
                                alt="Oshmira"
                                className="w-[100px] opacity-100 group-hover:opacity-0 transition-all"
                            />
                            {/* Hover image */}
                            <img
                                src="/header/Oshmira-logo-white.png"
                                alt="Oshmira Hover"
                                className="w-[100px] opacity-0 group-hover:opacity-100 absolute top-0 left-0 transition-all"
                            />
                        </Link>
                    </div>
                    <div className="desk-nav-links flex justify-center gap-6">
                        <NavLink to={'/'} className={({ isActive }) =>
                            `m-0 p-0 font-inter-semibold text-sm transition-colors hover:text-orange-500 ${isActive ? "text-orange-500" : "text-white"
                            }`
                        }>
                            Home
                        </NavLink>
                        <NavLink to={'/about-us'} className={({ isActive }) =>
                            `m-0 p-0 font-inter-semibold text-sm transition-colors hover:text-orange-500 ${isActive ? "text-orange-500" : "text-white"
                            }`
                        } >
                            About us
                        </NavLink>
                        <NavLink to={'/solutions'} className={({ isActive }) =>
                            `m-0 p-0 font-inter-semibold text-sm transition-colors hover:text-orange-500 ${isActive ? "text-orange-500" : "text-white"
                            }`
                        } >
                            Solutions
                        </NavLink>
                        <NavLink to={'/services'} className={({ isActive }) =>
                            `m-0 p-0 font-inter-semibold text-sm transition-colors hover:text-orange-500 ${isActive ? "text-orange-500" : "text-white"
                            }`
                        } >
                            Services
                        </NavLink>
                        <NavLink to={'/portfolio'} className={({ isActive }) =>
                            `m-0 p-0 font-inter-semibold text-sm transition-colors hover:text-orange-500 ${isActive ? "text-orange-500" : "text-white"
                            }`
                        } >
                            Portfolio
                        </NavLink>
                        <NavLink to={'/packages'} className={({ isActive }) =>
                            `m-0 p-0 font-inter-semibold text-sm transition-colors hover:text-orange-500 ${isActive ? "text-orange-500" : "text-white"
                            }`
                        } >
                            Packages
                        </NavLink>
                        <NavLink to={'/contact-us'} className={({ isActive }) =>
                            `m-0 p-0 font-inter-semibold text-sm transition-colors hover:text-orange-500 ${isActive ? "text-orange-500" : "text-white"
                            }`
                        } >
                            Contact us
                        </NavLink>
                    </div>
                    <div className="nav-btn1">
                        <Link to={'/contact-us'}>
                            <Button >Get started</Button>
                        </Link>
                    </div>
                </div>

                {/* Mobile nav with hamburge menu */}
                <div className="mobile-nav flex justify-between items-center lg:hidden">
                    <Link to="/" className="relative inline-block group">
                        {/* Default logo */}
                        <img
                            src="/header/Oshmira-logo.png"
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
                                    ? "/header/hamburge-menu-close.png"
                                    : "/header/hamburge-menu.png"
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
                    <NavLink to={'/'} className={({ isActive }) =>
                        `block text-sm font-semibold text-white hover:text-orange-500 ${isActive ? "text-orange-500" : "text-white"
                        }`
                    } >
                        Contact us
                    </NavLink>
                    <Link to="/" className="block text-sm font-semibold text-white hover:text-orange-500">Home</Link>
                    <Link to="/about-us" className="block text-sm font-semibold text-white hover:text-orange-500">About us</Link>
                    <Link to="/solutions" className="block text-sm font-semibold text-white hover:text-orange-500">Solutions</Link>
                    <Link to="/services" className="block text-sm font-semibold text-white hover:text-orange-500">Services</Link>
                    <Link to="/portfolio" className="block text-sm font-semibold text-white hover:text-orange-500">Portfolio</Link>
                    <Link to="/packages" className="block text-sm font-semibold text-white hover:text-orange-500">Packages</Link>
                    <Link to="/contact-us" className="block text-sm font-semibold text-white hover:text-orange-500">Contact us</Link>
                    <Link to="/contact-us">
                        <Button className="mt-2">Get started</Button>
                    </Link>
                </div>
            </div>
        </header >
    );
}

export default Header;