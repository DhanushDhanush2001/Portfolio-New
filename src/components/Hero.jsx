import React from "react";
import { Bio } from "../data/data";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";
import { motion } from "framer-motion";
import Hero1 from "../assets/hero.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 px-4 md:px-0 bg-gradient-to-b from-blue-50 to-white overflow-hidden"
    >
      {/* Background Circles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-blue-100 opacity-50" />
        <div className="absolute top-1/3 -left-20 w-60 h-60 rounded-full bg-teal-100 opacity-50" />
        <div className="absolute bottom-10 right-1/4 w-40 h-40 rounded-full bg-amber-100 opacity-40" />
      </div>

      <div className="container mx-auto z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl mx-auto gap-10">
          {/* Left Content */}
          <motion.div
            className="text-center md:text-left md:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              <span className="text-blue-600">Hello, I'm</span>
              <br />
              {Bio.name}
            </h1>

            {/* Roles */}
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

            {/* Description */}
            <p className="text-lg text-gray-600 max-w-xl mx-auto md:mx-0 mb-8">
              {Bio.description}
            </p>

            {/* Social Icons */}
            <motion.div
              className="flex gap-4 justify-center md:justify-start mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {[Bio.github, Bio.linkedin, Bio.twitter, Bio.insta, Bio.facebook].map(
                (link, index) => {
                  const icons = [
                    FaGithub,
                    FaLinkedin,
                    FaTwitter,
                    FaInstagram,
                    FaFacebookF,
                  ];
                  const Icon = icons[index];
                  return (
                    <a
                      key={index}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 rounded-full hover:bg-blue-100 transition-colors"
                      aria-label="Social Icon"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                }
              )}
            </motion.div>

            {/* Buttons */}
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

          {/* Right Content - Image */}
          <motion.div
            className="md:w-1/2 flex justify-center relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <img
                src={Hero1}
                alt="Developer"
                className="shadow-lg rounded-full object-cover border-4 border-blue-500 
                w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96"
              />
              {/* Decorative Rings */}
              <div className="absolute -top-3 -left-3 w-full h-full rounded-full border-2 border-blue-200" />
              <div className="absolute -bottom-3 -right-3 w-full h-full rounded-full border-2 border-teal-200" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Icon */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
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
