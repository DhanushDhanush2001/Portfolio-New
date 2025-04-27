import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeIn">
              <div className="aspect-square overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Dhanush Pandian"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="animate-fadeIn animation-delay-300">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Full Stack Developer
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
              I am a passionate Full Stack Developer specializing in the MERN stack (MongoDB, Express.js, React, and Node.js). 
              With a strong foundation in both frontend and backend technologies, I am enthusiastic about building intuitive 
              and efficient web applications that solve real-world problems.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
              My journey in web development began during my Computer Applications studies, 
              where I discovered my passion for creating digital experiences. Since then, 
              I have been committed to continuously enhancing my skills, 
              staying updated with the latest technologies, and following best industry practices.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
              Outside of coding, I enjoy exploring new technologies and expanding my knowledge to 
              stay ahead in the ever-evolving tech landscape.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-gray-100 px-4 py-2 rounded-lg">
                  <span className="block text-sm text-gray-500">Name</span>
                  <span className="font-medium">Dhanush Pandian</span>
                </div>
                <div className="bg-gray-100 px-4 py-2 rounded-lg">
                  <span className="block text-sm text-gray-500">Email</span>
                  <span className="font-medium">danushpandiyan2001@gmail.com</span>
                </div>
                <div className="bg-gray-100 px-4 py-2 rounded-lg">
                  <span className="block text-sm text-gray-500">Location</span>
                  <span className="font-medium">Chennai, Tamil Nadu, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
