import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-screen">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      {/* Hero Content */}
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Shaping Visions into Reality
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 mb-8">
            Creating exceptional spaces that inspire and endure
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-gray-900 px-8 py-3 rounded-md font-medium flex items-center justify-center hover:bg-gray-100 transition-colors duration-200">
              View Our Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white hover:text-gray-900 transition-colors duration-200">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-1 h-16 rounded-full bg-white opacity-50" />
        </div>
      </div>
    </div>
  );
};

export default Hero;