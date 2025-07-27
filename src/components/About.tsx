import React from 'react';
import { Award, Users, Target, Zap } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, number: '50+', label: 'Industry Awards' },
    { icon: Users, number: '200+', label: 'Team Members' },
    { icon: Target, number: '1000+', label: 'Projects Completed' },
    { icon: Zap, number: '10+', label: 'Years Experience' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              We Are Your Marketing 
              <span className="text-orange-500"> Superheroes</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Founded with a mission to revolutionize how businesses connect with their audiences, 
              we've grown into a powerhouse of creative minds, strategic thinkers, and data wizards.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our approach combines cutting-edge technology with human creativity to deliver 
              campaigns that don't just reach your audience – they move them to action.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <stat.icon className="h-8 w-8 text-orange-500" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-3xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-orange-500 to-red-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Zap className="h-16 w-16 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Ready to Transform?</h3>
                <p className="text-gray-600">Let's unleash your brand's potential together</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;