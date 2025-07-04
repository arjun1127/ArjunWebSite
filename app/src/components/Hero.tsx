
const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-950 overflow-hidden px-6 py-24">
      

      {/* Glassmorphic Content Box */}
      <div className="relative z-10 max-w-5xl mx-auto text-center bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl p-10 md:p-20 transition-all duration-500">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-pink-400 to-yellow-400 leading-tight mb-6 animate-[fade-in_0.6s_ease-out_forwards]">
          Crafting Experiences Through Code.
        </h1>
        <p className="text-gray-300 text-lg sm:text-xl mb-10 tracking-wide max-w-2xl mx-auto animate-[fade-in_0.6s_ease-out_forwards] delay-150">
          I'm Arjun Rao — a full-stack developer passionate about building visually engaging and performant applications.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-[fade-in_0.6s_ease-out_forwards] delay-300">
          <a href="#projects" className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold text-lg px-8 py-3 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105">
            View Projects
          </a>
          <a href="#contact" className="border-2 border-white text-white font-semibold text-lg px-8 py-3 rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
            Contact Me
          </a>
        </div>
      </div>

    </section>
  );
};

export default Hero;
