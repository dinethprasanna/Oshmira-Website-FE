import BreadcrumbHeroSection from "@/components/siteSections/breadcrumbHeroSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { useEffect, useRef } from "react";

function SolutionRantoPosPage() {
  useEffect(() => {
    const playButton = document.getElementById("play-button");
    const thumbnail = document.getElementById("thumbnail");
    const videoContainer = document.getElementById("video");

    if (playButton && thumbnail && videoContainer) {
      const handleClick = () => {
        thumbnail.classList.add("hidden");
        videoContainer.classList.remove("hidden");
      };

      playButton.addEventListener("click", handleClick);

      // Cleanup on unmount
      return () => {
        playButton.removeEventListener("click", handleClick);
      };
    }
  }, []);

  return (
    <>
      <main className="mx-auto w-full min-h-[80vh]">
        <BreadcrumbHeroSection
          title={"Our"}
          gradientTitle={"Solution"}
          breadcrumb={"Home / Solutions / POS Product"}
        />

        <section className="ranto-pos-overview-section relative w-full max-w-(--max-width) mx-auto px-3 md:px-6 lg:px-4 py-8 md:py-16 lg:py-24">
          <div
            className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-9 lg:gap-12 py-8 md:py-9 lg:py-12 px-8 md:px-9 lg:px-12 rounded-md bg-(--bg-second-col) shadow-[-1px_1px_2px_rgba(255,255,255,0.4)_inset]"
            data-aos="zoom-in-up"
          >
            <div
              className="ranto-pos-info col-span-1 md:col-span-2 flex flex-col justify-center"
              data-aos="fade-right"
            >
              <h2 className="text-white text-center md:text-left font-inter-semibold text-2xl md:text-3xl lg:text-4xl mb-4 lg:mb-5">
                <span className="gradient-text-anime">Point of Sales</span>{" "}
                <br /> Software For Growing Business
              </h2>
              <p className="font-inter-light text-white text-center md:text-left text-base md:text-lg max-w-[496px] mb-6 mx-auto md:mx-0">
                innovative and intuitive solutions for modern retail business{" "}
              </p>
            </div>
            <div
              className="ranto-pos-banner col-span-1 md:col-span-2 lg:col-span-3 flex flex-col justify-center"
              data-aos="fade-left"
            >
              <img
                src="/global/ranto-pos-banner.png"
                alt="Ranto POS"
                className="max-w-[400px] mx-auto lg:max-w-full w-full h-auto block"
              />
            </div>

            <div className="md:border-t-1 md:border-slate-400 col-span-1 md:col-span-4 lg:col-span-5 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 pb-2 pt-8 md:py-9 lg:py-12 px-8 md:px-9 lg:px-12 bg-(--bg-second-col)">
              <div className="info-card text-center flex flex-col justify-center px-0 py-4 md:p-8 border-b-2 border-r-0 md:border-r-2 md:border-b-0 border-slate-400 ">
                <h3 className="text-white text-base md:text-lg lg:text-xl font-inter-semibold">
                  Online & Offline Support
                </h3>
              </div>
              <div className="info-card text-center flex flex-col justify-center px-0 py-4  md:p-8 border-b-2 border-r-0 md:border-b-0 md:border-r-2 md:border-slate-400 ">
                <h3 className="text-white text-base md:text-lg lg:text-xl font-inter-semibold">
                  Works with internet connection and in offline mode
                </h3>
              </div>
              <div className="info-card  text-center flex flex-col justify-center px-0 py-4 md:p-8 ">
                <h3 className="text-white text-base md:text-lg lg:text-xl font-inter-semibold">
                  Cloud sync when online (for premium plans)
                </h3>
              </div>
            </div>
          </div>
        </section>

        <section className="ranto-pos-features-section relative w-full max-w-(--max-width) mx-auto px-3 md:px-6 lg:px-4 py-6 md:py-8 lg:py-10">
          <div className="pos-info mb-10 md:mb-12 lg:mb-18">
            <p className="underline font-inter-medium text-white text-left text-base md:text-lg mb-6 mx-auto md:mx-0">
              Descriptions
            </p>
            <p className="font-inter-light text-white text-left text-base md:text-lg mb-6 mx-auto md:mx-0">
              <b>Ranto POS</b> is an all-in-one Point of Sale system designed to
              simplify operations and maximize efficiency for retail and service
              businesses. Whether you're managing a grocery store, apparel
              outlet, electronics shop, pharmacy, or restaurant, Ranto POS
              adapts to your needs. From smart billing and real-time stock
              management to customer tracking and detailed reporting, Ranto POS
              helps eliminate the chaos of manual processes - giving you better
              control, higher profits, and satisfied
            </p>
          </div>

          <div className="pos-info mb-10 md:mb-12 lg:mb-18">
            <p className="underline font-inter-medium text-white text-left text-base md:text-lg mb-6 mx-auto md:mx-0">
              Key Features
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
              <div className="key-lists-left">
                <div className="mb-5 md:mb-8">
                  <p className="font-inter-light text-white text-left text-base md:text-lg mb-3 mx-auto md:mx-0">
                    Sales Management
                  </p>
                  <div className="font-inter-light text-white text-left text-base md:text-lg ">
                    <ul className="text-white text-left font-inter-light text-sm md:text-base list-disc list-outside pl-5 ">
                      <li>Retail and wholesale billing.</li>
                      <li>Discount handling (fixed and percentage).</li>
                      <li>Customer loyalty points system.</li>
                      <li>Barcode scanning & generation.</li>
                    </ul>
                  </div>
                </div>

                <div className="mb-5 md:mb-8">
                  <p className="font-inter-light text-white text-left text-base md:text-lg mb-3 mx-auto md:mx-0">
                    Inventory Management
                  </p>
                  <div className="font-inter-light text-white text-left text-base md:text-lg ">
                    <ul className="text-white text-left font-inter-light text-sm md:text-base list-disc list-outside pl-5 ">
                      <li>Real-time stock updates.</li>
                      <li>Item categorization and supplier tracking.</li>
                      <li>Low stock alerts.</li>
                    </ul>
                  </div>
                </div>

                <div className="mb-5 md:mb-8">
                  <p className="font-inter-light text-white text-left text-base md:text-lg mb-3 mx-auto md:mx-0">
                    {" "}
                    Repair Management
                  </p>
                  <div className="font-inter-light text-white text-left text-base md:text-lg ">
                    <ul className="text-white text-left font-inter-light text-sm md:text-base list-disc list-outside pl-5 ">
                      <li>Device repair tracking.</li>
                      <li>Customer notifications (SMS/Email optional).</li>
                      <li>Status updates and technician assignment.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="key-lists-right">
                <div className="mb-5 md:mb-8">
                  <p className="font-inter-light text-white text-left text-base md:text-lg mb-3 mx-auto md:mx-0">
                    Customer Management
                  </p>
                  <div className="font-inter-light text-white text-left text-base md:text-lg ">
                    <ul className="text-white text-left font-inter-light text-sm md:text-base list-disc list-outside pl-5 ">
                      <li>Customer profiles and history.</li>
                      <li>Loyalty points system.</li>
                      <li>Credit sales and payment tracking.</li>
                    </ul>
                  </div>
                </div>

                <div className="mb-5 md:mb-8">
                  <p className="font-inter-light text-white text-left text-base md:text-lg mb-3 mx-auto md:mx-0">
                    Reporting
                  </p>
                  <div className="font-inter-light text-white text-left text-base md:text-lg ">
                    <ul className="text-white text-left font-inter-light text-sm md:text-base list-disc list-outside pl-5 ">
                      <li>Profit & Loss Report.</li>
                      <li>Purchase Report.</li>
                      <li>Purchase Return Report.</li>
                      <li>Purchase Payments Report.</li>
                      <li>Item Sales Report.</li>
                      <li>Item Purchase Report.</li>
                      <li>New Sales Report.</li>
                      <li>Sales Return Report.</li>
                      <li>Sales Payments Report.</li>
                      <li>Stock Report.</li>
                      <li>Expense Report.</li>
                      <li>Expired Items Report.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ranto-pos-video-section relative w-full max-w-(--max-width) mx-auto px-3 md:px-6 lg:px-4 py-6 md:py-8 lg:py-10">
          <div className="container mx-auto px-4 relative z-10 mb-28">
            <div className="w-full mx-auto">
              <div
                className="relative rounded-xl overflow-hidden shadow-2xl"
                id="video-container"
              >
                <div id="thumbnail" className="relative">
                  <img
                    src="/pages/ranto-pos/ranto-pos-video-thumbnail.png"
                    alt="Video thumbnail"
                    className="w-full aspect-video object-contain object-center cursor-pointer"
                    id="play-button"
                  />
                </div>

                <div id="video" className="hidden aspect-video relative ">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                    title="The Artist Barefoot Showcase"
                    frameBorder="0"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ranto-pos-comparison-section relative w-full max-w-(--max-width) mx-auto px-3 md:px-6 lg:px-4 pb-12 md:pb-18 lg:pb-24">
          <div className="shadow-xl rounded-lg overflow-hidden w-full border border-gray-200">
            <div className="md:hidden">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-white text-center mb-4">
                  Manual System
                </h2>
                <div className="text-center mb-4">
                  <span className="text-white">/mo</span>
                  <p className="text-white mt-1 font-inter-light text-base md:text-lg">
                    No credit card required
                  </p>
                </div>
                <ul className="space-y-3 my-6 text-sm text-white">
                  <li className="flex items-center justify-between text-base md:text-lg">
                    <span>Inventory Management</span>
                    <img
                      src="/icons/cross.png"
                      alt="cross"
                      className="ml-2 w-[56px] h-auto object-contain"
                    />
                  </li>
                  <li className="flex items-center justify-between text-base md:text-lg">
                    <span>Barcode Billing</span>
                    <img
                      src="/icons/cross.png"
                      alt="cross"
                      className="ml-2 w-[56px] h-auto object-contain"
                    />
                  </li>
                  <li className="flex items-center justify-between text-base md:text-lg">
                    <span>Sales & Profit Reports</span>
                    <img
                      src="/icons/cross.png"
                      alt="cross"
                      className="ml-2 w-[56px] h-auto object-contain"
                    />
                  </li>
                  <li className="flex items-center justify-between text-base md:text-lg">
                    <span>Customer Loyalty Tracking</span>
                    <img
                      src="/icons/cross.png"
                      alt="cross"
                      className="ml-2 w-[56px] h-auto object-contain"
                    />
                  </li>
                  <li className="flex items-center justify-between text-white text-base md:text-lg">
                    <span>Role-Based User Access</span>
                    <img
                      src="/icons/cross.png"
                      alt="cross"
                      className="ml-2 w-[56px] h-auto object-contain"
                    />
                  </li>
                  <li className="flex items-center justify-between text-white text-base md:text-lg">
                    <span>Multi-Payment Support</span>
                    <img
                      src="/icons/cross.png"
                      alt="cross"
                      className="ml-2 w-[56px] h-auto object-contain"
                    />
                  </li>
                  <li className="flex items-center justify-between text-white text-base md:text-lg">
                    <span>Cloud-Based Access</span>
                    <img
                      src="/icons/cross.png"
                      alt="cross"
                      className="ml-2 w-[56px] h-auto object-contain"
                    />
                  </li>
                  <li className="flex items-center justify-between text-white text-base md:text-lg">
                    <span>Expiry Alerts (Pharmacy Support)</span>
                    <img
                      src="/icons/cross.png"
                      alt="cross"
                      className="ml-2 w-[56px] h-auto object-contain"
                    />
                  </li>
                  <li className="flex items-center justify-between text-white text-base md:text-lg">
                    <span>Table Management (Restaurant Mode)</span>
                    <img
                      src="/icons/cross.png"
                      alt="cross"
                      className="ml-2 w-[56px] h-auto object-contain"
                    />
                  </li>
                  <li className="flex items-center justify-between text-white text-base md:text-lg">
                    <span>Data Security & Backup</span>
                    <img
                      src="/icons/cross.png"
                      alt="cross"
                      className="ml-2 w-[56px] h-auto object-contain"
                    />
                  </li>
                </ul>                
              </div>

              <div className="p-6 border-t-4 border-t-green-500">
                <h2 className="text-2xl font-bold text-white text-center mb-4">
                  Ranto POS System
                </h2>                
                <ul className="space-y-3 my-6 text-white text-base md:text-lg">
                  <li className="flex items-center justify-between">
                    <span>Inventory Management</span>
                    <img
                      src="/icons/tick.png"
                      alt="tick"
                      className="ml-2 w-[56px] h-auto object-contain"
                    />
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Barcode Billing</span>
                    <img
                      src="/icons/tick.png"
                      alt="tick"
                      className="ml-2 w-[56px] h-auto object-contain"
                    />
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Sales & Profit Reports</span>
                    <img
                      src="/icons/tick.png"
                      alt="tick"
                      className="ml-2 w-[56px] h-auto object-contain"
                    />
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Customer Loyalty Tracking</span>
                    <img
                      src="/icons/tick.png"
                      alt="tick"
                      className="ml-2 w-[56px] h-auto object-contain"
                    />
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Role-Based User Access</span>
                    <img
                      src="/icons/tick.png"
                      alt="tick"
                      className="ml-2 w-[56px] h-auto object-contain"
                    />
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Multi-Payment Support</span>
                    <img
                      src="/icons/tick.png"
                      alt="tick"
                      className="ml-2 w-[56px] h-auto object-contain"
                    />
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Cloud-Based Access</span>
                    <img
                      src="/icons/tick.png"
                      alt="tick"
                      className="ml-2 w-[56px] h-auto object-contain"
                    />
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Expiry Alerts (Pharmacy Support)</span>
                    <img
                      src="/icons/tick.png"
                      alt="tick"
                      className="ml-2 w-[56px] h-auto object-contain"
                    />
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Table Management (Restaurant Mode)</span>
                    <img
                      src="/icons/tick.png"
                      alt="tick"
                      className="ml-2 w-[56px] h-auto object-contain"
                    />
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Data Security & Backup</span>
                    <img
                      src="/icons/tick.png"
                      alt="tick"
                      className="ml-2 w-[56px] h-auto object-contain"
                    />
                  </li>
                </ul>
                
              </div>
            </div>

            <div className="hidden md:grid md:grid-cols-[2fr_1fr_1fr]">
              <div className="p-6 border-b border-r border-gray-200 text-white">
                <h2 className="text-2xl font-bold text-white">Features</h2>
              </div>
              <div className="p-6 text-center border-b border-r border-gray-200">
                <h2 className="text-2xl font-bold text-white">Manual System</h2>
              </div>
              <div className="p-6 text-center border-b border-gray-200  border-t-4 border-t-[#FF772D]">
                <h2 className="text-2xl font-bold text-white">Ranto POS System</h2>
              </div>

              <div className="p-4 border-b border-r border-gray-200 text-white flex items-center text-base md:text-lg">
                Inventory Management
              </div>
              <div className="p-4 border-b border-r border-gray-200 text-center flex justify-center items-center">
                <img
                  src="/icons/cross.png"
                  alt="cross"
                  className="ml-2 w-[56px] h-auto object-contain"
                />
              </div>
              <div className="p-4 border-b border-gray-200 text-center  flex justify-center items-center">
                <img
                  src="/icons/tick.png"
                  alt="tick"
                  className="ml-2 w-[56px] h-auto object-contain"
                />
              </div>

              <div className="p-4 border-b border-r border-gray-200 text-white flex items-center  text-base md:text-lg">
                Barcode Billing
              </div>
              <div className="p-4 border-b border-r border-gray-200 text-center flex justify-center items-center">
                <img
                  src="/icons/cross.png"
                  alt="cross"
                  className="ml-2 w-[56px] h-auto object-contain"
                />
              </div>
              <div className="p-4 border-b border-gray-200 text-center  flex justify-center items-center">
                <img
                  src="/icons/tick.png"
                  alt="tick"
                  className="ml-2 w-[56px] h-auto object-contain"
                />
              </div>

              <div className="p-4 border-b border-r border-gray-200 text-white flex items-center  text-base md:text-lg">
                Sales & Profit Reports
              </div>
              <div className="p-4 border-b border-r border-gray-200 text-center flex justify-center items-center">
                <img
                  src="/icons/cross.png"
                  alt="cross"
                  className="ml-2 w-[56px] h-auto object-contain"
                />
              </div>
              <div className="p-4 border-b border-gray-200 text-center  flex justify-center items-center">
                <img
                  src="/icons/tick.png"
                  alt="tick"
                  className="ml-2 w-[56px] h-auto object-contain"
                />
              </div>

              <div className="p-4 border-b border-r border-gray-200 text-white flex items-center text-base md:text-lg">
                Customer Loyalty Tracking
              </div>
              <div className="p-4 border-b border-r border-gray-200 text-center flex justify-center items-center">
                <img
                  src="/icons/cross.png"
                  alt="cross"
                  className="ml-2 w-[56px] h-auto object-contain"
                />
              </div>
              <div className="p-4 border-b border-gray-200 text-center  flex justify-center items-center">
                <img
                  src="/icons/tick.png"
                  alt="tick"
                  className="ml-2 w-[56px] h-auto object-contain"
                />
              </div>

              <div className="p-4 border-b border-r border-gray-200 text-white flex items-center text-base md:text-lg">
                Role-Based User Access
              </div>
              <div className="p-4 border-b border-r border-gray-200 text-center flex justify-center items-center">
                <img
                  src="/icons/cross.png"
                  alt="cross"
                  className="ml-2 w-[56px] h-auto object-contain"
                />
              </div>
              <div className="p-4 border-b border-gray-200 text-center  flex justify-center items-center">
                <img
                  src="/icons/tick.png"
                  alt="tick"
                  className="ml-2 w-[56px] h-auto object-contain"
                />
              </div>

              <div className="p-4 border-b border-r border-gray-200 text-white flex items-center text-base md:text-lg">
                Multi-Payment Support
              </div>
              <div className="p-4 border-b border-r border-gray-200 text-center flex justify-center items-center">
                <img
                  src="/icons/cross.png"
                  alt="cross"
                  className="ml-2 w-[56px] h-auto object-contain"
                />
              </div>
              <div className="p-4 border-b border-gray-200 text-center  flex justify-center items-center">
                <img
                  src="/icons/tick.png"
                  alt="tick"
                  className="ml-2 w-[56px] h-auto object-contain"
                />
              </div>

              <div className="p-4 border-b border-r border-gray-200 text-white flex items-center text-base md:text-lg">
                Cloud-Based Access
              </div>
              <div className="p-4 border-b border-r border-gray-200 text-center flex justify-center items-center">
                <img
                  src="/icons/cross.png"
                  alt="cross"
                  className="ml-2 w-[56px] h-auto object-contain"
                />
              </div>
              <div className="p-4 border-b border-gray-200 text-center  flex justify-center items-center">
                <img
                  src="/icons/tick.png"
                  alt="tick"
                  className="ml-2 w-[56px] h-auto object-contain"
                />
              </div>

              <div className="p-4 border-b border-r border-gray-200 text-white flex items-center text-base md:text-lg">
                Expiry Alerts (Pharmacy Support)
              </div>
              <div className="p-4 border-b border-r border-gray-200 text-center flex justify-center items-center">
                <img
                  src="/icons/cross.png"
                  alt="cross"
                  className="ml-2 w-[56px] h-auto object-contain"
                />
              </div>
              <div className="p-4 border-b border-gray-200 text-center  flex justify-center items-center">
                <img
                  src="/icons/tick.png"
                  alt="tick"
                  className="ml-2 w-[56px] h-auto object-contain"
                />
              </div>

              <div className="p-4 border-b border-r border-gray-200 text-white flex items-center text-base md:text-lg">
                Table Management (Restaurant Mode)
              </div>
              <div className="p-4 border-b border-r border-gray-200 text-center flex justify-center items-center">
                <img
                  src="/icons/cross.png"
                  alt="cross"
                  className="ml-2 w-[56px] h-auto object-contain"
                />
              </div>
              <div className="p-4 border-b border-gray-200 text-center  flex justify-center items-center">
                <img
                  src="/icons/tick.png"
                  alt="tick"
                  className="ml-2 w-[56px] h-auto object-contain"
                />
              </div>

              <div className="p-4 border-b border-r border-gray-200 text-white flex items-center text-base md:text-lg">
                Data Security & Backup
              </div>
              <div className="p-4 border-b border-r border-gray-200 text-center flex justify-center items-center">
                <img
                  src="/icons/cross.png"
                  alt="cross"
                  className="ml-2 w-[56px] h-auto object-contain"
                />
              </div>
              <div className="p-4 border-b border-gray-200 text-center  flex justify-center items-center">
                <img
                  src="/icons/tick.png"
                  alt="tick"
                  className="ml-2 w-[56px] h-auto object-contain"
                />
              </div>
            </div>
          </div>

          <Link to={"/contact-us"} className="mt-12 ml-auto flex flex-row justify-center">
            <Button className="min-w-[200px] min-h-[52px]">Buy Plan</Button>
          </Link>
        </section>
      </main>
    </>
  );
}

export default SolutionRantoPosPage;
