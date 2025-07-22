import { Link } from "react-router";

function Footer() {
    return (
        <footer className="mx-auto w-full px-3 md:px-6 lg:px-4 bg-(--bg-second-col)">
            <div className="max-w-(--max-width) mx-auto w-full">

                <div className="grid gap-10 row-gap-6 py-8 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="sm:col-span-2">
                        <Link
                            to="/"
                            className="inline-flex items-center"
                        >
                            <img
                                src="/header/Oshmira-logo.png"
                                alt="Oshmira"
                                className="w-[92px] md:w-[120px] lg:w-[160px] opacity-100 group-hover:opacity-0 transition-all"
                            />
                        </Link>
                        <div className="mt-6 lg:max-w-sm">
                            <p className="text-sm text-white font-inter-light">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                accusantium doloremque laudantium, totam rem aperiam.
                            </p>
                            <p className="mt-4 text-sm text-white font-inter-light">
                                Eaque ipsa quae ab illo inventore veritatis et quasi architecto
                                beatae vitae dicta sunt explicabo.
                            </p>
                        </div>
                    </div>
                    <div className="space-y-2 text-sm">
                        <p className="text-base text-white font-inter-semibold">
                            Contacts
                        </p>
                        <div className="flex">
                            <p className="mr-1 text-white font-inter-light">Phone:</p>
                            <a
                                href="tel:850-123-5021"
                                aria-label="Our phone"
                                title="Our phone"
                                className="duration-300 text-white font-inter-light transition-colors hover:text-orange-500"
                            >
                                850-123-5021
                            </a>
                        </div>
                        <div className="flex">
                            <p className="mr-1 text-white">Email:</p>
                            <a
                                href="mailto:info@lorem.mail"
                                aria-label="Our email"
                                title="Our email"
                                className="duration-300 text-white font-inter-light transition-colors hover:text-orange-500"
                            >
                                info@lorem.mail
                            </a>
                        </div>
                        <div className="flex">
                            <p className="mr-1 text-white font-inter-light">Address:</p>
                            <a
                                href="https://www.google.com/maps"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Our address"
                                title="Our address"
                                className="duration-300 text-white font-inter-light transition-colors hover:text-orange-500"
                            >
                                312 Lovely Street, NY
                            </a>
                        </div>
                    </div>
                    <div>
                        <span className="text-base text-white font-inter-semibold">
                            Social
                        </span>
                        <div className="flex items-center mt-1 space-x-3">
                            <a
                                href="/"
                                className="text-white font-inter-light transition-colors hover:text-orange-500"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="h-5 w-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M14,2 C15.1046,2 16,2.89543 16,4 C16,5.44733 17.03,6.6618 18.3984,6.93991 C19.4808,7.15992 20.1799,8.21575 19.9599,9.29819 C19.7399,10.3806 18.6841,11.0798 17.6016,10.8598 C17.0406,10.7457 16.5037,10.5646 16,10.3252 L16,16 C16,19.3137 13.3137,22 10,22 C6.68629,22 4,19.3137 4,16 C4,13.2015 5.91407,10.8551 8.50148,10.1891 C9.57119,9.91382 10.6616,10.5578 10.9369,11.6275 C11.2122,12.6972 10.5682,13.7876 9.49852,14.0629 C8.63547,14.285 8,15.0708 8,16 C8,17.1046 8.89543,18 10,18 C11.1046,18 12,17.1046 12,16 L12,4 C12,2.89543 12.8954,2 14,2 Z"
                                        
                                    />
                                </svg>
                            </a>

                            <a
                                href="/"
                                className="text-white font-inter-light transition-colors hover:text-orange-500"
                            >
                                <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                                    <circle cx="15" cy="15" r="4" />
                                    <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                                </svg>
                            </a>
                            <a
                                href="/"
                                className="text-white font-inter-light transition-colors hover:text-orange-500"
                            >
                                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                    <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                                </svg>
                            </a>
                        </div>
                        <p className="mt-4 text-sm text-white font-inter-light">
                            Bacon ipsum dolor amet short ribs pig sausage prosciutto chicken
                            spare ribs salami.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
                    <p className="text-sm text-white font-inter-light">
                        &copy; Copyright 2025 Lorem Inc. All rights reserved.
                    </p>
                    <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
                        <li>
                            <Link
                                to={'/faq'}
                                className="text-sm text-white font-inter-light transition-colors hover:text-orange-500"
                            >
                                F.A.Q
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={'/privacy-and-policy'}
                                className="text-sm text-white font-inter-light transition-colors hover:text-orange-500"
                            >
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={'/terms-and-conditions'}
                                className="text-sm text-white font-inter-light transition-colors hover:text-orange-500"
                            >
                                Terms &amp; Conditions
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;