import React from "react";

const ServicesSection = () => {
  return (
    <section className="bg-[#03373d] py-16 px-4 rounded-3xl"> {/* Dark background, matching image */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-extrabold text-white mb-3">Our Services</h2>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        
        {/* Card 1: Express & Standard Delivery (White) */}
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-[#CAEB66]">
          <div className="flex items-start mb-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-pink-100 mr-4 shadow-sm text-3xl">🎁</div>
            <h3 className="text-xl font-semibold mt-2 text-gray-800">Express & Standard Delivery</h3>
          </div>
          <p className="text-gray-500 text-sm">
            We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4-6 hours from pick-up to drop-off.
          </p>
        </div>

        {/* Card 2: Nationwide Delivery (HIGHLIGHTED - Lime Green) */}
        <div className="bg-white text-gray-800 rounded-xl shadow-lg p-6 sm:p-8  hover:shadow-2xl hover:bg-[#CAEB66]">
          <div className="flex items-start mb-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-pink-100 mr-4 shadow-sm text-3xl">📦</div>
            <h3 className="text-xl font-semibold mt-2">Nationwide Delivery</h3>
          </div>
          <p className="text-gray-700 text-sm">
            We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48-72 hours.
          </p>
        </div>

        {/* Card 3: Fulfillment Solution (White) */}
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-[#CAEB66]">
          <div className="flex items-start mb-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-pink-100 mr-4 shadow-sm text-3xl">🚚</div>
            <h3 className="text-xl font-semibold mt-2 text-gray-800">Fulfillment Solution</h3>
          </div>
          <p className="text-gray-500 text-sm">
            We also offer customized service with inventory management support, online order processing, packaging, and after sales support.
          </p>
        </div>

        {/* Card 4: Cash on Home Delivery (White) */}
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-[#CAEB66]">
          <div className="flex items-start mb-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-pink-100 mr-4 shadow-sm text-3xl">💵</div>
            <h3 className="text-xl font-semibold mt-2 text-gray-800">Cash on Home Delivery</h3>
          </div>
          <p className="text-gray-500 text-sm">
            100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.
          </p>
        </div>

        {/* Card 5: Corporate Service / Contract In Logistics (White) */}
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-[#CAEB66]">
          <div className="flex items-start mb-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-pink-100 mr-4 shadow-sm text-3xl">🏢</div>
            <h3 className="text-xl font-semibold mt-2 text-gray-800">Corporate Service / Contract In Logistics</h3>
          </div>
          <p className="text-gray-500 text-sm">
            Customized corporate services which includes, warehouse and inventory management support.
          </p>
        </div>

        {/* Card 6: Parcel Return (White) */}
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-[#CAEB66]">
          <div className="flex items-start mb-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-pink-100 mr-4 shadow-sm text-3xl">🔄</div>
            <h3 className="text-xl font-semibold mt-2 text-gray-800">Parcel Return</h3>
          </div>
          <p className="text-gray-500 text-sm">
            Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;