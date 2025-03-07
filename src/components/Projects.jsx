import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: "Portfolio Personal",
      description: "Mi sitio web personal construido con React y Tailwind CSS, con animaciones fluidas y diseño responsivo.",
      image: "/project1.jpg",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      category: "frontend",
      github: "https://github.com/maryquiroz/portfolio",
      demo: "https://maryquiroz.github.io/portfolio"
    },
    {
      id: 2,
      title: "E-commerce Dashboard",
      description: "Panel de administración para una tienda online con análisis de datos, gestión de productos y usuarios.",
      image: "/project2.jpg",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      category: "fullstack",
      github: "https://github.com/maryquiroz/ecommerce-dashboard",
      demo: "https://ecommerce-dashboard.vercel.app"
    },
    {
      id: 3,
      title: "App de Gestión de Tareas",
      description: "Aplicación para gestionar tareas con funcionalidades de arrastrar y soltar, filtros y estadísticas.",
      image: "/project3.jpg",
      tags: ["React", "Redux", "Firebase"],
      category: "frontend",
      github: "https://github.com/maryquiroz/task-manager",
      demo: "https://task-manager-app.vercel.app"
    },
    {
      id: 4,
      title: "API RESTful",
      description: "API para gestionar recursos con autenticación, autorización y documentación completa.",
      image: "/project4.jpg",
      tags: ["Node.js", "Express", "MongoDB", "JWT"],
      category: "backend",
      github: "https://github.com/maryquiroz/rest-api",
      demo: "https://api-docs.vercel.app"
    },
    {
      id: 5,
      title: "Aplicación de Clima",
      description: "App que muestra el clima actual y pronóstico para cualquier ubicación, con interfaz intuitiva.",
      image: "/project5.jpg",
      tags: ["React", "API", "CSS"],
      category: "frontend",
      github: "https://github.com/maryquiroz/weather-app",
      demo: "https://weather-app-demo.vercel.app"
    },
    {
      id: 6,
      title: "Sistema de Gestión de Contenido",
      description: "CMS personalizado con editor WYSIWYG, gestión de usuarios y análisis de contenido.",
      image: "/project6.jpg",
      tags: ["React", "Node.js", "PostgreSQL"],
      category: "fullstack",
      github: "https://github.com/maryquiroz/cms-system",
      demo: "https://cms-demo.vercel.app"
    }
  ];

  const filterProjects = (category) => {
    setActiveFilter(category);
  };

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title mx-auto w-fit">{t('projects.title')}</h2>
          <p className="text-light/80 mt-6 max-w-3xl mx-auto">
            {t('projects.description')}
          </p>
        </motion.div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['all', 'frontend', 'backend', 'fullstack'].map((category) => (
            <motion.button
              key={category}
              onClick={() => filterProjects(category)}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeFilter === category 
                  ? 'bg-primary text-dark font-medium' 
                  : 'bg-dark/50 text-light/80 hover:bg-dark/70'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </div>

        {/* Proyectos */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="card overflow-hidden group"
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1 }
              }}
            >
              <div className="relative overflow-hidden aspect-video">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark/90 z-10"></div>
                <div className="bg-gradient-to-br from-primary/20 to-dark/50 absolute inset-0 flex items-center justify-center">
                  <span className="text-primary text-6xl opacity-20">{project.id}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-light group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-light/70 mb-4 text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-xs px-2 py-1 rounded-md bg-dark/50 text-primary/90"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-sm-outline flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub size={16} />
                    {t('projects.viewCode')}
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-sm-primary flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt size={14} />
                    {t('projects.viewProject')}
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 