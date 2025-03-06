import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulación de envío de formulario
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Resetear el estado después de 5 segundos
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-dark relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title mx-auto w-fit">Contacto</h2>
          <p className="text-light/80 mt-6 max-w-3xl mx-auto">
            ¿Tienes un proyecto en mente? ¡Hablemos! Estoy disponible para trabajar en proyectos freelance o posiciones a tiempo completo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Información de contacto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-light mb-6">Información de Contacto</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-md text-primary">
                  <FaEnvelope size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-light">Email</h4>
                  <a 
                    href="mailto:maryqr21@gmail.com" 
                    className="text-light/70 hover:text-primary transition-colors"
                  >
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
                  <p className="text-light/70">Barcelona, Cataluña, España</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-md text-primary">
                  <FaLinkedin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-light">LinkedIn</h4>
                  <a 
                    href="https://linkedin.com/in/maryquiroz" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-light/70 hover:text-primary transition-colors"
                  >
                    linkedin.com/in/maryquiroz
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-md text-primary">
                  <FaGithub size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-light">GitHub</h4>
                  <a 
                    href="https://github.com/maryquiroz" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-light/70 hover:text-primary transition-colors"
                  >
                    github.com/maryquiroz
                  </a>
                </div>
              </div>
            </div>
            
            <div className="pt-6">
              <h4 className="text-lg font-semibold text-light mb-4">Sígueme en redes sociales</h4>
              <div className="flex gap-4">
                <motion.a
                  href="https://linkedin.com/in/maryquiroz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary/80 p-3 rounded-full text-primary hover:bg-primary hover:text-secondary transition-colors"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaLinkedin size={20} />
                </motion.a>
                <motion.a
                  href="https://github.com/maryquiroz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary/80 p-3 rounded-full text-primary hover:bg-primary hover:text-secondary transition-colors"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaGithub size={20} />
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
          >
            <div className="card h-full">
              <h3 className="text-2xl font-bold text-light mb-6">Envíame un mensaje</h3>
              
              {submitStatus === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-primary/20 border border-primary/30 rounded-lg p-4 text-center"
                >
                  <p className="text-light font-medium mb-2">¡Mensaje enviado con éxito!</p>
                  <p className="text-light/70">Me pondré en contacto contigo lo antes posible.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-light/80 mb-2">Nombre</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-secondary/50 border border-secondary rounded-md px-4 py-2 text-light focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-light/80 mb-2">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-secondary/50 border border-secondary rounded-md px-4 py-2 text-light focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-light/80 mb-2">Asunto</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-secondary/50 border border-secondary rounded-md px-4 py-2 text-light focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-light/80 mb-2">Mensaje</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-secondary/50 border border-secondary rounded-md px-4 py-2 text-light focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent resize-none"
                    ></textarea>
                  </div>
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full flex justify-center items-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <span className="inline-block w-5 h-5 border-2 border-secondary border-t-transparent rounded-full animate-spin mr-2"></span>
                    ) : null}
                    {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 