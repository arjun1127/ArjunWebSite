import SplineAbout from "./spline/splineUse";

const timeline = [
  { title: "Schooling  - 2022", content: "Finished my schooling in Mysore, India." },
  {
    title: "Engineering 2022 - Present",
    content:
      "Pursuing Electronics & Communication Engineering at Dayananda Sagar College of Engineering, Bangalore India.",
  },
  {
    title: "My Interests",
    content:
      "I code, especially in MERN. Currently learning server-side development with Docker and AWS, and deeply interested in Japanese language and culture, and playing badminton, watching anime, and reading web novels are my hobbies ",
  },
  
  {
    title: "What's Next?  2027- ",
    content:
      "Will be relocating to Tokyo, Japan in 2027 for a developer role. Excited for new experiences and opportunities!",
  },
];

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen bg-transparent py-24 px-6 flex items-center justify-center overflow-hidden"
    >
      {/* ✅ Spline ONLY on large screens (desktop unchanged) */}
      <div className="absolute inset-0 z-0 hidden lg:block pointer-events-none">
        <SplineAbout url="https://prod.spline.design/9qzkNMOwrmkdgWdO/scene.splinecode" />
      </div>

      {/* Content Card */}
      <div
        className="
          relative z-10 w-full max-w-3xl
          bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl
          px-6 sm:px-8 md:px-12
          py-10 sm:py-12 md:py-14
        "
      >
        {/* Profile Image */}
        <div
          className="
            absolute -top-10 -left-6 sm:-left-10
            w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32
            rounded-full overflow-hidden
            border border-white/20
            backdrop-blur-xl
            shadow-[0_0_40px_rgba(99,102,241,0.35)]
            bg-black/30
            hover:scale-105 transition-transform duration-300
          "
        >
          <img
            src="./myPic.jpeg"
            alt="Arjun Rao"
            className="w-full h-full object-cover brightness-95 contrast-105"
          />
        </div>

        {/* Heading */}
        <h2
          className="
            text-center font-bold text-transparent bg-clip-text
            bg-gradient-to-r from-indigo-400 via-pink-400 to-yellow-400
            text-3xl sm:text-4xl md:text-5xl
            mb-10 sm:mb-12 md:mb-14
          "
        >
          My Journey
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-3 sm:left-4 top-0 h-full w-px bg-white/20" />

          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            {timeline.map((item, index) => (
              <div key={index} className="relative flex gap-4 sm:gap-6">
                {/* Dot */}
                <div className="relative z-10 mt-1">
                  <div className="w-3 h-3 rounded-full bg-indigo-400 shadow-md shadow-indigo-400/40" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-indigo-300 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
