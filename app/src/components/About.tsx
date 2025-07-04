
const About: React.FC = () => {
  return (
    <section id="about" className="relative w-full min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 py-24 px-6 flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center bg-white/5 backdrop-blur-lg border border-white/10 shadow-2xl rounded-3xl p-10 md:p-16 space-y-6 animate-[fade-in_0.6s_ease-out_forwards]">
        
        {/* Section Header */}
        <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-pink-400 to-yellow-400 mb-6">
          About Me
        </h2>

        {/* Bio */}
        <p className="text-gray-300 text-lg sm:text-xl leading-relaxed">
          I'm <span className="text-indigo-400 font-semibold">Arjun Rao</span>, an <span className="text-pink-400 font-semibold">ECE student</span> who thrives on crafting digital experiences with 
          <span className="text-yellow-400 font-semibold">React</span>, 
          <span className="text-yellow-400 font-semibold">Node.js</span>, 
          and <span className="text-yellow-400 font-semibold">Tailwind CSS</span>.
           I’m currently learning server programming  <span className="text-indigo-400"> Docker </span>
            and <span className="text-indigo-400"> AWS</span>, and have a deep interest in <span className="text-pink-400">Japanese language</span>
             and culture.
        </p>

        {/* Tech Stack / Highlights */}
        <p className="text-gray-400 text-base sm:text-lg mt-4">
           Skilled in: JavaScript, TypeScript, React.js, Node.js, Express, PostgreSQL, Python, C++, Verilog  
          <br />
          Interests: Web Development, IoT, SDN, 3D UIs, Japanese Language  
          <br />
           Always learning, always building.
        </p>

        <div className="mt-8">
          <a
            href="https://github.com/arjun1127"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-800 hover:bg-indigo-600 text-white font-semibold text-lg px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 border border-white/20"
          >
           Visit My GitHub
          </a>

          <a
            href="/myResume.pdf"
            download
            className="inline-block bg-gray-800 hover:bg-indigo-600 text-white font-semibold text-lg px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 border border-white/20"
          >
            📄 Download Resume
          </a>

        </div>
      </div>
    </section>
  );
};

export default About;
