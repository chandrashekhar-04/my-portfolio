import { motion } from 'framer-motion';

export default function About({ darkMode }) {
  const skills = [
    "React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "Mongoose",
    "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS",
    "RESTful APIs", "Postman", "Git", "GitHub", "VS Code"
  ];

  const glowingSkill = {
    animate: {
      rotate: [0, -3, 3, -3, 3, 0],
      scale: [1, 1.05, 1],
      boxShadow: [
        "0 0 0px #A855F7",
        "0 0 5px #A855F7",
        "0 0 12px #A855F7",
        "0 0 5px #A855F7",
        "0 0 0px #A855F7"
      ],
      transition: { repeat: Infinity, duration: 2, ease: "easeInOut" },
    },
  };

  return (
    <section
      id="about"
      className={`px-6 py-16 transition-colors duration-500
                  ${darkMode ? 'bg-gray-900 text-gray-200' : 'bg-white text-gray-800'}`}
    >

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto"
      >
        <h2 className={`text-4xl sm:text-5xl font-extrabold uppercase tracking-wide ${darkMode ? 'text-white' : 'text-black'}`}>
          About Me
        </h2>
        <div className={`mt-3 w-16 h-1 mx-auto rounded-full ${darkMode ? 'bg-purple-400' : 'bg-purple-600'}`} />
        <p className={`text-lg sm:text-xl mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Here's more about me, my passion, and the skills I bring to the digital world.
        </p>
      </motion.div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 items-center">

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className={`w-64 h-80 rounded-3xl overflow-hidden shadow-2xl border-4
                           ${darkMode ? 'border-purple-700 bg-gray-800' : 'border-purple-300 bg-white'}`}>
            <img
              src="/my-photo.png"
              alt="Chandrashekhar"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* About Card */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={`backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 p-8 border
                      ${darkMode ? 'bg-gray-800/80 border-purple-700' : 'bg-white/80 border-purple-300'}`}
        >
          <h3 className={`text-3xl font-bold mb-4 border-b pb-2
                          ${darkMode ? 'text-purple-400 border-purple-700' : 'text-purple-800 border-purple-200'}`}>
            Get to Know Me!
          </h3>

          <p className={`text-lg leading-relaxed p-4 rounded-xl
                         ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
            I'm a <span className={`font-semibold ${darkMode ? 'text-purple-400' : 'text-purple-700'}`}>MERN stack developer</span> who thrives on building full-stack web apps that are fast, functional, and visually appealing.
            From crafting dynamic user interfaces with <strong>React</strong> to developing scalable APIs with <strong>Node.js</strong> and <strong>Express</strong>, I enjoy bringing ideas to life.
            <br /><br />
            <strong>MongoDB</strong> powers my databases, and I'm constantly exploring new tools to improve my craft.
            I love solving problems, learning, and contributing to projects that matter.
          </p>
        </motion.div>

      </div>

      {/* Skills */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className={`max-w-4xl mx-auto rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 p-10 mt-20 border backdrop-blur-sm
                    ${darkMode ? 'bg-gray-800/80 border-purple-700' : 'bg-white/80 border-purple-300'}`}
      >
        <h3 className={`text-3xl font-bold mb-6 border-b pb-2
                        ${darkMode ? 'text-purple-400 border-purple-700' : 'text-purple-800 border-purple-200'}`}>
          My Skills
        </h3>

        <div className="flex flex-wrap gap-4">
          {skills.map((skill, index) => (
            <motion.span
              key={index}
              {...glowingSkill}
              className={`px-5 py-2.5 rounded-xl text-base font-semibold shadow-md transition transform hover:scale-110 border
                          ${darkMode ? 'bg-gray-700 text-purple-400 border-purple-600' : 'bg-white text-purple-800 border-purple-300'}`}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>

    </section>
  );
}
