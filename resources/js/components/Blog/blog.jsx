import React from 'react';

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-100 font-sans">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Smart Banking Insights for the Digital Age</h1>
          <p className="text-lg mb-6">Explore the latest financial tips, AI-powered insights, and payment solutions.</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-purple-600 px-6 py-3 rounded-lg hover:bg-gray-200">Read Latest</button>
            <button className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600">View All</button>
          </div>
          <div className="mt-8 text-sm">
            <span>🔒 Bank-level security</span> | <span>🎉 Free plan available</span> | <span>⏰ 24/7 customer support</span>
          </div>
          <div className="mt-4 text-gray-200">10,000+ users already joined</div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Blog Post 1 */}
          <a href="https://medium.com/@komalsinghnikatby/bbps-api-provider-company-bharat-bill-payment-system-apibest-payment-gateway-api-integration-490be658cc1c" target="_blank" rel="noopener noreferrer" className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow block">
            <h3 className="text-xl font-semibold p-6 mb-2">BBPS API Provider Company - Bharat Bill Payment System API & Best Payment Gateway API Integration</h3>
            <p className="text-gray-600 p-6 mb-4">Discover how BBPS and payment gateway APIs can streamline bill payments and enhance financial services in India.</p>
          </a>
          {/* Blog Post 2 */}
          <a href="https://medium.com/@komalsinghnikatby/best-payment-gateway-provider-04baf678e241" target="_blank" rel="noopener noreferrer" className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow block">
            <h3 className="text-xl font-semibold p-6 mb-2">Best Payment Gateway Provider</h3>
            <p className="text-gray-600 p-6 mb-4">Explore top payment gateway providers offering secure and efficient transaction solutions.</p>
          </a>
          {/* Blog Post 3 */}
          <a href="https://medium.com/@komalsinghnikatby/best-payment-gateways-payment-solutions-in-india-c87405301b19" target="_blank" rel="noopener noreferrer" className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow block">
            <h3 className="text-xl font-semibold p-6 mb-2">Best Payment Gateways & Payment Solutions in India</h3>
            <p className="text-gray-600 p-6 mb-4">A guide to the best payment gateways and solutions tailored for the Indian market.</p>
          </a>
          {/* Blog Post 4 */}
          <a href="https://ext-6726001.livejournal.com/1355.html?newpost=1" target="_blank" rel="noopener noreferrer" className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow block">
            <h3 className="text-xl font-semibold p-6 mb-2">Payment Gateway Insights</h3>
            <p className="text-gray-600 p-6 mb-4">Insights into choosing the right payment gateway for your business needs.</p>
          </a>
          {/* Blog Post 5 */}
          <a href="https://ext-6726001.livejournal.com/1611.html?newpost=1" target="_blank" rel="noopener noreferrer" className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow block">
            <h3 className="text-xl font-semibold p-6 mb-2">E-commerce Payment Solutions</h3>
            <p className="text-gray-600 p-6 mb-4">Learn about effective payment solutions for e-commerce platforms.</p>
          </a>
          {/* Blog Post 6 */}
          <a href="https://medium.com/@komalsinghnikatby/best-payment-gateway-provider-in-noida-e8b5fbec3fb7" target="_blank" rel="noopener noreferrer" className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow block">
            <h3 className="text-xl font-semibold p-6 mb-2">Best Payment Gateway Provider in Noida</h3>
            <p className="text-gray-600 p-6 mb-4">Find the leading payment gateway providers based in Noida for your business.</p>
          </a>
          {/* Blog Post 7 */}
          <a href="https://medium.com/@komalsinghnikatby/trusted-e-commerce-payment-gateway-75dce2665ec9" target="_blank" rel="noopener noreferrer" className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow block">
            <h3 className="text-xl font-semibold p-6 mb-2">Trusted E-commerce Payment Gateway</h3>
            <p className="text-gray-600 p-6 mb-4">Explore trusted payment gateways designed for secure e-commerce transactions.</p>
          </a>
          {/* Blog Post 8 */}
          <a href="https://medium.com/@komalsinghnikatby/top-payment-gateways-company-in-india-d2815486e04d" target="_blank" rel="noopener noreferrer" className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow block">
            <h3 className="text-xl font-semibold p-6 mb-2">Top Payment Gateways Company in India</h3>
            <p className="text-gray-600 p-6 mb-4">A roundup of the top payment gateway companies operating in India.</p>
          </a>
          {/* Blog Post 9 */}
          <a href="https://medium.com/@komalsinghnikatby/secure-payment-gateway-for-every-business-provider-in-india-ef4da43d5292" target="_blank" rel="noopener noreferrer" className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow block">
            <h3 className="text-xl font-semibold p-6 mb-2">Secure Payment Gateway for Every Business Provider in India</h3>
            <p className="text-gray-600 p-6 mb-4">Discover secure payment gateway options suitable for businesses of all sizes in India.</p>
          </a>
        </div>
      </section>

      {/* Stats Section with Single Image */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <img src="https://via.placeholder.com/600x300" alt="Financial Dashboard" className="w-full max-w-2xl mb-8 rounded-lg shadow-md" />
          <div className="flex justify-around flex-wrap text-center">
            <div className="mb-4">
              <h3 className="text-3xl font-bold text-purple-600">$2.5B+</h3>
              <p className="text-gray-600">Assets Managed</p>
            </div>
            <div className="mb-4">
              <h3 className="text-3xl font-bold text-purple-600">98%</h3>
              <p className="text-gray-600">Customer Satisfaction</p>
            </div>
            <div className="mb-4">
              <h3 className="text-3xl font-bold text-purple-600">10K+</h3>
              <p className="text-gray-600">Active Users</p>
            </div>
            <div className="mb-4">
              <h3 className="text-3xl font-bold text-purple-600">24/7</h3>
              <p className="text-gray-600">Customer Support</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;