import React, { useState } from 'react';

const OurService = () => {

  const [active, setActive] = useState("track");

  return (
    <div>
      <div className='border-t-2 border-b-2 border-dashed py-10 mt-5 mb-10 text-gray-600'>
       <div className="bg-white my-6 rounded-2xl px-6 py-8 shadow-sm">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <img
              src="https://i.ibb.co/mVVx3p1K/live-tracking.png"
              className="w-48 lg:w-64"
            />
            <div className="hidden lg:block h-32 border-l-2 border-dashed border-gray-400"></div>
            <div className="lg:pl-6 text-center lg:text-left max-w-3xl">
              <h2 className="text-2xl lg:text-3xl font-semibold text-[#003E3E]">
                Live Parcel Tracking
              </h2>
              <p className="mt-2 text-gray-600 leading-relaxed">
                Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.
              </p>
            </div>

          </div>
        </div>

        <div className="bg-white my-6 rounded-2xl px-6 py-8 shadow-sm">
            <div className="flex flex-col lg:flex-row items-center gap-10">
              <img
                src="https://i.ibb.co/3mfbsfjS/safe-delivery.png"
                className="w-48 lg:w-64"
              />
              <div className="hidden lg:block h-32 border-l-2 border-dashed border-gray-400"></div>
              <div className="lg:pl-6 text-center lg:text-left max-w-3xl">
                <h1 className="text-2xl lg:text-3xl font-bold text-[#003E3E]">
                  100% Safe Delivery
                </h1>
                <p className="mt-2 text-gray-600 leading-relaxed">
                We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.
                </p>
              </div>

            </div>
        </div>

       <div className="bg-white my-6 rounded-2xl px-6 py-8 shadow-sm">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <img
              src="https://i.ibb.co/3mfbsfjS/safe-delivery.png"
              className="w-48 lg:w-64"
            />
            <div className="hidden lg:block h-32 border-l-2 border-dashed border-gray-400"></div>
            <div className="lg:pl-6 text-center lg:text-left max-w-3xl">
              <h1 className="text-2xl lg:text-3xl font-bold text-[#003E3E]">
                24/7 Call Center Support
              </h1>
              <p className="mt-2 text-gray-600 leading-relaxed">
                Our support team is available round-the-clock to assist you anytime.
              </p>
            </div>

          </div>
       </div>

      </div>


      {/* ================= Merchant Section ================= */}
      <section className="bg-[#03373d] px-4 rounded-3xl my-10 pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative">

          <img
            src="https://i.ibb.co/B57JgQGp/be-a-merchant-bg.png"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
            alt=""
          />

          <div className="relative z-10 pt-14">

            <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
              <div className="text-center lg:text-left px-2 lg:px-0 lg:w-1/2">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                  Merchant and Customer Satisfaction is Our First Priority
                </h1>
                <p className="text-gray-300 mt-4">
                  We offer the lowest delivery charge with 100% safety of your product.
                </p>

                <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-8">
                  <button
                    onClick={() => setActive("track")}
                    className={`px-5 py-2 font-bold rounded-full border transition-all
                      ${active === "track" ? "bg-[#CAEB66]" : "bg-white"}
                    `}
                  >
                    Become a Merchant
                  </button>
                  <button
                    onClick={() => setActive("rider")}
                    className={`px-5 py-2 font-bold rounded-full border transition-all
                      ${active === "rider" ? "bg-[#CAEB66]" : "bg-white"}
                    `}
                  >
                    Earn with ZapShift Courier
                  </button>
                </div>
              </div>
              <div className="lg:w-1/2 flex justify-center">
                <img
                  src="https://i.ibb.co/Rf6R9XR/location-merchant.png"
                  className="w-72 sm:w-96 lg:w-full"
                  alt=""
                />
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* ================= Customer Section ================= */}
      <section className='py-5'>
        <div className='flex justify-center items-center'>
          <img src="https://i.ibb.co/vxKLqgBq/customer-top.png" alt="" />
        </div>
        <div className='text-center py-5 px-4'>
          <h1 className='text-2xl lg:text-4xl'>What our customers are saying</h1>
          <p className='text-gray-500'>
            Enhance posture, mobility and well-being effortlessly with Posture Pro.
          </p>
        </div>
      </section>

    </div>
  );
};

export default OurService;
