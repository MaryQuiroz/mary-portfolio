import { motion } from 'framer-motion';
import { 
  FaReact, FaJs, FaHtml5, FaCss3Alt, FaPython, 
  FaNodeJs, FaDatabase, FaGitAlt, FaFigma 
} from 'react-icons/fa';
import { SiTailwindcss, SiDjango, SiExpress, SiMongodb, SiPostgresql } from 'react-icons/si';
import { useTranslation } from 'react-i18next';

const Skills = () => {
  const { t } = useTranslation();

  const skillCategories = [
    {
      title: t('skills.frontend'),
      skills: [
        { name: "React", icon: <FaReact size={40} />, level: 90 },
        { name: "JavaScript", icon: <FaJs size={40} />, level: 85 },
        { name: "HTML5", icon: <FaHtml5 size={40} />, level: 95 },
        { name: "CSS3", icon: <FaCss3Alt size={40} />, level: 90 },
        { name: "Tailwind CSS", icon: <SiTailwindcss size={40} />, level: 85 },
      ]
    },
    {
      title: t('skills.backend'),
      skills: [
        { name: "Node.js", icon: <FaNodeJs size={40} />, level: 80 },
        { name: "Express", icon: <SiExpress size={40} />, level: 75 },
        { name: "Python", icon: <FaPython size={40} />, level: 80 },
        { name: "Django", icon: <SiDjango size={40} />, level: 70 },
      ]
    },
    {
      title: "Bases de Datos",
      skills: [
        { name: "MongoDB", icon: <SiMongodb size={40} />, level: 75 },
        { name: "PostgreSQL", icon: <SiPostgresql size={40} />, level: 70 },
        { name: "SQL", icon: <FaDatabase size={40} />, level: 80 },
      ]
    },
    {
      title: t('skills.tools'),
      skills: [
        { name: "Git", icon: <FaGitAlt size={40} />, level: 85 },
        { name: "Figma", icon: <FaFigma size={40} />, level: 75 },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="skills" className="py-20 bg-dark">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title mx-auto w-fit">{t('skills.title')}</h2>
          <p className="text-light/80 mt-6 max-w-3xl mx-auto">
            {t('skills.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card"
            >
              <h3 className="text-xl font-bold mb-6 text-primary">{category.title}</h3>
              
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                {category.skills.map((skill) => (
                  <motion.div key={skill.name} variants={itemVariants} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="text-primary">{skill.icon}</div>
                        <span className="text-light font-medium">{skill.name}</span>
                      </div>
                      <span className="text-light/70 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-secondary/50 rounded-full h-2.5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="h-2.5 rounded-full bg-gradient-to-r from-primary to-accent"
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Tecnologías adicionales */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-bold mb-6 text-light">Otras Tecnologías</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {["RESTful APIs", "GraphQL", "Redux", "Jest", "Webpack", "Docker", "AWS", "CI/CD", "Responsive Design", "UI/UX"].map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.05, color: "#00FF7F" }}
                className="px-4 py-2 bg-secondary/50 rounded-md text-light/80 hover:text-primary transition-colors"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 