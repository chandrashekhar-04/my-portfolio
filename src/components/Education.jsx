import { motion } from 'framer-motion';

export default function Education({ darkMode }) {
  const educationData = [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      school: "Sandip University",
      year: "2022 – 2025",
      details:
        "Focused on full-stack development with React.js, Node.js, Express.js and MongoDB",
    },
    {
      degree: "HSC",
      school: "L V N Sonawane Jr. College",
      year: "2021 – 2022",
      details:
        "Completed higher secondary education in PCMB",
    },
  ];

  // Glowing animation for cards
  const cardGlow = {
    animate: {
      boxShadow: [
        "0 0 0px #A855F7",
        "0 0 8px #A855F7",
        "0 0 15px #A855F7",
        "0 0 8px #A855F7",
        "0 0 0px #A855F7",
      ],
      transition: {
        repeat: Infinity,
        duration: 3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="education"
      className={`px-6 py-16 transition-colors duration-500 ${
        darkMode
          ? 'bg-gray-900 text-gray-200'
          : 'bg-white text-gray-800'
      }`}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto"
      >
        <h2 className={`text-4xl sm:text-5xl font-extrabold uppercase tracking-wide ${
          darkMode ? 'text-white' : 'text-black'
        }`}>
          Education
        </h2>
        <div className={`mt-3 w-20 h-1 mx-auto rounded-full ${
          darkMode ? 'bg-purple-400' : 'bg-purple-600'
        }`} />
        <p className={`text-lg sm:text-xl mt-4 ${
          darkMode ? 'text-gray-300' : 'text-gray-700'
        }`}>
          My academic journey and the foundation behind my development career.
        </p>
      </motion.div>

      {/* Education Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            {...cardGlow}
            className={`border rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 ${
              darkMode
                ? 'bg-gray-800 border-purple-700'
                : 'bg-white border-purple-300'
            }`}
          >
            <h3 className={`text-2xl font-bold mb-2 ${
              darkMode ? 'text-purple-400' : 'text-purple-800'
            }`}>
              {edu.degree}
            </h3>

            <p className={`font-semibold ${
              darkMode ? 'text-purple-300' : 'text-purple-600'
            }`}>{edu.school}</p>
            <p className={`text-sm mb-4 ${
              darkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>{edu.year}</p>

            <p className={`leading-relaxed bg-opacity-80 p-4 rounded-xl transition-colors duration-500 ${
              darkMode
                ? 'text-gray-200 bg-gray-700'
                : 'text-gray-700 bg-white'
            }`}>
              {edu.details}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
