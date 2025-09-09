import {useRef} from "react";
import {motion, useInView, useScroll, useTransform} from "framer-motion";
import { Tech, skills } from "../utils/data";
import { containervariants, itemvariants } from "../utils/helper";
import { useTheme } from "../context/Themecontext";

export default function SkillsSection() {
  const {isDark} = useTheme();
  const sectionRef = useRef(null);
  const isInview = useInView(sectionRef, {once: true, margin: "100px"});

  // Fix: Correct property name
  const {scrollYProgress} = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Fix: Ensure scrollYProgress exists before using useTransform
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  
  const skillBarVariants = {
    hidden: {width: 0, opacity: 0},
    visible: (level) => ({
      width: `${level}%`,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        delay: 0.3,
      },
    }),
  };

  return (
    <section 
      ref={sectionRef} 
      id="skills" 
      className={`py-24 px-6 ${
        isDark ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      } relative overflow-hidden`}
    >
      {/* Background Elements */}
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          initial="hidden" 
          animate={isInview ? "visible" : "hidden"} 
          variants={containervariants}
          className="text-center mb-20"
        >
          <motion.div 
            variants={itemvariants} 
            className={`text-sm mb-3 uppercase tracking-widest ${
              isDark ? "text-gray-500" : "text-gray-600"
            }`}
          > 
            Technology Expertise 
          </motion.div>
          
          <motion.h2 
            variants={itemvariants} 
            className="text-3xl md:text-5xl font-light mb-6"
          >
            Skills & <span className="text-blue-500 font-medium">Technologies</span>
          </motion.h2>

          <motion.p 
            variants={itemvariants} 
            className={`text-xl leading-relaxed max-w-xl mx-auto ${
              isDark ? "text-gray-500" : "text-gray-700"
            } `}
          >
           A versatile set of programming languages, frameworks, and tools for building efficient, scalable, and user-friendly applications.
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial="hidden"
          animate={isInview ? "visible" : "hidden"}
          variants={containervariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills && skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <motion.div
                key={index}
                variants={itemvariants}
                className={`p-6 rounded-2xl border transition-all duration-300 hover:scale-105 ${
                  isDark 
                    ? "bg-gray-900/50 border-gray-800 hover:border-gray-700" 
                    : "bg-white border-gray-200 hover:border-gray-300"
                } backdrop-blur-sm`}
              >
                <div className="flex items-center mb-4">
                  {IconComponent && <IconComponent className={`text-3xl ${skill.className || 'text-blue-500'} mr-3`} />}
                  <h3 className="text-xl font-medium">{skill.name}</h3>
                </div>
                
                {/* Skill Bar */}
                {skill.level && (
                  <div className={`w-full rounded-full h-2 ${
                    isDark ? "bg-gray-800" : "bg-gray-200"
                  }`}>
                    <motion.div
                      initial="hidden"
                      animate={isInview ? "visible" : "hidden"}
                      custom={skill.level}
                      variants={skillBarVariants}
                      className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                    />
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Tech Stack Tags */}
        {Tech && (
          <motion.div
            initial="hidden"
            animate={isInview ? "visible" : "hidden"}
            variants={containervariants}
            className="mt-16 text-center"
          >
            <motion.div 
              variants={itemvariants} 
              className={`text-sm uppercase tracking-widest mb-3 ${
                isDark ? "text-gray-500" : "text-gray-600"
              } `}
            >
              Addtional Tools & Software
            </motion.div>
            
            <motion.div variants={itemvariants} className="flex flex-wrap justify-center items-center gap-4 ">
              {Tech.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -2,
                    boxShadow: isDark ? "0 10px 25px rgba(59, 130, 246, 0.15)" : "0 10px 25px rgba(0, 0, 0, 0.1)"
                  }}
                  className={`px-4 py-2 rounded-full border text-sm transition-all duration-300 ${
                    isDark 
                      ? "bg-gray-900/50 border-gray-700 text-gray-300 hover:border-blue-500/50 hover:bg-blue-500/10" 
                      : "bg-white border-gray-300 text-gray-700 hover:border-blue-500 hover:bg-blue-50"
                  }`}
                >
                  {tech}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}