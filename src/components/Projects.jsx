import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Projects({ darkMode }) {
  const projects = [
    {
      title: "PrimeCart",
      description:
        "PrimeCart is a grocery delivery web app providing a clean interface for both customers and small businesses. It features real-time product listings and an intuitive checkout process.",
      liveLink: "https://primecart-mocha.vercel.app",
      slidingImages: true,
    },
    {
      title: "MERN Blog App",
      description:
        "A full-stack blogging platform with authentication, user dashboard, and a rich text editor. Built with the MERN stack and deployed on Vercel.",
      liveLink: "#",
    },
    {
      title: "Task Tracker API",
      description:
        "Backend API for managing tasks with JWT authentication, MongoDB integration, rate limiting, and Swagger documentation for easy testing.",
      liveLink: "#",
    },
  ];

  const dopefolioImages = ["/prime1.png", "/prime2.png", "/prime3.png", "/prime4.png"];
  const placeholderScreenshot =
    "https://cdn.pixabay.com/photo/2017/07/28/23/18/coming-soon-2550190_1280.jpg";

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!projects.some((p) => p.slidingImages)) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % dopefolioImages.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="projects"
      className={`px-6 py-20 transition-colors duration-500 ${
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
        className="text-center mb-20"
      >
        <h1 className={`text-4xl sm:text-5xl font-extrabold uppercase tracking-wide ${
          darkMode ? 'text-white' : 'text-black'
        }`}>
          Projects
        </h1>
        <div className={`mt-3 w-16 h-1 mx-auto rounded-full ${
          darkMode ? 'bg-purple-400' : 'bg-purple-600'
        }`} />
        <p className={`mt-4 max-w-2xl mx-auto text-lg sm:text-xl ${
          darkMode ? 'text-gray-300' : 'text-gray-700'
        }`}>
          Some of my featured projects, showcasing my skills in full-stack development.
        </p>
      </motion.div>

      {/* Project List */}
      <div className="flex flex-col gap-16 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row items-center gap-10"
          >
            {/* Laptop Frame / Screenshot */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 180 }}
              className="relative w-full max-w-2xl mx-auto"
            >
              <img
                src="/laptop.png"
                alt="Laptop mockup"
                className="w-full relative z-10"
              />

              {project.slidingImages ? (
                <div className="absolute top-[25.5%] left-[16.5%] w-[67%] h-[45%] overflow-hidden rounded-sm z-0">
                  {dopefolioImages.map((img, i) => (
                    <motion.img
                      key={i}
                      src={img}
                      className="absolute w-full h-[98%] object-cover rounded-sm"
                      animate={{
                        opacity: i === currentSlide ? 1 : 0,
                        scale: i === currentSlide ? 1 : 1.05,
                      }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                    />
                  ))}
                </div>
              ) : (
                <img
                  src={placeholderScreenshot}
                  alt="Project Screenshot"
                  className="absolute top-[25.5%] left-[16.5%] w-[67%] h-[45%] object-cover rounded-sm shadow-md z-0"
                />
              )}
            </motion.div>

            {/* Text Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 + 0.15 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 text-center lg:text-left flex flex-col gap-4"
            >
              <h3 className={`text-3xl sm:text-4xl font-bold ${
                darkMode ? 'text-purple-400' : 'text-purple-800'
              }`}>
                {project.title}
              </h3>
              <p className={`text-lg leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                {project.description}
              </p>
              <div className="flex gap-4 flex-wrap mt-4 justify-center lg:justify-start">
                <a
                  href={project.liveLink || "#"}
                  target="_blank"
                  className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition shadow-md"
                >
                  Live Site →
                </a>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
