import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const InputField = ({ label, id, type = 'text', value, onChange, placeholder, required = true }) => (
  <div className="relative">
    <input
      type={type}
      id={id}
      name={id}
      value={value}
      onChange={onChange}
      required={required}
      placeholder=" "
      className="peer w-full px-4 py-3 bg-secondary/30 border-2 border-secondary/50 rounded-lg focus:outline-none focus:border-primary/50 text-light placeholder-transparent transition-all duration-300"
    />
    <label
      htmlFor={id}
      className="absolute left-4 -top-2.5 px-1 text-sm text-light/70 bg-dark peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-light/50 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-primary transition-all duration-300"
    >
      {placeholder}
    </label>
  </div>
);

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
                  <a href="mailto:maryqr21@gmail.com" className="text-light/70 hover:text-primary transition-colors">
                  maryqr21@gmail.com
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
                  <a href="tel:+34637612072" className="text-light/70 hover:text-primary transition-colors">
                    +34 637 612 072
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
            className="bg-dark/50 backdrop-blur-sm p-8 rounded-2xl border-2 border-secondary/20 shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <InputField
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t('contact.name')}
              />
              
              <InputField
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t('contact.email')}
              />
              
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder=" "
                  className="peer w-full px-4 py-3 bg-secondary/30 border-2 border-secondary/50 rounded-lg focus:outline-none focus:border-primary/50 text-light placeholder-transparent resize-none transition-all duration-300"
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute left-4 -top-2.5 px-1 text-sm text-light/70 bg-dark peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-light/50 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-primary transition-all duration-300"
                >
                  {t('contact.message')}
                </label>
              </div>
              
              <motion.button
                type="submit"
                className={`w-full py-4 px-6 rounded-lg font-medium relative overflow-hidden group ${
                  isSubmitting ? 'bg-primary/50 cursor-not-allowed' : 'bg-primary hover:bg-primary/90'
                }`}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
              >
                <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-full bg-gradient-to-r from-primary/20 to-transparent group-hover:translate-x-full"></span>
                <div className="relative flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-dark border-t-transparent rounded-full animate-spin"></div>
                      <span className="text-dark">{t('contact.sending')}</span>
                    </>
                  ) : (
                    <>
                      <span className="text-dark">{t('contact.send')}</span>
                      <motion.span 
                        initial={{ x: 0 }} 
                        whileHover={{ x: 5 }}
                        className="text-dark"
                      >
                        →
                      </motion.span>
                    </>
                  )}
                </div>
              </motion.button>
              
              {/* Mensaje de estado mejorado */}
              {submitStatus && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`p-4 rounded-lg text-center flex items-center justify-center gap-2 ${
                    submitStatus === 'success' 
                      ? 'bg-green-500/10 text-green-400 border border-green-500/20' 
                      : 'bg-red-500/10 text-red-400 border border-red-500/20'
                  }`}
                >
                  {submitStatus === 'success' ? (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{t('contact.success')}</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span>{t('contact.error')}</span>
                    </>
                  )}
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