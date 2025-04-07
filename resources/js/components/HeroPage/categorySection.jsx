import React from 'react';

const CategorySection = () => {
    return (
        <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 grid-rows-3 gap-10 items-start">
                {/* Left Side - Feature Cards */}
                {/* Card 1: Trusted E-commerce Payment Gateway */}
                <div className="bg-white relative p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-start space-x-4">
                    <div className="text-purple-500 flex-shrink-0 mt-1">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center">
                            <img 
                                src="/assets/icons/security.png" 
                                alt="Secure E-commerce Payment Gateway Icon" 
                                className="h-full w-full rounded-full object-cover drop-shadow-sm" 
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-gray-900">
                            Trusted E-commerce Payment Gateway in Noida
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            As a leading payment gateway for e-commerce in Noida, we provide secure and seamless transaction solutions. Boost your online store’s success with fast, reliable payment processing that builds customer trust and increases sales.
                        </p>
                    </div>
                </div>

                {/* Card 2: Education Payment Gateway for Institutions */}
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-start space-x-4">
                    <div className="text-green-500 flex-shrink-0 mt-1">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center">
                            <img 
                                src="/assets/icons/education.png" 
                                alt="Education Payment Gateway Icon" 
                                className="h-full w-full rounded-full object-cover drop-shadow-sm" 
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-gray-900">
                            Best Education Payment Gateway in India
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Simplify fee collection with our education payment gateway tailored for schools, colleges, and online learning platforms across India. Enjoy secure, hassle-free transactions to streamline financial management for educational institutions.
                        </p>
                    </div>
                </div>

                {/* Main Content */}
                <div className="text-center lg:text-left space-y-6">
                    <p className="text-gray-500 uppercase tracking-wide text-sm">Reduce Payment Barriers</p>
                    <h1 className="text-4xl font-bold text-gray-900 leading-tight">
                        Build Amazing Payment-Powered Solutions with Ease
                    </h1>
                    <button className="mt-6 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105">
                        Explore Payment Solutions →
                    </button>
                </div>

                {/* Card 3: Retail Payment Gateway for Offline Stores */}
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-start space-x-4">
                    <div className="text-blue-500 flex-shrink-0 mt-1">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center">
                            <img 
                                src="/assets/icons/card-security.png" 
                                alt="Retail Payment Gateway Security Icon" 
                                className="h-full w-full rounded-full object-cover drop-shadow-sm" 
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-gray-900">
                            Retail Payment Gateway for Offline Stores in India
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Empower your brick-and-mortar business—be it a grocery, clothing store, or pharmacy—with our retail payment gateway. Offer secure, diverse payment options for a seamless and efficient checkout experience.
                        </p>
                    </div>
                </div>

                {/* Card 4: Advanced Payment Gateway API Services */}
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-start space-x-4">
                    <div className="text-yellow-500 flex-shrink-0 mt-1">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center">
                            <img 
                                src="/assets/icons/link.png" 
                                alt="Payment Gateway API Integration Icon" 
                                className="h-full w-full rounded-full object-cover drop-shadow-sm" 
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-gray-900">
                            Advanced Payment Gateway API Services in Noida
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Integrate robust payment solutions with our advanced payment gateway API services in Noida. Enable faster transactions, lower costs, and scalable operations for websites and apps.
                        </p>
                    </div>
                </div>

                {/* Card 5: Payment Gateway for Mobile Application */}
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-start space-x-4">
                    <div className="text-red-500 flex-shrink-0 mt-1">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center">
                            <img 
                                src="/assets/icons/qrcode.png" 
                                alt="Mobile Payment Gateway QR Code Icon" 
                                className="h-full w-full rounded-full object-cover drop-shadow-sm" 
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-gray-900">
                            Best Payment Gateway for Mobile Apps
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Deliver secure and fast payments with our top-tier payment gateway for mobile applications. Support multiple payment modes, including UPI and wallets, for a user-friendly experience.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CategorySection;