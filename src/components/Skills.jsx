import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/data';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.6, ease: 'easeOut' } 
  }
};

const skillItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.4, ease: 'easeOut' } 
  }
};

const Skills = () => {
  return (
    <section className="bg-gray-50 py-16 mt-5" id="skills">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
          }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 relative inline-block mt-2">
            My Skills
            <span className="w-20 h-1 bg-blue-600 rounded mx-auto mt-2 mb-4 block"></span>
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={groupIndex}
              className="bg-white rounded-xl shadow-md overflow-hidden transform transition-transform hover:scale-105 hover:shadow-lg"
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -10, transition: { duration: 0.3 } }}
            >
              <div className="p-6">
                <motion.h3
                  className="text-xl text-center font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2"
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: groupIndex * 0.1 }}
                >
                  {skillGroup.title}
                </motion.h3>

                <motion.div
                  className="grid grid-cols-2 sm:grid-cols-3 gap-4"
                  variants={containerVariants}
                >
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="flex flex-col items-center"
                      variants={skillItemVariants}
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    >
                      <motion.div
                        className="w-12 h-12 p-2 rounded-full bg-blue-50 flex items-center justify-center mb-2 group-hover:bg-blue-100 transition-colors duration-300"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <img
                          src={skill.image}
                          alt={skill.name}
                          className="w-8 h-8 object-contain"
                        />
                      </motion.div>
                      <span className="text-sm font-medium text-gray-700 text-center group-hover:text-blue-600 transition-colors duration-300">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
