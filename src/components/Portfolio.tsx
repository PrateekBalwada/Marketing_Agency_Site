import React from 'react';
import { ExternalLink, TrendingUp } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'TechStart Revolution',
      category: 'Brand Development',
      description: 'Complete brand transformation resulting in 400% increase in market recognition',
      results: '+400% Brand Recognition',
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'EcoLife Campaign',
      category: 'Digital Marketing',
      description: 'Sustainable product launch campaign reaching 2M+ engaged users',
      results: '2M+ Reach',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'FinanceFlow App',
      category: 'Product Launch',
      description: 'Mobile app marketing strategy generating 100K downloads in first month',
      results: '100K Downloads',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'LocalBites Network',
      category: 'Social Media',
      description: 'Restaurant chain social strategy increasing foot traffic by 250%',
      results: '+250% Foot Traffic',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Healthcare Plus',
      category: 'Content Strategy',
      description: 'Healthcare provider content marketing driving 300% lead increase',
      results: '+300% Leads',
      image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Fashion Forward',
      category: 'E-commerce',
      description: 'Fashion brand digital transformation achieving 500% online sales growth',
      results: '+500% Sales',
      image: 'https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50 reveal-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 text-reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Success <span className="text-orange-500">Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we've helped brands across industries achieve extraordinary results 
            through strategic marketing and creative excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-item">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 group stagger-child"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="h-6 w-6 text-white" />
                </div>
              </div>
              
              <div className="p-6">
                <div className="text-sm text-orange-500 font-semibold mb-2">{project.category}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-green-600">
                    <TrendingUp className="h-4 w-4" />
                    <span className="font-semibold text-sm">{project.results}</span>
                  </div>
                  <button className="text-orange-500 hover:text-orange-600 font-semibold text-sm">
                    View Case Study →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;