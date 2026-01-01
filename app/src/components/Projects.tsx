import ProjectCard from './ProjectCard';
import { FaServer, FaBrain, FaLanguage, FaHospitalSymbol, FaShoppingCart, FaCloud } from 'react-icons/fa';
import { SiPostgresql } from 'react-icons/si';
import SplineProject from "./spline/splineUse";
import React, { useState } from 'react';
const projectData = [
  {
    title: 'HTTP Server using Socket',
    description: 'Server Programming in C + Rate Limiting',
    link: 'https://github.com/arjun1127/http_server_c',
    color: '#1e293b', // slate-800
    logo: <FaServer />,
  },
  {
    title: 'SDN Traffic Prediction',
    description: 'LSTM + Mininet + Ryu Controller',
    link: 'https://github.com/arjun1127/sdn_Ap_pred',
    color: '#312e81', // indigo-900
    logo: <FaBrain />,
  },
  {
    title: 'Kanji Quiz App',
    description: 'React + PostgreSQL + Gemini AI + Score Tracker',
    link: 'https://kanji-kousa-1.onrender.com/',
    color: '#3f1d3a', // deep plum
    logo: <SiPostgresql />,
  },
  {
    title: 'Sign Language Recognition',
    description: 'Deep Learning + MediaPipe + LSTM',
    link: 'https://github.com/arjun1127/SLR-deep-learning',
    color: '#064e3b', // emerald-900
    logo: <FaLanguage />,
  },
  {
    title: 'Hospital Appointment System',
    description: 'Next.js + Appwrite + Tailwind CSS',
    link: 'https://hospital-online-appointment.vercel.app/',
    color: '#3b2f0b', // dark amber-brown
    logo: <FaHospitalSymbol />,
  },
  {
    title: 'Basic Load Balancer (AWS ALB style)',
    description: 'Node.js load balancer with CPU-aware routing + dashboard',
    link: 'https://github.com/arjun1127/Load-balancer-js',
    color: '#1f2937', // gray-800
    logo: <FaServer />,
  },
  {
    title: 'FutureMart UI',
    description: 'React + Three.js + Advanced Tailwind UI',
    link: 'https://github.com/arjun1127/FutureMart',
    color: '#422006', // dark orange-brown (controlled)
    logo: <FaShoppingCart />,
  },
  {
    title: 'GAN Weather Generator',
    description: 'PyTorch GAN for generating weather condition images',
    link: 'https://github.com/arjun1127/GAN_weather_Application',
    color: '#0f172a', // slate-900
    logo: <FaCloud />,
  },
  {
    title: 'HealthierMe App',
    description: 'MERN + AI-powered health recommendations',
    link: 'https://github.com/arjun1127/HEALTHIER',
    color: '#064e3b', // emerald-900
    logo: <FaHospitalSymbol />,
  },
];



/* projectData unchanged */

const Projects: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  const mobileProjects = showAll
    ? projectData
    : projectData.slice(0, 4);

  return (
    <section
      id="projects"
      className="relative w-full min-h-screen bg-transparent overflow-hidden py-24 px-6"
    >
      <div className="absolute inset-0 z-0 hidden lg:block">
        <SplineProject url="https://prod.spline.design/5G2zuftHWLDTjqo4/scene.splinecode" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-900 via-cyan-300 to-indigo-700 mb-12 lg:mb-16">
          Projects
        </h2>

        {/* 📱 Mobile grid (2 per row, compact cards) */}
        <div className="grid grid-cols-2 gap-4 lg:hidden">
          {mobileProjects.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
              compact
            />
          ))}
        </div>

        {/* 📱 View More button */}
        {!showAll && (
          <button
            onClick={() => setShowAll(true)}
            className="mt-8 lg:hidden px-6 py-2 rounded-full border border-white text-white text-sm hover:bg-white hover:text-black transition"
          >
            View More
          </button>
        )}

        {/* 🖥 Desktop grid (UNCHANGED) */}
        <div className="hidden lg:grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projectData.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
