import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/80 pt-16 pb-8 relative">
      {/* Decoración superior */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-0 transform rotate-180">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-8 text-dark"
          fill="currentColor"
        >
          <path d="M1200 120L0 16.48V0h1200v120z"></path>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Logo y descripción */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold gradient-text mb-4">Mary Quiroz</h3>
            <p className="text-light/70 mb-6 max-w-md">
              Desarrolladora web especializada en crear experiencias digitales excepcionales con tecnologías modernas y enfoque en la calidad.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="https://github.com/maryquiroz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-light/70 hover:text-primary transition-colors"
                whileHover={{ y: -3 }}
              >
                <FaGithub size={22} />
              </motion.a>
              <motion.a 
                href="https://linkedin.com/in/maryquiroz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-light/70 hover:text-primary transition-colors"
                whileHover={{ y: -3 }}
              >
                <FaLinkedin size={22} />
              </motion.a>
              <motion.a 
                href="mailto:contacto@maryquiroz.com" 
                className="text-light/70 hover:text-primary transition-colors"
                whileHover={{ y: -3 }}
              >
                <FaEnvelope size={22} />
              </motion.a>
            </div>
          </div>
          
          {/* Enlaces rápidos */}
          <div>
            <h4 className="text-lg font-semibold text-light mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {['Inicio', 'Sobre Mí', 'Habilidades', 'Proyectos', 'Contacto'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-').replace('í', 'i')}`} 
                    className="text-light/70 hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Tecnologías */}
          <div>
            <h4 className="text-lg font-semibold text-light mb-4">Tecnologías</h4>
            <ul className="space-y-2">
              {['React', 'JavaScript', 'Tailwind CSS', 'Node.js', 'Python', 'Django'].map((item) => (
                <li key={item} className="text-light/70">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Línea divisoria */}
        <div className="border-t border-light/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-light/50 text-sm mb-4 md:mb-0">
            © {currentYear} Mary Quiroz. Todos los derechos reservados.
          </p>
          
          <motion.button
            onClick={scrollToTop}
            className="bg-primary/20 hover:bg-primary/30 text-primary p-3 rounded-full transition-colors"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Volver arriba"
          >
            <FaArrowUp size={18} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 