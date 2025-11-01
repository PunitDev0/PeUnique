import { Head } from '@inertiajs/react';
import React from 'react';

const CareersPage = ({meta}) => {
  return (
    <div className="font-sans bg-gradient-to-br from-gray-50 to-gray-200 min-h-screen">
     <Head>
        <title>{meta?.title}</title>
        <meta
          name="description"
          content={meta?.description}
        />
      </Head>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-100 to-blue-100 py-20 px-8 flex flex-col items-center text-center overflow-hidden mt-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(147,51,234,0.2),transparent_70%)] z-0"></div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 z-10">
          Join the PeUnique Team
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl z-10">
          Be part of a team that powers secure transactions for businesses across India with 150+ payment modes.
        </p>
      </section>

      {/* Our People Section */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="relative inline-block text-3xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
            Our People, Our Strength
            <span className="absolute w-16 h-1 bottom-[-10px] left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-blue-500 rounded"></span>
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            At PeUnique, we believe that a great culture and the right people drive success. We invest in our team by selecting top talent, providing them with the best resources, and creating an environment that fosters growth and innovation.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            We take ownership of our work, learning from every challenge and celebrating every success.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We encourage our team to push boundaries, think outside the box, and embrace new ways to solve problems. This commitment to excellence is what makes us stronger together.
          </p>
        </div>
      </section>

      {/* Resume Submit Form */}
      <section className="py-20 px-8">
        <div className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow-lg transform hover:shadow-xl transition-shadow duration-300">
          <h2 className="relative inline-block text-2xl font-bold mb-8 text-center bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
            Submit Your Resume
            <span className="absolute w-16 h-1 bottom-[-10px] left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-blue-500 rounded"></span>
          </h2>
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-600 mb-2 font-medium">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-600 mb-2 font-medium">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300"
                placeholder="your.email@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="resume" className="block text-gray-600 mb-2 font-medium">
                Upload Resume
              </label>
              <input
                type="file"
                id="resume"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300"
                accept=".pdf,.doc,.docx"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-600 mb-2 font-medium">
                Cover Letter (Optional)
              </label>
              <textarea
                id="message"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300"
                rows="4"
                placeholder="Tell us why you'd be a great fit!"
              ></textarea>
            </div>
            <button className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white p-3 rounded-md hover:from-purple-700 hover:to-blue-600 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300">
              Submit Application
            </button>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default CareersPage;