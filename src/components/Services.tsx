import React from 'react';
import { motion } from 'framer-motion';
import { Target, TrendingUp, Megaphone, Palette, BarChart3, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Target,
      title: 'Strategic Planning',
      description: 'Comprehensive market analysis and strategic roadmaps that align with your business objectives and drive sustainable growth.',
      color: 'text-blue-600'
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Multi-channel digital campaigns that maximize reach, engagement, and conversions across all digital platforms.',
      color: 'text-orange-500'
    },
    {
      icon: Megaphone,
      title: 'Brand Development',
      description: 'Complete brand identity creation and positioning that resonates with your target audience and stands out in the market.',
      color: 'text-red-500'
    },
    {
      icon: Palette,
      title: 'Creative Design',
      description: 'Award-winning creative solutions that capture attention, communicate value, and inspire action across all mediums.',
      color: 'text-purple-600'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Insights',
      description: 'Advanced data analytics and performance tracking that provide actionable insights for continuous optimization.',
      color: 'text-green-600'
    },
    {
      icon: Users,
      title: 'Social Media',
      description: 'Engaging social media strategies that build communities, increase brand awareness, and drive meaningful interactions.',
      color: 'text-pink-600'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-orange-500">Superpowers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine creativity, strategy, and technology to deliver marketing solutions 
            that transform your business and accelerate growth.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-50 p-8 rounded-2xl hover:bg-white hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 group"
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <div className={`${service.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="h-12 w-12" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;