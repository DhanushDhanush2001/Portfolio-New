import React from 'react';
import { motion } from 'framer-motion';
import { Aboutus } from '../data/data';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.3, delayChildren: 0.2 } 
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

const About = () => {
  return (
    <section id="about" className="py-20 mt-2">
    <motion.div
      className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <motion.div variants={itemVariants} className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 relative inline-block">
          About Me
          <span className="w-20 h-1 bg-blue-600 rounded mx-auto mt-2 block"></span>
        </h2>
      </motion.div>
      
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <motion.div 
          variants={itemVariants}
          className="w-full lg:w-1/2 flex justify-center"
          whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
        >
          <div className="relative max-w-md">
            {/* Decorative pattern */}
            <div className="absolute -top-6 -left-6 w-full h-full bg-blue-100 rounded-lg"></div>
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-teal-100 rounded-lg"></div>
            
            {/* Image */}
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl border-4 border-white">
              <img
                src={Aboutus.image}
                alt="Dhanush Pandian"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </motion.div>
        
        <motion.div variants={itemVariants} className="w-full lg:w-1/2 space-y-6">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              My Journey
            </h3>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              {Aboutus.description}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { color: 'blue', num: '01', title: 'Full Stack Developer', desc: 'Delivering end-to-end web solutions' },
                { color: 'teal', num: '02', title: 'Efficient Problem Solver', desc: 'Converting complex issues into scalable code' },
                { color: 'amber', num: '03', title: 'Tech Enthusiast & Learner', desc: 'Exploring new tools, frameworks' },
                { color: 'blue', num: '04', title: 'Collaborative Team Player', desc: 'Aligning cross-functional teams to build great products' }
              ].map(({ color, num, title, desc }) => (
                <motion.div
                  key={num}
                  className="flex items-center gap-2"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className={`w-12 h-12 rounded-full bg-${color}-100 flex items-center justify-center flex-shrink-0`}>
                    <span className={`text-${color}-700 font-semibold`}>{num}</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">{title}</h4>
                    <p className="text-sm text-gray-500">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
    </section>
  );
};

export default About;
