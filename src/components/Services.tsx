import React from 'react';
import { Building2, Home, Trees, Ruler, PenTool, Users } from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: 'Commercial Design',
    description: 'Innovative spaces that enhance productivity and reflect your brand identity'
  },
  {
    icon: Home,
    title: 'Residential Architecture',
    description: 'Custom homes that perfectly balance aesthetics with functionality'
  },
  {
    icon: Trees,
    title: 'Urban Planning',
    description: 'Sustainable urban solutions that create vibrant communities'
  },
  {
    icon: Ruler,
    title: 'Interior Design',
    description: 'Thoughtfully crafted interiors that inspire and delight'
  },
  {
    icon: PenTool,
    title: 'Custom Solutions',
    description: 'Tailored architectural solutions for unique project requirements'
  },
  {
    icon: Users,
    title: 'Consultation',
    description: 'Expert guidance throughout your architectural journey'
  }
];

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
      <Icon className="w-6 h-6 text-gray-700" />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Services = () => {
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive architectural solutions tailored to your vision
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;