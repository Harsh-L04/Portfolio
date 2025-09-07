import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  Code2,
  Sun,
  Moon,
  Menu,
  X,
} from "lucide-react";

import { useTheme } from "../context/Themecontext";

const Navbar = () => {
  const { isDark, toggler } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navItems = [
    { name: "Home", id: "home" },
    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "About Me", id: "about" },
  ];
  
  const ScrollToSection = (sectionID) => {
    const element = document.getElementById(sectionID);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Close mobile menu when screen size changes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close mobile menu on outside click
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isMenuOpen && !event.target.closest('nav')) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('click', handleOutsideClick);
    }

    return () => document.removeEventListener('click', handleOutsideClick);
  }, [isMenuOpen]);

  return (
    <>
      <motion.nav
        style={{ opacity: 1 }}
        className={`fixed top-0 left-0 right-0 z-50 ${
          isDark ? "bg-gray-950/90" : "bg-gray-50/90"
        } backdrop-blur-md border-b ${
          isDark ? "border-gray-800" : "border-gray-200"
        }`}
      >
        {/* Main Navigation Bar */}
        <div className="px-4 py-3 sm:px-6 sm:py-4">
          <div className="flex items-center justify-between">
            
            {/* Logo Section - Mobile First */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 flex-1 min-w-0"
            >
              <Code2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
              <span className={`text-sm font-medium truncate ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}>
                Software Developer
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  whileHover={{ y: -2 }}
                  onClick={() => ScrollToSection(item.id)}
                  className={`text-sm uppercase tracking-wider transition-colors ${
                    isDark
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {item.name}
                </motion.button>
              ))}
              
              {/* Desktop Theme Toggle */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => toggler(isDark ? "light" : "dark")}
                className={`p-2 rounded-full transition-colors ${
                  isDark
                    ? "text-gray-400 hover:text-white hover:bg-gray-800"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                }`}
                aria-label="Toggle theme"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </motion.button>
            </div>

            {/* Mobile Controls */}
            <div className="flex lg:hidden items-center gap-2">
              {/* Mobile Theme Toggle */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  toggler(isDark ? "light" : "dark");
                }}
                className={`relative p-3 rounded-full transition-colors min-w-[48px] min-h-[48px] flex items-center justify-center ${
                  isDark
                    ? "text-gray-400 hover:text-white hover:bg-gray-800"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                }`}
                style={{ 
                  touchAction: 'manipulation',
                  WebkitTouchCallout: 'none',
                  WebkitUserSelect: 'none',
                  userSelect: 'none'
                }}
                aria-label="Toggle theme"
              >
                <span className="flex items-center justify-center">
                  {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </span>
              </motion.button>
              
              {/* { Mobile Menu Button} */}
              <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();  
                setIsMenuOpen(!isMenuOpen);
              }}
              className={`p-2.5 rounded-full transition-colors ${
                isDark
                  ? "text-gray-400 hover:text-white hover:bg-gray-800"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
              }`}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>

            </div>
            
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className={`lg:hidden border-t ${
                isDark ? "border-gray-800 bg-gray-900/95" : "border-gray-200 bg-white/95"
              } backdrop-blur-md`}
            >
              {/* {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  whileHover={{ y: -2 }}
                  onClick={() => ScrollToSection(item.id)}
                  className={`text-sm uppercase tracking-wider transition-colors ${
                    isDark
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {item.name}
               */}
              <div className="px-4 py-2 sm:px-6">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    onClick={() => ScrollToSection(item.id)}
                    className={`block w-full text-left py-3 px-2 text-base font-medium transition-colors rounded-lg ${
                      isDark
                        ? "text-gray-300 hover:text-white hover:bg-gray-800/50"
                        : "text-gray-700 hover:text-gray-900 hover:bg-gray-100/50"
                    }`}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Backdrop for mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMenuOpen(false)}
            className="lg:hidden fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
            style={{ top: '64px' }} // Adjust based on navbar height
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;