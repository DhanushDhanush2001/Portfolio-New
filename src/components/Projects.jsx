import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/data";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import ProjectModal from "./ProjectModal";

const ITEMS_PER_PAGE = 3;

const Projects = () => {
  const [page, setPage] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);
  const visibleProjects = projects.slice(
    page * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          className="mb-12 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Latest Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4" />
          <p className="text-gray-600">
            Here are some of the projects I've worked on MERN Stack Technologies
          </p>
        </motion.div>

        {/* Grid */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Image */}
                <div className="h-48 overflow-hidden">
                  <motion.img
                    src={project.image}
                    loading="lazy"
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>

                {/* Card body */}
                <div className="p-6">
                  <h3 className="font-bold text-xl text-gray-800 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Quick links */}
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 bg-gray-100 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
                      aria-label="GitHub"
                    >
                      <FaGithub size={16} />
                    </a>
                    {project.webapp && (
                      <a
                        href={project.webapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 bg-gray-100 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
                        aria-label="Live site"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-4">
              <button
                className="bg-white p-3 rounded-full shadow-md hover:bg-blue-600 hover:text-white disabled:opacity-40"
                aria-label="Previous page"
                onClick={() => setPage((p) => Math.max(0, p - 1))}
                disabled={page === 0}
              >
                <ChevronLeft size={20} />
              </button>
              <span className="text-gray-600">
                {page + 1} / {totalPages}
              </span>
              <button
                className="bg-white p-3 rounded-full shadow-md hover:bg-blue-600 hover:text-white disabled:opacity-40"
                aria-label="Next page"
                onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
                disabled={page === totalPages - 1}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
