import React from 'react';
import { education, cerification } from '../data/data';
import { Calendar, GraduationCap, Award } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-slate-50">
       <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Education & Certifications</h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600">
            My academic background and professional certifications
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
            <div className="mb-16">
                <h3 className="text-2xl font-bold mb-8 flex items-center justify-center">
                <GraduationCap className="mr-2 h-6 w-6 text-blue-600" />
                <span>Education</span>
         </h3>       

         <div className="space-y-8">
            {education.map((edu,index) => (
                <div
                key={edu.id}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow animate-fadeIn"
                style={{ animationDelay: `${index * 200}ms`}}
                >
             <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4 flex-shrink-0">
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="w-full h-auto rounded-lg object-cover aspect-video md:aspect-square"
                  />
                  </div>

                  <div className="md:w-3/4">
                   <h4 className="text-xl font-bold mb-1">{edu.degree}</h4>
                   <h5 className="text-lg font-medium text-gray-700 mb-2">{edu.school}</h5>
                  
                  <div className="flex items-center text-gray-500 mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">{edu.date}</span>
                    </div>

                 <p className="text-gray-600 mb-2">
                    <span className="font-medium">Grade:</span>|{edu.grade}
                 </p>
                 <p className="text-gray-600">{edu.desc}</p>
                    </div>
                  </div>
                </div>
                  ))}
            </div>     
           </div>

         <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center justify-center">
            <Award className="mr-2 h-6 w-6 text-blue-600" />
            <span>Certifications</span>
            </h3>         
            </div>

            <div className="space-y-8">
                {cerification.map((cert,index) => (
                    <div
                     key={cert.id}
                     className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow animate-fadeIn"
                     style={{ animationDelay: `${index * 200}ms`}}
                     >
                        <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/4 flex-shrink-0">
                      <img 
                        src={cert.img} 
                        alt={cert.company} 
                        className="w-full h-auto rounded-lg object-cover aspect-video md:aspect-square"
                      />
                    </div>

                    <div className="md:w-3/4">
                    <h4 className="text-xl font-bold mb-1">{cert.role}</h4>                
                    <h5 className="text-lg font-medium text-gray-700 mb-2">{cert.company}</h5>

                    <div className="flex items-center text-gray-500 mb-4">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="text-sm">{cert.date}</span>
                      </div>
                      
                      <p className="text-gray-600 mb-4">{cert.desc}</p>

                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill,skillIndex) => (
                            <span
                            key={skillIndex}
                            className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                          >
                            {skill}
                            </span>
                        ))}
                      </div>
                   </div>
                   </div>
                   </div>
                  ))}
           </div>
       </div>
       </div>
    </section>
    
  )
}

export default Education