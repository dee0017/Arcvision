import React, { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'Modern Urban Complex',
    category: 'commercial',
    image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80',
    description: 'A sustainable commercial complex in the heart of downtown'
  },
  {
    id: 2,
    title: 'Luxury Residence',
    category: 'residential',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80',
    description: 'Contemporary beachfront villa with panoramic views'
  },
  {
    id: 3,
    title: 'Green City Planning',
    category: 'urban',
    image: 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80',
    description: 'Sustainable urban development project'
  },
  {
    id: 4,
    title: 'Corporate Headquarters',
    category: 'commercial',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80',
    description: 'Modern office complex with innovative design'
  },
  {
    id: 5,
    title: 'Mountain Retreat',
    category: 'residential',
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80',
    description: 'Luxury mountain home with sustainable features'
  },
  {
    id: 6,
    title: 'Urban Park',
    category: 'urban',
    image: 'https://images.unsplash.com/photo-1496389395181-e5fdd5c0315e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80',
    description: 'Public space development in urban setting'
  }
];

const ProjectCard = ({ image, title, description }) => (
  <div className="group relative overflow-hidden rounded-lg">
    <div className="aspect-w-16 aspect-h-9">
      <img 
        src={image} 
        alt={title} 
        className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
      />
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-200 text-sm">{description}</p>
      </div>
    </div>
  </div>
);

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'residential', label: 'Residential' },
    { id: 'urban', label: 'Urban Planning' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="section-padding">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Explore our diverse portfolio of architectural excellence
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full transition-colors duration-200 ${
                  activeFilter === filter.id
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;