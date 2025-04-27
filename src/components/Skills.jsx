import React from 'react';
import {skills} from '../data/data';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600">
            Here are the technologies and tools I work with
          </p>
            </div>

            <div className="max-w-5xl mx-auto">
                {skills.map((skillGroup,groupIndex) => (
                    <div
                     key={groupIndex}
                     className="mb-16 last:mb-0 animate-fadeIn"
                     style={{ animationDelay: `${groupIndex * 200}ms`}}
                     >
                     <h3 className="text-2xl font-bold mb-6 text-center">{skillGroup.title}</h3>

                     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                        {skillGroup.skills.map((skill,skillIndex) => (
                            <div
                             key={skillIndex}
                             className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow
                             flex flex-col items-center">

                            <div className="w-16 h-16 flex items-center justify-center mb-4">
                              <img
                               src={skill.image}
                                alt={skill.name}
                                className="max-w-full max-h-full object-contain"
                                />
                             </div>
                             <h4 classname="text-sm font-medium text-center">{skill.name}</h4>   
                             </div>
                        ))}
                        </div>
                        </div>
                    ))}
            </div>
        </div>
    </section>
  )
}

export default Skills