import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: 'The Future of Sustainable Architecture',
    excerpt: 'Exploring innovative approaches to eco-friendly building design and their impact on urban development.',
    image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    date: '2024-03-15',
    readTime: '5 min read',
    category: 'Sustainability'
  },
  {
    id: 2,
    title: 'Blending Modern and Traditional Design',
    excerpt: 'How to create harmonious spaces that bridge contemporary and classical architectural elements.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    date: '2024-03-10',
    readTime: '4 min read',
    category: 'Design'
  },
  {
    id: 3,
    title: 'Smart Homes: Integration of Technology',
    excerpt: 'The latest trends in smart home technology and their implementation in modern architecture.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    date: '2024-03-05',
    readTime: '6 min read',
    category: 'Technology'
  }
];

const BlogCard = ({ title, excerpt, image, date, readTime, category }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="aspect-w-16 aspect-h-9">
      <img 
        src={image} 
        alt={title} 
        className="object-cover w-full h-full"
      />
    </div>
    <div className="p-6">
      <div className="flex items-center gap-4 mb-4">
        <span className="text-sm text-gray-600 flex items-center">
          <Calendar className="w-4 h-4 mr-1" />
          {new Date(date).toLocaleDateString('en-US', { 
            month: 'short', 
            day: 'numeric', 
            year: 'numeric' 
          })}
        </span>
        <span className="text-sm text-gray-600 flex items-center">
          <Clock className="w-4 h-4 mr-1" />
          {readTime}
        </span>
      </div>
      <span className="inline-block px-3 py-1 text-sm font-medium text-gray-700 bg-gray-100 rounded-full mb-4">
        {category}
      </span>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{excerpt}</p>
      <button className="text-gray-900 font-medium inline-flex items-center hover:text-gray-700 transition-colors duration-200">
        Read More
        <ArrowRight className="w-4 h-4 ml-2" />
      </button>
    </div>
  </div>
);

const Blog = () => {
  return (
    <section id="blog" className="section-padding">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Insights</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with our latest thoughts on architecture, design, and innovation
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;