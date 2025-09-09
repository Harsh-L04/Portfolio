import { useRef } from 'react';
import image1 from '../assets/img/project-img1.png';
import image2 from '../assets/img/project-img2.png';
import image3 from '../assets/img/project-img3.png';
import { motion, useInView } from 'framer-motion';
import ProjectCard from '../components/Projectcard';
import { useTheme } from '../context/Themecontext';
import { containervariants, itemvariants } from "../utils/helper";

const Project = () => {
  const { isDark } = useTheme();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "100px" });
  
  const projects = [
    {
      id: 1,
      title: "Swasthya Sarathi",
      description: "Full-stack healthcare management system with authentication & real-time scheduling.",
      url: "https://swasthya-sarathi-5l9n.onrender.com/",
      imageUrl: image1
    },
    {
      id: 2,
      title: "Whispering Journeys",
      description: "DBMS-based travel booking system with optimized SQL queries.",
      url: "https://drive.google.com/drive/folders/1tY9qRQ_oXaRv_D2Ve97JPA5luU3vmlH2?usp=drive_link",
      imageUrl: image2
    },
    {
      id: 3,
      title: "IoT-based Gas Leakage Monitoring System",
      description: "An IoT-based system that detects gas leaks and sends real-time alerts for enhanced safety.",
      url: "https://drive.google.com/file/d/1KutpFk9lOKWQawVFhuJtjcRkW_ttLU91/view?usp=drive_link",
      imageUrl: image3
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="projects"
      className={`py-8 sm:py-12 md:py-16 lg:py-20 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 min-h-screen transition-all duration-500 relative overflow-hidden ${
        isDark ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Background Elements - Responsive positioning and sizing */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-20 sm:top-32 md:top-40 right-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full blur-2xl sm:blur-3xl opacity-3 sm:opacity-5 ${
          isDark ? "bg-blue-500" : "bg-blue-400"
        }`} />
        <div className={`absolute bottom-20 sm:bottom-32 md:bottom-40 left-1/4 w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full blur-2xl sm:blur-3xl opacity-3 sm:opacity-5 ${
          isDark ? "bg-purple-500" : "bg-purple-400"
        }`} />
      </div>

      {/* Container with responsive max-width */}
      <div className="max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto relative z-10">
        {/* Header Section - Enhanced responsive typography */}
        <motion.div 
          className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containervariants}
        >
          <motion.p 
            variants={itemvariants}
            className={`text-xs sm:text-sm font-medium uppercase tracking-wide sm:tracking-widest mb-2 sm:mb-3 ${
              isDark ? "text-gray-500" : "text-gray-600"
            }`}
          >
            FEATURED WORK
          </motion.p>
          
          <motion.h2 
            variants={itemvariants}
            className={`text-3xl sm:text-4xl lg:text-5xl font-light leading-tight ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Recent <span className="text-blue-500 font-medium">Projects</span>
          </motion.h2>
          
          <motion.p 
            variants={itemvariants}
            className={`text-xl leading-relaxed max-w-xl mx-auto ${
              isDark ? "text-gray-500" : "text-gray-700"
            }`}
          >
            A collection of projects that showcase my expertise in building modern web applications and solving complex problems
          </motion.p>
          <motion.p 
            variants={itemvariants}
            className={`text-sm sm:text-sm mt-3 sm:mt-4 font-medium ${
              isDark ? "text-gray-500" : "text-gray-500"
            }`}
          >
            Click any project card to explore details
          </motion.p>
        </motion.div>

        {/* Projects Grid - Enhanced responsive grid system */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 px-2 sm:px-0"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containervariants}
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id} 
              variants={itemvariants}
              className="w-full"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        {/* Optional: Add a responsive call-to-action section */}
        <motion.div 
          className="text-center mt-8 sm:mt-12 md:mt-16 lg:mt-20"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containervariants}
        >
          <motion.div 
            variants={itemvariants}
            className="inline-flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            {/* You can add buttons or links here if needed */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Project;