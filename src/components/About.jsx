import { motion } from 'framer-motion';
import { FaGraduationCap, FaLaptopCode, FaUsers } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title mx-auto w-fit">{t('about.title')}</h2>
          <p className="text-light/80 mt-6 max-w-3xl mx-auto">
            {t('about.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Imagen y decoración */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-lg overflow-hidden border-2 border-primary/20 shadow-xl shadow-primary/10">
              <div className="aspect-[4/5] bg-gradient-to-br from-secondary to-dark flex items-center justify-center">
                <span className="text-primary text-9xl opacity-20">MQ</span>
                {/* Aquí puedes agregar tu foto si lo deseas */}
              </div>
            </div>
            
            {/* Elementos decorativos */}
            <div className="absolute top-0 left-0 w-full h-full -z-10">
              <div className="absolute top-10 -left-5 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
              <div className="absolute bottom-10 -right-5 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
            </div>
          </motion.div>

          {/* Información personal */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 text-light">
              {t('hero.role')} <span className="text-primary">Full Stack</span>
            </h3>
            
            <p className="text-light/80 mb-6">
              {t('about.description')}
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-md text-primary">
                  <FaLaptopCode size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-light">{t('about.skills')}</h4>
                  <p className="text-light/70">
                    Especializada en crear interfaces modernas y responsivas con React y aplicaciones backend robustas.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-md text-primary">
                  <FaGraduationCap size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-light">{t('about.experience')}</h4>
                  <p className="text-light/70">
                    Graduada en Desarrollo Web Frontend en La Salle BCN y formación en IA y Machine Learning con Python.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-md text-primary">
                  <FaUsers size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-light">Colaboración</h4>
                  <p className="text-light/70">
                    Experiencia en entornos Agile/Scrum, garantizando la entrega oportuna de proyectos de alta calidad.
                  </p>
                </div>
              </div>
            </div>
            
            <motion.a
              href="#contact"
              className="btn-primary inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('header.contact')}
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 