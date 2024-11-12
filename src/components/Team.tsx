import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const team = [
  {
    name: 'Sarah Anderson',
    role: 'Principal Architect',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    bio: 'Award-winning architect with 15+ years of experience in sustainable design.',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'sarah@archvision.com',
    },
  },
  {
    name: 'Michael Chen',
    role: 'Design Director',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    bio: 'Specializes in modern urban architecture and innovative space solutions.',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'michael@archvision.com',
    },
  },
  {
    name: 'Emily Rodriguez',
    role: 'Interior Design Lead',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    bio: 'Creates harmonious spaces that blend functionality with aesthetic appeal.',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'emily@archvision.com',
    },
  },
  {
    name: 'David Kim',
    role: 'Project Manager',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    bio: 'Expert in managing complex architectural projects from concept to completion.',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'david@archvision.com',
    },
  },
];

const TeamMember = ({ name, role, image, bio, social }) => (
  <div className="group relative overflow-hidden rounded-lg bg-white shadow-lg">
    <div className="aspect-w-3 aspect-h-4">
      <img
        src={image}
        alt={name}
        className="object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex gap-4 mb-4">
            <a href={social.linkedin} className="text-white hover:text-gray-200">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href={social.twitter} className="text-white hover:text-gray-200">
              <Twitter className="w-5 h-5" />
            </a>
            <a href={`mailto:${social.email}`} className="text-white hover:text-gray-200">
              <Mail className="w-5 h-5" />
            </a>
          </div>
          <p className="text-white text-sm">{bio}</p>
        </div>
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-1">{name}</h3>
      <p className="text-gray-600">{role}</p>
    </div>
  </div>
);

const Team = () => {
  return (
    <section id="team" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Talented professionals dedicated to bringing your architectural vision to life
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <TeamMember key={member.name} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;