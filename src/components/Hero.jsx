import React from 'react';
import { Bio } from '../data/data';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa';
import { HiArrowDown } from 'react-icons/hi';
import { motion } from 'framer-motion';
import Hero1 from '../assets/hero.png';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-16 px-4 md:px-0 bg-gradient-to-b from-blue-50 to-white"
    >
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          <motion.div 
            className="text-center md:text-left order-2 md:order-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-blue-600">Hello, I'm</span>
              <br />
              {Bio.name}
            </h1>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
              {Bio.roles.map((role, index) => (
                <span 
                  key={index} 
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm md:text-base font-medium"
                >
                  {role}
                </span>
              ))}
            </div>
            
            <p className="text-lg text-gray-600 max-w-xl mb-8">
              {Bio.description}
            </p>
            
            <div className="flex gap-4 justify-center md:justify-start mb-8">
              <motion.div 
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <a 
                  href={Bio.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 bg-gray-100 rounded-full hover:bg-black-200 transition-colors"
                  aria-label="GitHub"
                >
                  <FaGithub className="h-5 w-5" />
                </a>
                <a 
                  href={Bio.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 bg-gray-100 rounded-full hover:bg-blue-200 transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="h-5 w-5" />
                </a>
                <a 
                  href={Bio.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                  aria-label="Twitter"
                >
                  <FaTwitter className="h-5 w-5" />
                </a>
                <a 
                  href={Bio.insta} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram className="h-5 w-5" />
                </a>
                <a 
                  href={Bio.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebookF className="h-5 w-5" />
                </a>
              </motion.div>
            </div>
            
            <motion.div 
              className="flex gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <a 
                href={Bio.resume} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                View Resume
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors"
              >
                Contact Me
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            className="order-1 md:order-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src ={Hero1}
              alt="Developer"
              className="w-full max-w-md mx-auto rounded-2xl shadow-lg"
            />
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <a href="#about" aria-label="Scroll down">
          <HiArrowDown className="h-6 w-6 text-gray-400" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;