import { motion } from 'framer-motion';

export default function Education() {
  const educationData = [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      school: "XYZ University",
      year: "2021 – 2024",
      details:
        "Focused on full-stack development, data structures, algorithms, and modern web technologies.",
    },
    {
      degree: "High School (Science – PCM)",
      school: "ABC Senior Secondary School",
      year: "2019 – 2021",
      details:
        "Completed higher secondary education with specialization in Physics, Chemistry & Mathematics.",
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
      className="px-6 py-16 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-500"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold text-black dark:text-white uppercase tracking-wide">
          Education
        </h2>
        <div className="mt-3 w-20 h-1 mx-auto bg-purple-600 dark:bg-purple-400 rounded-full" />
        <p className="text-gray-700 dark:text-gray-300 text-lg sm:text-xl mt-4">
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
            className="bg-white dark:bg-gray-800 border border-purple-300 dark:border-purple-700 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 p-8"
          >
            <h3 className="text-2xl font-bold text-purple-800 dark:text-purple-400 mb-2">
              {edu.degree}
            </h3>

            <p className="text-purple-600 dark:text-purple-300 font-semibold">{edu.school}</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">{edu.year}</p>

            <p className="text-gray-700 dark:text-gray-200 leading-relaxed bg-white dark:bg-gray-700 bg-opacity-80 dark:bg-opacity-80 p-4 rounded-xl transition-colors duration-500">
              {edu.details}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
