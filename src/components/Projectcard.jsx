import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTheme } from '../context/Themecontext';
import { ExternalLink } from 'lucide-react';

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { isDark } = useTheme();

  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });

  const entranceVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const cardVariants = {
    rest: { scale: 1, rotateY: 0, transition: { duration: 0.3, ease: "easeOut" } },
    hover: { scale: 1.05, rotateY: 5, transition: { duration: 0.3, ease: "easeOut" } }
  };

  const overlayVariants = {
    rest: { opacity: 0, transition: { duration: 0.3 } },
    hover: { opacity: 1, transition: { duration: 0.3 } }
  };

  const contentVariants = {
    rest: { opacity: 0, y: 20, transition: { duration: 0.2 } },
    hover: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.1 } }
  };

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  };

  const toggleOverlay = () => {
    // On mobile: toggle overlay when tapped
    setIsHovered((prev) => !prev);
    
    
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="rest"
      animate={isHovered ? "hover" : "rest"}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={toggleOverlay}   // 👈 mobile fix
      style={{ perspective: "1000px" }}
      className="relative w-full h-80 rounded-2xl overflow-hidden cursor-pointer shadow-lg"
    >
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={entranceVariants}
        className="w-full h-full"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${project.imageUrl})`,
            filter: isHovered
              ? isDark
                ? 'brightness(1.2) contrast(1.1)'
                : 'brightness(1.3) contrast(1.1)'
              : 'none'
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

        {/* Title */}
        <div className="absolute top-6 left-6 right-6 z-10">
          <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
            {project.title}
          </h3>
        </div>

        {/* Hover / Tap Content */}
        <motion.div
          className={`absolute inset-0 flex flex-col justify-center items-center p-6 text-center ${
            isDark ? 'bg-black/90' : 'bg-black/80'
          }`}
          variants={overlayVariants}
          initial="rest"
          animate={isHovered ? "hover" : "rest"}
          style={{ pointerEvents: isHovered ? 'auto' : 'none' }}
        >
          <motion.div variants={contentVariants} className="space-y-4">
            <p className="text-gray-100 text-sm md:text-base leading-relaxed mb-6 max-w-xs">
              {project.description}
            </p>

            <motion.a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 cursor-pointer z-50 relative ${
                isDark
                  ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-500/25'
                  : 'bg-white hover:bg-gray-100 text-gray-900 shadow-lg hover:shadow-xl'
              }`}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <span>View Project</span>
              <ExternalLink className="ml-2 w-4 h-4" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Border Glow */}
        <motion.div
          className={`absolute inset-0 rounded-2xl border-2 pointer-events-none ${
            isDark ? 'border-blue-400/50' : 'border-blue-600/50'
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
