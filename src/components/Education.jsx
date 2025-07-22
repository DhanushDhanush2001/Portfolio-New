import React from "react";
import { motion } from "framer-motion";
import { education, cerification } from "../data/data";
import { Calendar, GraduationCap, Award, Building, Star } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-50">
  <div className="container mx-auto px-4 md:px-6 max-w-5xl">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className=""  // removed max-w-4xl here to let container control width
    >
      {/* Section Header */}
      <motion.div variants={itemVariants} className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Education & Certifications
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          My academic journey and professional development
        </p>
      </motion.div>

      {/* Education Section */}
      <motion.div variants={itemVariants} className="mb-16">
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Education</h3>
          <div className="w-16 h-0.5 bg-blue-600 mx-auto"></div>
        </div>

        {/* grid max width consistent with container */}
        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu) => (
            <motion.div
              key={edu.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              {/* Institution Image */}
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-3 border-blue-100 shadow-md">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="text-center">
                <h4 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                  {edu.degree}
                </h4>

                <div className="flex items-center justify-center mb-3">
                  <h5 className="text-base font-semibold text-blue-600">
                    {edu.school}
                  </h5>
                </div>

                <div className="flex items-center justify-center space-x-4 mb-3 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {edu.date}
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-2 text-yellow-500" />
                    {edu.grade}
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed text-sm">{edu.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Certifications Section */}
      <motion.div variants={itemVariants}>
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Professional Certifications
          </h3>
          <div className="w-16 h-0.5 bg-green-600 mx-auto"></div>
        </div>

        <div>
          {cerification.map((cert) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 mb-6"
            >
              {/* Certificate Image */}
              <div className="flex justify-center mb-4">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-3 border-green-100 shadow-md">
                    <img
                      src={cert.img}
                      alt={cert.company}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-md">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="text-center">
                <h4 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                  {cert.role}
                </h4>

                <div className="flex items-center justify-center mb-3">
                  <Building className="w-4 h-4 text-green-600 mr-2" />
                  <h5 className="text-base font-semibold text-green-600">
                    {cert.company}
                  </h5>
                </div>

                <div className="flex items-center justify-center mb-3 text-sm text-gray-600">
                  <Calendar className="w-4 h-4 mr-2" />
                  {cert.date}
                </div>

                <p className="text-gray-600 leading-relaxed text-sm mb-4">
                  {cert.desc}
                </p>

                {/* Skills Tags */}
                <div className="flex flex-wrap justify-center gap-2">
                  {cert.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-gradient-to-r from-blue-50 to-green-50 text-gray-700 text-xs font-medium px-2 py-1 rounded-full border border-gray-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  </div>
</section>

  );
};

export default Education;
