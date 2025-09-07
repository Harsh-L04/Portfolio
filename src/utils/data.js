import {
    Code2,
    GraduationCap,
    Briefcase,
    Award,
    Rocket,
    Heart,
    Coffee,
    BookOpen,
    Zap,
    Database,
    Server,
    Cloud,
    Mail,
    MapPin,
    icons,
} from "lucide-react";

import React from "react";
import {FiGithub, FiLinkedin } from "react-icons/fi";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiCplusplus, SiJavascript, SiFigma, SiTailwindcss } from "react-icons/si";
// import {  SiJavascript, SiMongodb, SiTailwindcss } from 'react-icons/si';
// import { FaReact, FaNodeJs } from 'react-icons/fa';

export const passions = [
    {
        icon: Heart,
        title: "User Experience",
        description: "Crafting intuitive interfaces that users love",
    },
    {
        icon: Coffee,
        title: "Problem Solving",
        description: "Turning complex challenges to elegant solutions",
    },
    {
        icon: BookOpen,
        title: "Continuous Learning",
        description: "Always exploring new tools and technologies",
    }
];

// Store component references and styles separately
export const skills = [
  { name: "C++", icon: SiCplusplus, className: "text-blue-600" },
  { name: "JavaScript", icon: SiJavascript, className: "text-yellow-500" },
  { name: "React.js", icon: FaReact, className: "text-sky-500" },
  { name: "Node.js", icon: FaNodeJs, className: "text-green-600" },
  { name: "MongoDB", icon: SiMongodb, className: "text-green-500" },
  { name: "Tailwind CSS", icon: SiTailwindcss, className: "text-cyan-400" },
];

export const Tech = [
    "Arduino IDE",
    "Autocad",
    "Figma",
    "Git/Github",
    "LTSpice",
    "Matlab",
    "Slack",
    "Ubuntu",
    "VS Code",
    "WireShark",
    
];
export const social_links =[
    {
        name: "Github",
        icon: FiGithub,
        url: "https://github.com/Harsh-L04",
        color: "hover:text-gray-400",
        bgColor: "hover:text-gray-800",
    },
    {
        name: "Linkedin",
        icon: FiLinkedin,
        url: "https://www.linkedin.com/in/hlad0411/",
        color: "hover:text-blue-400",
        bgColor: "hover:text-blue-500/10",
    },
    {
        name: "Email",
        icon: Mail,
        url: "mailto:harshlad0411@gmail.com",
        color: "hover:text-green-400",
        bgColor: "hover:text-green-500/10",
    }
];

export const contact =[
  {
    icon: Mail,
    label: "Email",
    value: "harshlad0411@gmail.com",
  },
  // {
  //   icon: Phone,
  //   label: "Phone",
  //   value: "+918160786441",
  // }
];