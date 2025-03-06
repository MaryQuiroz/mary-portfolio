import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center">
      {/* Fondo con efecto de partículas */}
      <div className="absolute inset-0 bg-dark">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,127,0.1),transparent_70%)]"></div>
      </div>
      
      {/* Contenido principal */}
      <div className="container mx-auto px-4 md:px-6 z-10 flex flex-col md:flex-row items-center justify-between">
        {/* Texto y CTA */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2 text-center md:text-left mb-12 md:mb-0"
        >
          <h2 className="text-light text-xl md:text-2xl mb-4 font-medium">
            ¡Hola! Soy
          </h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="gradient-text">Mary Quiroz</span>
          </h1>
          <h3 className="text-xl md:text-2xl lg:text-3xl text-light/90 mb-8">
            <span className="text-primary">Desarrolladora Web</span> especializada en crear experiencias digitales excepcionales
          </h3>
          <p className="text-light/80 text-lg mb-8 max-w-lg">
            JavaScript | React | Tailwind | Python | IA | SQL | Django
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <motion.a 
              href="#projects" 
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver Proyectos
            </motion.a>
            <motion.a 
              href="#contact" 
              className="btn-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contactar
            </motion.a>
          </div>
        </motion.div>
        
        {/* Elemento 3D */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full md:w-1/2 h-[300px] md:h-[450px]"
        >
          <Canvas>
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={2.4}>
              <MeshDistortMaterial
                color="#00FF7F"
                attach="material"
                distort={0.5}
                speed={2}
                roughness={0}
              />
            </Sphere>
            <OrbitControls enableZoom={false} autoRotate />
          </Canvas>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <p className="text-light/70 mb-2 text-sm">Desplázate para descubrir</p>
        <svg 
          className="w-6 h-6 text-primary" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero; 