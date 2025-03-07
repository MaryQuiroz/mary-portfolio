import { motion } from 'framer-motion';
import { FaHeart, FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-secondary/30 pt-16 pb-8 relative">
      <div className="container mx-auto px-4 md:px-6">
        {/* Contenido principal del footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Logo y descripción */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">Mary<span className="text-primary">Quiroz</span></h3>
            <p className="text-light/70 mb-6">
              Desarrolladora web apasionada por crear experiencias digitales excepcionales.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="https://github.com/maryquiroz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-light/70 hover:text-primary transition-colors"
                whileHover={{ y: -3 }}
              >
                <FaGithub size={20} />
              </motion.a>
              <motion.a 
                href="https://linkedin.com/in/maryquiroz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-light/70 hover:text-primary transition-colors"
                whileHover={{ y: -3 }}
              >
                <FaLinkedin size={20} />
              </motion.a>
              <motion.a 
                href="https://twitter.com/maryquiroz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-light/70 hover:text-primary transition-colors"
                whileHover={{ y: -3 }}
              >
                <FaTwitter size={20} />
              </motion.a>
            </div>
          </div>
          
          {/* Enlaces rápidos */}
          <div>
            <h4 className="text-lg font-semibold text-light mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-light/70 hover:text-primary transition-colors">
                  {t('header.home')}
                </a>
              </li>
              <li>
                <a href="#about" className="text-light/70 hover:text-primary transition-colors">
                  {t('header.about')}
                </a>
              </li>
              <li>
                <a href="#skills" className="text-light/70 hover:text-primary transition-colors">
                  {t('header.skills')}
                </a>
              </li>
              <li>
                <a href="#projects" className="text-light/70 hover:text-primary transition-colors">
                  {t('header.projects')}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-light/70 hover:text-primary transition-colors">
                  {t('header.contact')}
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contacto */}
          <div>
            <h4 className="text-lg font-semibold text-light mb-4">{t('contact.title')}</h4>
            <ul className="space-y-2">
              <li className="text-light/70">
                <span className="block">Email:</span>
                <a href="mailto:mary@example.com" className="hover:text-primary transition-colors">
                  mary@example.com
                </a>
              </li>
              <li className="text-light/70">
                <span className="block">Teléfono:</span>
                <a href="tel:+34600000000" className="hover:text-primary transition-colors">
                  +34 600 000 000
                </a>
              </li>
              <li className="text-light/70">
                <span className="block">Ubicación:</span>
                <span>Barcelona, España</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Línea divisoria */}
        <div className="h-px bg-gradient-to-r from-transparent via-light/10 to-transparent my-8"></div>
        
        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-light/60 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Mary Quiroz. {t('footer.rights')}
          </p>
          <p className="text-light/60 text-sm flex items-center">
            {t('footer.madeWith')} <FaHeart className="text-primary mx-1" /> {t('footer.by')} Mary Quiroz
          </p>
        </div>
      </div>
      
      {/* Botón para volver arriba */}
      <motion.button
        onClick={scrollToTop}
        className="absolute right-6 bottom-6 bg-primary text-dark p-3 rounded-full shadow-lg"
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <FaArrowUp size={20} />
      </motion.button>
    </footer>
  );
};

export default Footer; 