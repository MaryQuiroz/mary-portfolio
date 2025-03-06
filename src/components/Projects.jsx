import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: "Task Management App",
      description: "Aplicación completa de gestión de tareas con autenticación, categorías y estadísticas.",
      image: "https://via.placeholder.com/600x400/121212/00FF7F?text=Task+App",
      tags: ["React", "Node.js", "MongoDB"],
      category: "fullstack",
      github: "https://github.com/maryquiroz/task-app",
      demo: "https://task-app.maryquiroz.com",
    },
    {
      id: 2,
      title: "E-commerce Dashboard",
      description: "Panel de administración para tiendas online con análisis de ventas y gestión de inventario.",
      image: "https://via.placeholder.com/600x400/121212/00FF7F?text=E-commerce",
      tags: ["React", "Tailwind CSS", "Chart.js"],
      category: "frontend",
      github: "https://github.com/maryquiroz/ecommerce-dashboard",
      demo: "https://ecommerce.maryquiroz.com",
    },
    {
      id: 3,
      title: "API RESTful",
      description: "API completa para gestión de usuarios, productos y pedidos con autenticación JWT.",
      image: "https://via.placeholder.com/600x400/121212/00FF7F?text=API+RESTful",
      tags: ["Node.js", "Express", "MongoDB"],
      category: "backend",
      github: "https://github.com/maryquiroz/api-restful",
      demo: "https://api.maryquiroz.com/docs",
    },
    {
      id: 4,
      title: "Portfolio 3D",
      description: "Sitio web personal con efectos 3D y animaciones avanzadas.",
      image: "https://via.placeholder.com/600x400/121212/00FF7F?text=Portfolio+3D",
      tags: ["React", "Three.js", "Framer Motion"],
      category: "frontend",
      github: "https://github.com/maryquiroz/portfolio-3d",
      demo: "https://maryquiroz.com",
    },
    {
      id: 5,
      title: "Sistema de Análisis de Datos",
      description: "Aplicación para análisis y visualización de datos con IA para predicciones.",
      image: "https://via.placeholder.com/600x400/121212/00FF7F?text=Data+Analysis",
      tags: ["Python", "Django", "Pandas", "React"],
      category: "fullstack",
      github: "https://github.com/maryquiroz/data-analysis",
      demo: "https://data.maryquiroz.com",
    },
    {
      id: 6,
      title: "Aplicación de Chat en Tiempo Real",
      description: "Chat con mensajería instantánea, salas y notificaciones.",
      image: "https://via.placeholder.com/600x400/121212/00FF7F?text=Chat+App",
      tags: ["React", "Socket.io", "Node.js"],
      category: "fullstack",
      github: "https://github.com/maryquiroz/chat-app",
      demo: "https://chat.maryquiroz.com",
    },
  ];

  const filters = [
    { name: 'Todos', value: 'all' },
    { name: 'Frontend', value: 'frontend' },
    { name: 'Backend', value: 'backend' },
    { name: 'Full Stack', value: 'fullstack' },
  ];

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
          <h2 className="section-title mx-auto w-fit">Mis Proyectos</h2>
          <p className="text-light/80 mt-6 max-w-3xl mx-auto">
            Una selección de mis trabajos más recientes y destacados en desarrollo web.
          </p>
        </motion.div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <motion.button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeFilter === filter.value
                  ? 'bg-primary text-secondary font-medium'
                  : 'bg-secondary/50 text-light/70 hover:bg-secondary'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.name}
            </motion.button>
          ))}
        </div>

        {/* Proyectos */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="card group overflow-hidden"
            >
              {/* Imagen del proyecto */}
              <div className="relative overflow-hidden rounded-lg mb-4 aspect-video">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  whileHover={{ scale: 1.05 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-secondary/80 p-3 rounded-full text-primary hover:bg-primary hover:text-secondary transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaGithub size={20} />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-secondary/80 p-3 rounded-full text-primary hover:bg-primary hover:text-secondary transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaExternalLinkAlt size={20} />
                    </motion.a>
                  </div>
                </div>
              </div>

              {/* Información del proyecto */}
              <h3 className="text-xl font-bold text-light mb-2">{project.title}</h3>
              <p className="text-light/70 mb-4">{project.description}</p>
              
              {/* Etiquetas */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Botón para ver más proyectos */}
        <div className="text-center mt-12">
          <motion.a
            href="https://github.com/maryquiroz"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub size={20} />
            Ver Más Proyectos
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Projects; 