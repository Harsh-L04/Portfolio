import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/Themecontext";
import { Code, Briefcase, GraduationCap, Layers, Brain } from "lucide-react";
import { useRef } from "react";

const AboutMe = () => {
  const { isDark } = useTheme();
  const aboutref = useRef(null);
  
  const timeline = [
    {
      year: "2022",
      title: "Academic Milestone",
      subtitle: "DAU Admission",
      description:
        "Secured 152nd rank in ACPC across Gujarat and began my B.Tech in Information & Communication Technology at DAU.",
      icon: <GraduationCap size={24} />,
      color: "bg-blue-500",
    },
    {
      year: "2023",
      title: "First Internship",
      subtitle: "GKSM NGO Trust",
      description:
        "Interned at GKSM NGO Trust, leading cybersecurity awareness sessions on UPI fraud prevention and digital safety in rural communities.",
      icon: <Briefcase size={24} />,
      color: "bg-green-500",
    },
    {
      year: "2024",
      title: "Projects & Learning",
      subtitle: "DBMS & IoT",
      description:
        "Built a DBMS-based travel management system and worked on an IoT-based project, gaining hands-on experience in databases and hardware-software integration.",
      icon: <Layers size={24} />,
      color: "bg-yellow-500",
    },
    {
      year: "2024",
      title: "MERN Project",
      subtitle: "Healthcare Management System",
      description:
        "Developed a Healthcare Management System (MERN stack) with user registration, appointment booking, and admin dashboard features.",
      icon: <Code size={24} />,
      color: "bg-purple-500",
    },
    {
      year: "2025",
      title: "Research Internship",
      subtitle: "DAU Summer Internship",
      description:
        "Worked on Graph Neural Networks (GNNs) for citation classification during a summer research internship at DAU, using Python and PyTorch Geometric.",
      icon: <Brain size={24} />,
      color: "bg-pink-500",
    },
  ];

  // Motion variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25, duration: 0.6 },
    },
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      ref={aboutref}
      id="about"
      className={`py-20 transition-all duration-500 ${
        isDark ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p
            className={`text-sm font-medium uppercase tracking-wider mb-2 ${
              isDark ? "text-gray-500" : "text-gray-600"
            }`}
          >
            Get to Know 
          </p>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-light leading-tight ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            About <span className="text-blue-500 font-medium">Me</span>
          </h2>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          className="mb-16 lg:mb-20"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3
            className={`text-2xl sm:text-3xl  mb-6 text-center lg:text-left ${
              isDark ? "text-white" : "text-gray-900"
            }`}
            variants={item}
          >
            Why I Believe in Technology
          </motion.h3>
          <motion.p
            className={`leading-relaxed mb-6 text-base text-xl text-center lg:text-left ${
              isDark ? "text-gray-500" : "text-gray-700"
            }`}
            variants={item}
          >
            I believe technology should be a bridge that connects people and solves
            real-world problems. My passion lies in crafting digital experiences that
            are not just functional, but delightful and accessible to everyone.
          </motion.p>
        </motion.div>

        {/* Developer Journey Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3
            className={`text-xl sm:text-2xl lg:text-3xl font-light leading-tight ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            My Developer <span className="text-blue-500">Journey</span>
          </h3>
        </motion.div>

        {/* Responsive Timeline Grid */}
        <motion.div
          className="relative"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Small devices: Single column */}
          <div className="block sm:hidden">
            <div className="space-y-6">
              {timeline.map((itemData, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center"
                  variants={item}
                >
                  {/* Icon */}
                  <div
                    className={`flex items-center justify-center w-14 h-14 rounded-full ${itemData.color} text-white shadow-lg mb-4`}
                  >
                    {itemData.icon}
                  </div>

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ y: -5 }}
                    className={`w-full max-w-sm h-[230px] p-5 rounded-2xl border shadow-md transition-all duration-300 grid grid-rows-[auto_1fr_auto] ${
                      isDark
                        ? "bg-gray-900 border-gray-800 hover:border-gray-700"
                        : "bg-white border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    {/* Header */}
                    <div className="mb-3">
                      <h4
                        className={`font-semibold text-lg mb-2 leading-tight text-center ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {itemData.title}
                      </h4>
                      <span className="text-sm text-blue-500 font-semibold block text-center">
                        {itemData.subtitle}
                      </span>
                    </div>

                    {/* Description */}
                    <div className="mb-3">
                      <p
                        className={`text-sm leading-relaxed text-center ${
                          isDark ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {itemData.description}
                      </p>
                    </div>

                    {/* Year badge */}
                    <div className="flex justify-center">
                      <span
                        className={`inline-block text-xs font-bold px-3 py-1 rounded-full ${
                          isDark
                            ? "bg-gray-700 text-gray-300"
                            : "bg-gray-200 text-gray-700"
                        }`}
                      >
                        {itemData.year}
                      </span>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Medium devices: 2-2-1 grid layout */}
          <div className="hidden sm:block lg:hidden">
            {/* First row - 2 items */}
            <div className="flex justify-center mb-8">
              <div className="grid grid-cols-2 gap-6 max-w-2xl">
                {timeline.slice(0, 2).map((itemData, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center"
                    variants={item}
                  >
                    {/* Icon */}
                    <div
                      className={`flex items-center justify-center w-16 h-16 rounded-full ${itemData.color} text-white shadow-lg mb-6`}
                    >
                      {itemData.icon}
                    </div>

                    {/* Content Card */}
                    <motion.div
                      whileHover={{ y: -5 }}
                      className={`w-full h-[320px] p-5 rounded-2xl border shadow-md transition-all duration-300 grid grid-rows-[auto_1fr_auto] ${
                        isDark
                          ? "bg-gray-900 border-gray-800 hover:border-gray-700"
                          : "bg-white border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      {/* Header */}
                      <div className="mb-4">
                        <h4
                          className={`font-semibold text-lg mb-2 leading-tight text-center ${
                            isDark ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {itemData.title}
                        </h4>
                        <span className="text-sm text-blue-500 font-semibold block text-center">
                          {itemData.subtitle}
                        </span>
                      </div>

                      {/* Description */}
                      <div className="mb-4">
                        <p
                          className={`text-sm leading-relaxed text-center ${
                            isDark ? "text-gray-300" : "text-gray-600"
                          }`}
                        >
                          {itemData.description}
                        </p>
                      </div>

                      {/* Year badge */}
                      <div className="flex justify-center">
                        <span
                          className={`inline-block text-xs font-bold px-3 py-1 rounded-full ${
                            isDark
                              ? "bg-gray-700 text-gray-300"
                              : "bg-gray-200 text-gray-700"
                          }`}
                        >
                          {itemData.year}
                        </span>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Second row - 2 items */}
            <div className="flex justify-center mb-8">
              <div className="grid grid-cols-2 gap-6 max-w-2xl">
                {timeline.slice(2, 4).map((itemData, index) => (
                  <motion.div
                    key={index + 2}
                    className="flex flex-col items-center"
                    variants={item}
                  >
                    {/* Icon */}
                    <div
                      className={`flex items-center justify-center w-16 h-16 rounded-full ${itemData.color} text-white shadow-lg mb-6`}
                    >
                      {itemData.icon}
                    </div>

                    {/* Content Card */}
                    <motion.div
                      whileHover={{ y: -5 }}
                      className={`w-full h-[320px] p-5 rounded-2xl border shadow-md transition-all duration-300 grid grid-rows-[auto_1fr_auto] ${
                        isDark
                          ? "bg-gray-900 border-gray-800 hover:border-gray-700"
                          : "bg-white border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      {/* Header */}
                      <div className="mb-4">
                        <h4
                          className={`font-semibold text-lg mb-2 leading-tight text-center ${
                            isDark ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {itemData.title}
                        </h4>
                        <span className="text-sm text-blue-500 font-semibold block text-center">
                          {itemData.subtitle}
                        </span>
                      </div>

                      {/* Description */}
                      <div className="mb-4">
                        <p
                          className={`text-sm leading-relaxed text-center ${
                            isDark ? "text-gray-300" : "text-gray-600"
                          }`}
                        >
                          {itemData.description}
                        </p>
                      </div>

                      {/* Year badge */}
                      <div className="flex justify-center">
                        <span
                          className={`inline-block text-xs font-bold px-3 py-1 rounded-full ${
                            isDark
                              ? "bg-gray-700 text-gray-300"
                              : "bg-gray-200 text-gray-700"
                          }`}
                        >
                          {itemData.year}
                        </span>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Third row - 1 item centered */}
            <div className="flex justify-center">
              <div className="max-w-sm">
                {timeline.slice(4, 5).map((itemData, index) => (
                  <motion.div
                    key={index + 4}
                    className="flex flex-col items-center"
                    variants={item}
                  >
                    {/* Icon */}
                    <div
                      className={`flex items-center justify-center w-16 h-16 rounded-full ${itemData.color} text-white shadow-lg mb-6`}
                    >
                      {itemData.icon}
                    </div>

                    {/* Content Card */}
                    <motion.div
                      whileHover={{ y: -5 }}
                      className={`w-full h-[320px] p-5 rounded-2xl border shadow-md transition-all duration-300 grid grid-rows-[auto_1fr_auto] ${
                        isDark
                          ? "bg-gray-900 border-gray-800 hover:border-gray-700"
                          : "bg-white border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      {/* Header */}
                      <div className="mb-4">
                        <h4
                          className={`font-semibold text-lg mb-2 leading-tight text-center ${
                            isDark ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {itemData.title}
                        </h4>
                        <span className="text-sm text-blue-500 font-semibold block text-center">
                          {itemData.subtitle}
                        </span>
                      </div>

                      {/* Description */}
                      <div className="mb-4">
                        <p
                          className={`text-sm leading-relaxed text-center ${
                            isDark ? "text-gray-300" : "text-gray-600"
                          }`}
                        >
                          {itemData.description}
                        </p>
                      </div>

                      {/* Year badge */}
                      <div className="flex justify-center">
                        <span
                          className={`inline-block text-xs font-bold px-3 py-1 rounded-full ${
                            isDark
                              ? "bg-gray-700 text-gray-300"
                              : "bg-gray-200 text-gray-700"
                          }`}
                        >
                          {itemData.year}
                        </span>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Large devices: Horizontal timeline */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-5 gap-6">
              {timeline.map((itemData, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center"
                  variants={item}
                >
                  {/* Icon */}
                  <div
                    className={`flex items-center justify-center w-16 h-16 rounded-full ${itemData.color} text-white shadow-lg mb-6`}
                  >
                    {itemData.icon}
                  </div>

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ y: -5 }}
                    className={`w-full h-[320px] p-6 rounded-2xl border shadow-md transition-all duration-300 grid grid-rows-[auto_1fr_auto] ${
                      isDark
                        ? "bg-gray-900 border-gray-800 hover:border-gray-700"
                        : "bg-white border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    {/* Header */}
                    <div className="mb-4">
                      <h4
                        className={`font-semibold text-lg mb-2 leading-tight text-center ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {itemData.title}
                      </h4>
                      <span className="text-sm text-blue-500 font-semibold block text-center">
                        {itemData.subtitle}
                      </span>
                    </div>

                    {/* Description */}
                    <div className="mb-4">
                      <p
                        className={`text-sm leading-relaxed text-center font-medium ${
                          isDark ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {itemData.description}
                      </p>
                    </div>

                    {/* Year badge */}
                    <div className="flex justify-center">
                      <span
                        className={`inline-block text-xs font-bold px-3 py-1 rounded-full ${
                          isDark
                            ? "bg-gray-700 text-gray-300"
                            : "bg-gray-200 text-gray-700"
                        }`}
                      >
                        {itemData.year}
                      </span>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;