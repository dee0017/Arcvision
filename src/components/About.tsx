import React from 'react';
import { Award, Users, Clock, Lightbulb } from 'lucide-react';

const stats = [
  { icon: Award, value: '25+', label: 'Years Experience' },
  { icon: Users, value: '200+', label: 'Happy Clients' },
  { icon: Clock, value: '350+', label: 'Projects Completed' },
  { icon: Lightbulb, value: '15', label: 'Design Awards' },
];

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-w-16 aspect-h-9 lg:aspect-h-16">
              <img
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
                alt="Architecture team meeting"
                className="object-cover rounded-lg shadow-xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gray-100 rounded-lg -z-10" />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Crafting Spaces That Inspire
            </h2>
            <p className="text-gray-600 mb-8">
              Since 1998, ArchVision has been at the forefront of architectural innovation, 
              creating spaces that seamlessly blend functionality with aesthetic excellence. 
              Our commitment to sustainable design and client satisfaction has earned us 
              recognition as industry leaders.
            </p>
            <div className="grid grid-cols-2 gap-8">
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="text-center">
                  <Icon className="w-6 h-6 mx-auto mb-2 text-gray-700" />
                  <div className="text-2xl font-bold text-gray-900">{value}</div>
                  <div className="text-sm text-gray-600">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;