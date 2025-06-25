import { motion } from 'framer-motion';

export default function About() {
  const skills = [
    "React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "Mongoose",
    "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS",
    "RESTful APIs", "Postman", "Git", "GitHub", "VS Code"
  ];

  // Glowing + shake + scale animation
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
      transition: {
        repeat: Infinity,
        duration: 2,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section id="about" className="px-6 py-16 bg-gradient-to-br from-white via-purple-50 to-white">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold text-back uppercase tracking-wide">
          About Me
        </h2>
        <div className="mt-3 w-16 h-1 mx-auto bg-purple-600 rounded-full" />
        <p className="text-gray-700 text-lg sm:text-xl mt-4">
          Here's more about me, my passion, and the skills I bring to the digital world.
        </p>
      </motion.div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
        {/* About Card */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white border border-purple-300 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 p-8"
        >
          <h3 className="text-3xl font-bold text-purple-800 mb-4 border-b pb-2 border-purple-200">
            Get to Know Me!
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed bg-gradient-to-br from-white via-purple-50 to-white p-4 rounded-xl">
            I'm a <span className="font-semibold text-purple-700">MERN stack developer</span> who thrives on building full-stack web apps that are fast, functional, and visually appealing. From crafting dynamic user interfaces with <strong>React</strong> to developing scalable APIs with <strong>Node.js</strong> and <strong>Express</strong>, I enjoy bringing ideas to life.
            <br /><br />
            <strong>MongoDB</strong> powers my databases, and I'm constantly exploring new tools to improve my craft. I love solving problems, learning, and contributing to projects that matter.
          </p>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white border border-purple-300 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 p-8"
        >
          <h3 className="text-3xl font-bold text-purple-800 mb-6 border-b pb-2 border-purple-200">
            My Skills
          </h3>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                {...glowingSkill}
                className="bg-white text-purple-800 border border-purple-300 px-4 py-2 rounded-xl text-sm font-semibold shadow-md transition transform hover:scale-110"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
