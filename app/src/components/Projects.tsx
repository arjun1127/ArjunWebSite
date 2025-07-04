import ProjectCard from './ProjectCard';
import { FaServer, FaBrain, FaLanguage, FaHospitalSymbol } from 'react-icons/fa';
import { SiPostgresql } from 'react-icons/si';

const projectData = [
  {
    title: 'HTTP Server using Socket',
    description: 'Server Programming in C + Rate Limiting',
    link: 'https://github.com/arjun1127/http_server_c',
    color: '#0ea5e9',
    logo: <FaServer />,
  },
  {
    title: 'SDN Traffic Prediction',
    description: 'LSTM + Mininet + Ryu Controller',
    link: 'https://github.com/arjun1127/sdn_Ap_pred',
    color: '#6d28d9',
    logo: <FaBrain />,
  },
  {
    title: 'Kanji Quiz App',
    description: 'React + PostgreSQL + Gemini AI + Score Tracker',
    link: 'https://kanji-kousa-1.onrender.com/',
    color: '#db2777',
    logo: <SiPostgresql />,
  },
  {
    title: 'Sign Language Recognition',
    description: 'Deep Learning + MediaPipe + LSTM',
    link: 'https://github.com/arjun1127/SLR-deep-learning',
    color: '#10b981',
    logo: <FaLanguage />,
  },
  {
    title: 'Hospital Appointment System',
    description: 'Next.js + Appwrite + Tailwind CSS',
    link: 'https://hospital-online-appointment.vercel.app/',
    color: '#f59e0b',
    logo: <FaHospitalSymbol />,
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="w-full min-h-screen bg-gray-950 py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-pink-400 to-yellow-400 mb-16">
          Projects
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projectData.map((project) => (
            <ProjectCard key={project.title} {...project} />
        ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;