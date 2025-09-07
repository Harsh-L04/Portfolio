import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import { ArrowDown , Mail} from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { useTheme } from "../context/Themecontext";
import { containervariants, itemvariants } from "../utils/helper";
import profile_pic from "../assets/img/image.svg";

const Hero = () => {
  const { isDark } = useTheme();

  // Corrected useScroll usage
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, -100]);

  const ScrollToSection = (sectionID) => {
    const element = document.getElementById(sectionID);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Variants
  const textvariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imagevariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.5,
      },
    },
  };

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        isDark ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Hero Section */}
      <motion.section 
        id="home" 
        style={{ y: heroY }} 
        className="min-h-screen flex items-center justify-center relative px-4 md:px-8 lg:px-16 py-8 md:py-12 lg:py-16"
      >
        <div className="absolute inset-0 overflow-hidden">
          {/* Decorative Blobs - Responsive sizing */}
          <motion.div
            animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className={`absolute 
              top-10 right-5 w-24 h-24 
              md:top-20 md:right-20 md:w-40 md:h-40 
              lg:w-64 lg:h-64 
              rounded-full blur-3xl opacity-10 
              ${isDark ? "bg-blue-500" : "bg-blue-400"}`}
          />

          <motion.div
            animate={{ scale: [1.1, 1, 1.1], rotate: [360, 180, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className={`absolute 
              bottom-10 left-5 w-20 h-20 
              md:bottom-16 md:left-16 md:w-32 md:h-32 
              lg:bottom-20 lg:left-20 lg:w-48 lg:h-48 
              rounded-full blur-3xl opacity-10 
              ${isDark ? "bg-purple-500" : "bg-purple-400"}`}
          />

          {/* Main Content Container */}
          <div className="max-w-7xl mx-auto w-full z-10  flex flex-col mt-20 items-center">
            
            {/* SMALL DEVICES: Mobile-First Layout (< 768px) */}
            <div className="block md:hidden w-full mt-30">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={containervariants}
                className="text-center space-y-4"
              >
                {/* Profile Image - Small */}
                <motion.div variants={imagevariants} className="mb-4">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto relative">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className={`w-full h-full rounded-2xl overflow-hidden border-2 ${
                        isDark ? "border-gray-800" : "border-gray-300"
                      } shadow-xl`}
                    >
                      <img src={profile_pic} alt="Profile" className="w-full h-full object-cover object-center"/>
                    </motion.div>

                    {/* Decorative Ring - Small */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute -inset-1 rounded-2xl border border-blue-500/20"
                    />
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute -inset-1 rounded-3xl border border-purple-500/25"
                    />
                  </div>
                </motion.div>

                {/* Heading - Small */}
                <motion.h1 variants={itemvariants} className="text-2xl sm:text-3xl font-light leading-tight">
                  <span className={`${isDark ? "text-white" : "text-gray-900"}`}>
                    Hi, I am
                  </span>
                  <span className={`font-medium ml-2 ${isDark ? "text-blue-500" : "text-blue-700"}`}>
                    Harsh Lad
                  </span>
                  
                </motion.h1>

                {/* Description - Small */}
                <motion.p
                  variants={itemvariants}
                  className={`text-sm sm:text-base ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  } max-w-sm mx-auto font-light leading-relaxed`}
                >
                  I craft beautiful, functional web applications with modern
                  technologies and thoughtful user experiences.
                </motion.p>

                {/* CTA Buttons - Small */}
                <motion.div variants={itemvariants} className="flex gap-4 justify-center items-center">
                  <motion.button
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => window.open('https://drive.google.com/drive/folders/1JuD_zSZaQoANAKmG7dVTwR9XXHrR-zZ2', '_blank', 'noopener,noreferrer')}
                    className="w-38 sm:w-auto px-5 py-2.5 rounded-full bg-blue-500 text-white font-medium text-xs sm:text-sm uppercase tracking-wider shadow-md hover:bg-blue-600 transition-all duration-300"
                  >
                    View CV
                  </motion.button>

                  <motion.button
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => ScrollToSection("contact")}
                    className={`w-38 sm:w-auto border ${
                      isDark
                        ? "border-gray-700 hover:border-gray-600 text-gray-300"
                        : "border-gray-400 hover:border-gray-500 text-gray-700"
                    } px-5 py-2.5 rounded-full text-xs sm:text-sm uppercase tracking-wider font-medium transition-all duration-300`}
                  >
                    Get In Touch
                  </motion.button>
                </motion.div>

                {/* Social Links - Small */}
                <motion.div variants={itemvariants} className="flex justify-center space-x-4">
                  {[
                    { icon: FiGithub, href: "https://github.com/Harsh-L04" },
                    { icon: FiLinkedin, href: "https://www.linkedin.com/in/hlad0411" },
                    { icon: Mail, href: "mailto:harshlad0411@gmail.com" },
                  ].map((social, index) => {
                    const Icon = social.icon;
                    return(
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -3, scale: 1.1 }}
                        className={`p-2 rounded-full transition-colors ${
                          isDark
                            ? "text-gray-400 hover:text-white hover:bg-gray-800"
                            : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                        }`}
                      >
                        <Icon size={16} />
                      </motion.a>
                    );
                  })}
                </motion.div>

                {/* Tech Stack - Small */}
                <motion.div
                  variants={itemvariants}
                  className="flex justify-center items-center space-x-2 text-xs uppercase tracking-wide flex-wrap gap-1"
                >
                  <span className={isDark ? "text-gray-400" : "text-gray-500"}>React</span>
                  <span className={isDark ? "text-gray-600" : "text-gray-400"}>·</span>
                  <span className={isDark ? "text-gray-400" : "text-gray-500"}>Tailwind CSS</span>
                  <span className={isDark ? "text-gray-600" : "text-gray-400"}>·</span>
                  <span className={isDark ? "text-gray-400" : "text-gray-500"}>Framer Motion</span>
                  <span className={isDark ? "text-gray-600" : "text-gray-400"}>·</span>
                  <span className={isDark ? "text-gray-400" : "text-gray-500"}>Node.js</span>
                </motion.div>
              </motion.div>
            </div>

            {/* MEDIUM DEVICES: Tablet Layout (768px - 1024px) */}
            <div className="hidden md:block lg:hidden w-full">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={containervariants}
                className="text-center space-y-8"
              >
                {/* Profile Image - Medium */}
                <motion.div variants={imagevariants} className="mb-8">
                  <div className="w-40 h-40 mx-auto relative">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className={`w-full h-full rounded-3xl overflow-hidden border-3 ${
                        isDark ? "border-gray-800" : "border-gray-300"
                      } shadow-2xl`}
                    >
                      <img src={profile_pic} alt="Profile" className="w-full h-full object-cover object-center"/>
                    </motion.div>

                    {/* Decorative Rings - Medium */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute -inset-2 rounded-3xl border border-blue-500/25"
                    />
                    
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute -inset-3 rounded-3xl border border-purple-500/25"
                    />
                  </div>
                </motion.div>
                
                {/* Heading - Medium */}
                <motion.h1 variants={itemvariants} className="text-4xl md:text-5xl font-light leading-tight">
                   <span className={`${isDark ? "text-white" : "text-gray-900"}`}>
                    Hi, I am
                  </span>
                  <span className={`font-medium ml-2 ${isDark ? "text-blue-500" : "text-blue-700"}`}>
                    Harsh Lad
                  </span>
                  
                </motion.h1>

                {/* Description - Medium */}
                <motion.p
                  variants={itemvariants}
                  className={`text-lg ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  } max-w-2xl mx-auto font-light leading-relaxed`}
                >
                  I craft beautiful, functional web applications with modern
                  technologies and thoughtful user experiences.
                </motion.p>

                {/* CTA Buttons - Medium */}
                <motion.div variants={itemvariants} className="flex gap-4 justify-center items-center">
                  <motion.button
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => window.open('https://drive.google.com/drive/folders/1JuD_zSZaQoANAKmG7dVTwR9XXHrR-zZ2', '_blank', 'noopener,noreferrer')}
                    className="px-6 py-3 rounded-full bg-blue-500 text-white font-medium text-sm uppercase tracking-wider shadow-lg hover:bg-blue-600 transition-all duration-300"
                  >
                    View CV
                  </motion.button>

                  <motion.button
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => ScrollToSection("contact")}
                    className={`border ${
                      isDark
                        ? "border-gray-700 hover:border-gray-600 text-gray-300"
                        : "border-gray-400 hover:border-gray-500 text-gray-700"
                    } px-6 py-3 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300`}
                  >
                    Get In Touch
                  </motion.button>
                </motion.div>

                {/* Social Links - Medium */}
                <motion.div variants={itemvariants} className="flex justify-center space-x-5">
                  {[
                    { icon: FiGithub, href: "https://github.com/Harsh-L04" },
                    { icon: FiLinkedin, href: "https://www.linkedin.com/in/hlad0411" },
                    { icon: Mail, href: "mailto:harshlad0411@gmail.com" },
                  ].map((social, index) => {
                    const Icon = social.icon;
                    return(
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -3, scale: 1.1 }}
                        className={`p-3 rounded-full transition-colors ${
                          isDark
                            ? "text-gray-400 hover:text-white hover:bg-gray-800"
                            : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                        }`}
                      >
                        <Icon size={20} />
                      </motion.a>
                    );
                  })}
                </motion.div>

                {/* Tech Stack - Medium */}
                <motion.div
                  variants={itemvariants}
                  className="flex justify-center items-center space-x-4 text-sm uppercase tracking-widest"
                >
                  <span className={isDark ? "text-gray-400" : "text-gray-500"}>React</span>
                  <span className={isDark ? "text-gray-600" : "text-gray-400"}>·</span>
                  <span className={isDark ? "text-gray-400" : "text-gray-500"}>Tailwind CSS</span>
                  <span className={isDark ? "text-gray-600" : "text-gray-400"}>·</span>
                  <span className={isDark ? "text-gray-400" : "text-gray-500"}>Framer Motion</span>
                  <span className={isDark ? "text-gray-600" : "text-gray-400"}>·</span>
                  <span className={isDark ? "text-gray-400" : "text-gray-500"}>Node.js</span>
                </motion.div>
              </motion.div>
            </div>

            {/* LARGE DEVICES: Desktop Layout (≥ 1024px) */}
            <div className="hidden lg:grid lg:grid-cols-2 lg:gap-12 xl:gap-16 lg:items-center w-full">
              {/* Left Column - Content */}
              <motion.div  
                initial="hidden" 
                animate="visible" 
                variants={containervariants} 
                className="text-left space-y-8"
              >
                {/* Heading - Large */}
                <motion.h1 
                  initial={{ x: 10, opacity: 0 }} 
                  variants={itemvariants} 
                  className="text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-light leading-tight"
                >
                  <span className={`${isDark ? "text-white" : "text-gray-900"}`}>
                    Hi, I am
                  </span>
                  <span className={`font-medium ml-2 ${isDark ? "text-blue-500" : "text-blue-700"}`}>
                    Harsh Lad
                  </span>
                  
                </motion.h1>

                {/* Description - Large */}
                <motion.p
                  initial={{ x: 10, opacity: 0 }}
                  variants={itemvariants}
                  className={`text-lg xl:text-xl ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  } font-light leading-relaxed max-w-lg`}
                >
                  I craft beautiful, functional web applications with modern
                  technologies and thoughtful user experiences.
                </motion.p>

                {/* CTA Buttons - Large */}
                <motion.div 
                  initial={{ x: 10, opacity: 0 }} 
                  variants={itemvariants} 
                  className="flex gap-4"
                >
                  <motion.button
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => window.open('https://drive.google.com/drive/folders/1JuD_zSZaQoANAKmG7dVTwR9XXHrR-zZ2', '_blank', 'noopener,noreferrer')}
                    className="px-6 py-3 rounded-full bg-blue-500 text-white font-medium text-sm uppercase tracking-wider hover:bg-blue-600 transition-all duration-300 shadow-lg"
                  >
                    View CV
                  </motion.button>

                  <motion.button
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => ScrollToSection("contact")}
                    className={`border ${
                      isDark
                        ? "border-gray-700 hover:border-gray-600 text-gray-300"
                        : "border-gray-300 hover:border-gray-400 text-gray-700"
                    } px-6 py-3 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300`}
                  >
                    Get In Touch
                  </motion.button>
                </motion.div>

                {/* Social Links - Large */}
                <motion.div variants={itemvariants} className="flex space-x-4">
                  {[
                    { icon: FiGithub, href: "https://github.com/Harsh-L04" },
                    { icon: FiLinkedin, href: "https://www.linkedin.com/in/hlad0411" },
                    { icon: Mail, href: "mailto:harshlad0411@gmail.com" },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -3, scale: 1.1 }}
                      className={`p-2.5 rounded-full transition-colors ${
                        isDark
                          ? "text-gray-400 hover:text-white hover:bg-gray-800"
                          : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                      }`}
                    >
                      <social.icon size={18} />
                    </motion.a>
                  ))}
                </motion.div>
              </motion.div>

              {/* Right Column - Image & Tech Stack */}
              <motion.div 
                initial="hidden" 
                animate="visible" 
                variants={imagevariants} 
                className="flex justify-center lg:justify-end"
              >
                <div className="relative w-[350px] lg:w-[400px] xl:w-[450px] 2xl:w-[500px] h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[550px] flex flex-col items-center justify-center">
                  {/* Decorative Rings - Background Layer */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute top-0.55 left-0.55 w-[300px] lg:w-[350px] xl:w-[380px] 2xl:w-[420px] h-[330px] lg:h-[380px] xl:h-[420px] 2xl:h-[450px] rounded-3xl border border-blue-500/25 z-0"
                    style={{ transform: 'translate(-50%, -50%)' }}
                  />
                  <motion.div
                    animate={{rotate: -360}}
                    transition={{
                      duration: 30,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute top-0.55 left-0.55 w-[350px] lg:w-[400px] xl:w-[430px] 2xl:w-[470px] h-[380px] lg:h-[430px] xl:h-[470px] 2xl:h-[510px] rounded-3xl border border-purple-500/30 z-0"
                    style={{ transform: 'translate(-50%, -50%)' }}
                  />

                  {/* Content Container - Centered within rings */}
                  <div className="relative z-50 flex flex-col items-center">
                    {/* Tech Stack - Above Image */}
                    <motion.div
                      variants={itemvariants}
                      className="flex items-center space-x-4 xl:space-x-3 text-xs uppercase tracking-widest mb-6 xl:mb-8 z-50 flex-wrap justify-center"
                    >
                      <span className={isDark ? "text-gray-300" : "text-gray-600"}>React</span>
                      <span className={isDark ? "text-gray-500" : "text-gray-400"}>·</span>
                      <span className={isDark ? "text-gray-300" : "text-gray-600"}>Tailwind CSS</span>
                      <span className={isDark ? "text-gray-500" : "text-gray-400"}>·</span>
                      <span className={isDark ? "text-gray-300" : "text-gray-600"}>Framer Motion</span>
                      <span className={isDark ? "text-gray-500" : "text-gray-400"}>·</span>
                      <span className={isDark ? "text-gray-300" : "text-gray-600"}>Node.js</span>
                    </motion.div>

                    {/* Profile Image - Large */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className={`w-56 lg:w-64 xl:w-72 2xl:w-80 h-64 lg:h-80 xl:h-84 2xl:h-96 rounded-3xl overflow-hidden border-4 ${
                        isDark ? "border-gray-800" : "border-gray-300"
                      } shadow-3xl z-50 relative`}
                    >
                      <img src={profile_pic} alt="Profile" className="w-full h-full object-cover"/>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          >
            <ArrowDown
              size={20}
              className={isDark ? "text-gray-600" : "text-gray-400"}
            />
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Hero;