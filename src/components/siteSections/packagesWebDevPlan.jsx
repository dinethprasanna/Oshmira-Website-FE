import PortfolioCard from './portfolioCard';
import { Link } from 'react-router';
import { Button } from '../ui/button';
import Aos from 'aos';
import 'aos/dist/aos.css';


function PackagesWebDevPlan() {
    Aos.init({ duration: 2000 });
    return (
        <section className="our-web-dev-pricing-plan-section relative w-full max-w-(--max-width) mx-auto px-3 md:px-6 lg:px-4 py-8 md:py-16 lg:py-24">

            <div className="container mx-auto px-4 py-12 md:py-20 text-white">

                <h2 className="text-3xl md:text-4xl font-bold text-left mb-4">Product Plans</h2>
                <p className="text-left text-white mb-10 md:mb-16">Select the plan that best suits your
                    requirements.</p>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full mx-auto">

                    {/* <!-- Plan 1: Basic --> */}
                    <div className="bg-(--bg-second-col) rounded-lg shadow-lg p-6 flex flex-col border border-gray-700">
                        <h3 className="text-xl font-semibold mb-4">Basic Plan</h3>
                        <div className="mb-6">
                            <span className="text-4xl font-bold">$0</span>
                            <span className="text-sm  ">/ unit</span>
                        </div>
                        <p className="  mb-6 text-sm">
                            Brief description of the basic plan and its target user.
                        </p>
                        <button className="w-full bg-gray-200 bg-gray-600 text-gray-800 text-white py-2 px-4 rounded-md font-semibold hover:bg-gray-300 hover:bg-gray-500 transition duration-200 mb-8">
                            Current Plan
                        </button>
                        <ul className="space-y-3 text-sm feature-list   flex-grow">
                            <li className="flex items-start">
                                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Feature Number One</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Second Included Feature</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Third Core Benefit</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Basic Feature Four</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Limited Feature Five</span>
                            </li>
                        </ul>
                        <p className="text-xs   mt-6 text-center">
                            Additional information or link <a href="#" className="underline hover:text-indigo-500">here</a>
                        </p>
                    </div>

                    {/* <!-- Plan 2: Plus / Recommended --> */}
                    <div
                        className="bg-(--bg-second-col) rounded-lg shadow-lg p-6 flex flex-col border-2 border-indigo-500 border-indigo-400 relative">
                        <span className="absolute top-0 right-4 -mt-3 bg-indigo-500 bg-indigo-400 text-white text-gray-900 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">Recommended</span>
                        <h3 className="text-xl font-semibold mb-4">Plus Plan</h3>
                        <div className="mb-6">
                            <span className="text-4xl font-bold">$XX</span>
                            <span className="text-sm  ">/ unit</span>
                        </div>
                        <p className="  mb-6 text-sm">
                            Description highlighting the value proposition of the plus plan.
                        </p>
                        <button className="w-full bg-indigo-500 bg-indigo-400 text-white text-gray-900 py-2 px-4 rounded-md font-semibold hover:bg-indigo-600 hover:bg-indigo-500 transition duration-200 mb-8">
                            Choose Plus Plan
                        </button>
                        <ul className="space-y-3 text-sm feature-list   flex-grow">
                            <li className="flex items-start">
                                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Everything in Basic Plan</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Enhanced Feature One</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Additional Feature Two</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Improved Feature Three</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Extra Benefit Four</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Priority Feature Five</span>
                            </li>
                        </ul>
                        <p className="text-xs   mt-6 text-center">
                            <a href="#" className="underline hover:text-indigo-500">Usage limits apply</a>
                        </p>
                    </div>

                    {/* <!-- Plan 3: Pro --> */}
                    <div className="bg-(--bg-second-col) rounded-lg shadow-lg p-6 flex flex-col border border-gray-700">
                        <h3 className="text-xl font-semibold mb-4">Pro Plan</h3>
                        <div className="mb-6">
                            <span className="text-4xl font-bold">$YYY</span>
                            <span className="text-sm  ">/ unit</span>
                        </div>
                        <p className="  mb-6 text-sm">
                            Comprehensive solution for advanced users or teams.
                        </p>
                        <button className="w-full bg-gray-900 bg-gray-100 text-white text-gray-900 py-2 px-4 rounded-md font-semibold hover:bg-gray-700 hover:bg-gray-200 transition duration-200 mb-8">
                            Select Pro Plan
                        </button>
                        <ul className="space-y-3 text-sm feature-list   flex-grow">
                            <li className="flex items-start">
                                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Everything in Plus Plan</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Premium Feature One</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Advanced Feature Two</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Exclusive Feature Three</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Top-Tier Benefit Four</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Dedicated Support Feature</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Unlimited Feature Six</span>
                            </li>
                        </ul>
                        <p className="text-xs   mt-6 text-center">
                            <a href="#" className="underline hover:text-indigo-500">Learn more</a> about Pro benefits.
                        </p>
                    </div>

                </div>

            </div>           

        </section>
    )
}

export default PackagesWebDevPlan;