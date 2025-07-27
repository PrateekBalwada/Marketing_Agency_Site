import React from 'react';
import { Linkedin, Twitter } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Creative Director',
      description: 'Visionary leader with 15+ years in marketing strategy and brand development.',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Michael Chen',
      role: 'Head of Digital Strategy',
      description: 'Data-driven strategist specializing in digital transformation and growth hacking.',
      image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Creative Lead',
      description: 'Award-winning designer with expertise in brand identity and creative campaigns.',
      image: 'https://images.pexels.com/photos/3785074/pexels-photo-3785074.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'David Kim',
      role: 'Analytics Director',
      description: 'Performance marketing expert focused on ROI optimization and data insights.',
      image: 'https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our <span className="text-orange-500">Super Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our diverse team of marketing experts, creative minds, and strategic thinkers 
            work together to deliver exceptional results for every client.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="relative mb-6">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-orange-100 to-red-100 p-2">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-500/20 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
              <div className="text-orange-500 font-semibold mb-3">{member.role}</div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.description}</p>
              
              <div className="flex justify-center space-x-3">
                <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors duration-200">
                  <Linkedin className="h-4 w-4" />
                </button>
                <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors duration-200">
                  <Twitter className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;