import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import { FaPaperPlane, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { Phone, AtSign, MapPin } from "lucide-react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';
import { Bio } from "../data/data";

const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_6tur6z1', 'template_h4znq67', form.current, 'CrSE0e2uzMnJfTD4c')
      .then(
        () => {
          toast.success('Email sent successfully!');
          form.current.reset();
        },
        (error) => {
          toast.error('Failed to send email. Please try again.');
          console.error(error.text);
        }
      );
  };

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <>
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
              <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-gray-600">
                Have a question or want to work together? Feel free to contact me using the form below.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Contact Info */}
              <motion.div 
                variants={cardVariants}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-blue-600 to-blue-600 rounded-lg p-8 text-white shadow-lg"
              >
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <p className="mb-8 opacity-90">
                  I'm interested in freelance opportunities – especially ambitious or large projects.
                  However, if you have other requests or questions, feel free to contact me.
                </p>

                <div className="space-y-6">
                  <motion.div 
                    className="flex items-center gap-4"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="bg-white/20 p-3 rounded-full">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium">Phone</h4>
                      <p className="opacity-90">+91 9094860563</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-center gap-4"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="bg-white/20 p-3 rounded-full">
                      <AtSign className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium">Email</h4>
                      <p className="opacity-90">danushpandiyan2001@gmail.com</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-center gap-4"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="bg-white/20 p-3 rounded-full">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium">Location</h4>
                      <p className="opacity-90">Chennai, Tamil Nadu, India</p>
                    </div>
                  </motion.div>
                </div>

                <div className="mt-6 space-y-4">
                  <motion.div 
                    className="flex items-start"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <FaLinkedin className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-1">LinkedIn</h4>
                      <p className="text-blue-200 hover:underline">
                        <a
                          href={Bio.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Dhanush Pandian
                        </a>
                      </p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-start"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <FaGithub className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-1">GitHub</h4>
                      <p className="text-blue-200 hover:underline">
                        <a
                          href={Bio.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          DhanushDhanush2001
                        </a>
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div 
                variants={formVariants}
                whileHover={{ y: -5 }}
                className="animate-fadeIn animation-delay-300"
              >
                <form ref={form} onSubmit={handleSubmit} className="bg-slate-50 rounded-xl p-8 shadow-md">
                  <h3 className="text-2xl font-bold mb-6">Send Message</h3>

                  <motion.div 
                    className="mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                      required
                    />
                  </motion.div>

                  <motion.div 
                    className="mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                      required
                    />
                  </motion.div>

                  <motion.div 
                    className="mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                    />
                  </motion.div>

                  <motion.div 
                    className="mb-6"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none transition-all duration-300"
                      required
                    ></textarea>
                  </motion.div>

                  <motion.div 
                    className="flex justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
                    >
                      Send Message
                      <FaPaperPlane className="ml-2 h-4 w-4" />
                    </motion.button>
                  </motion.div>
                </form>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      <ToastContainer position="top-center" autoClose={3000} theme="colored" />
    </>
  );
};

export default Contact;