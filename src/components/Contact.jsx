import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulación de envío de formulario
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Resetear el estado después de 5 segundos
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-dark relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30">
        <div className="absolute top-20 left-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title mx-auto w-fit">{t('contact.title')}</h2>
          <p className="text-light/80 mt-6 max-w-3xl mx-auto">
            {t('contact.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Información de contacto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8 text-light">
              {t('contact.getInTouch')}
            </h3>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-md text-primary">
                  <FaEnvelope size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-light">Email</h4>
                  <a href="mailto:mary@example.com" className="text-light/70 hover:text-primary transition-colors">
                    mary@example.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-md text-primary">
                  <FaMapMarkerAlt size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-light">Ubicación</h4>
                  <p className="text-light/70">
                    Barcelona, España
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-md text-primary">
                  <FaPhone size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-light">Teléfono</h4>
                  <a href="tel:+34600000000" className="text-light/70 hover:text-primary transition-colors">
                    +34 600 000 000
                  </a>
                </div>
              </div>
            </div>
            
            {/* Redes sociales */}
            <div>
              <h4 className="text-lg font-semibold text-light mb-4">Redes Sociales</h4>
              <div className="flex gap-4">
                <motion.a 
                  href="https://github.com/maryquiroz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-secondary/50 p-3 rounded-md text-light hover:text-primary hover:bg-secondary/70 transition-colors"
                  whileHover={{ y: -5 }}
                >
                  <FaGithub size={24} />
                </motion.a>
                <motion.a 
                  href="https://linkedin.com/in/maryquiroz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-secondary/50 p-3 rounded-md text-light hover:text-primary hover:bg-secondary/70 transition-colors"
                  whileHover={{ y: -5 }}
                >
                  <FaLinkedin size={24} />
                </motion.a>
                <motion.a 
                  href="https://twitter.com/maryquiroz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-secondary/50 p-3 rounded-md text-light hover:text-primary hover:bg-secondary/70 transition-colors"
                  whileHover={{ y: -5 }}
                >
                  <FaTwitter size={24} />
                </motion.a>
              </div>
            </div>
          </motion.div>
          
          {/* Formulario de contacto */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="card"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-light font-medium mb-2">
                  {t('contact.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-secondary/50 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 text-light"
                  placeholder={t('contact.name')}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-light font-medium mb-2">
                  {t('contact.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-secondary/50 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 text-light"
                  placeholder={t('contact.email')}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-light font-medium mb-2">
                  {t('contact.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-secondary/50 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 text-light resize-none"
                  placeholder={t('contact.message')}
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                className="btn-primary w-full flex justify-center items-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-light border-t-transparent rounded-full animate-spin mr-2"></div>
                ) : null}
                {isSubmitting ? 'Enviando...' : t('contact.send')}
              </motion.button>
              
              {/* Mensaje de estado */}
              {submitStatus && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-3 rounded-md text-center ${
                    submitStatus === 'success' 
                      ? 'bg-green-500/20 text-green-300' 
                      : 'bg-red-500/20 text-red-300'
                  }`}
                >
                  {submitStatus === 'success' 
                    ? t('contact.success')
                    : t('contact.error')
                  }
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 