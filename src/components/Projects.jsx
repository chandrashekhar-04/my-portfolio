import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      title: "Dopefolio",
      description:
        "Dopefolio is a successful Open-Source project that I created which has been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally.",
      link: "#",
    },
    {
      title: "MERN Blog App",
      description:
        "A full-stack blogging platform with authentication, dashboard, and rich editor. Built using the MERN stack and hosted on Vercel.",
      link: "#",
    },
    {
      title: "Task Tracker API",
      description:
        "A backend API for managing tasks with JWT authentication, MongoDB integration and Swagger documentation.",
      link: "#",
    }
  ];

  // Shared screenshot image
  const placeholderScreenshot = "https://cdn.pixabay.com/photo/2017/07/28/23/18/coming-soon-2550190_1280.jpg";

  return (
    <section className="px-6 py-16 bg-white" id="projects">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold uppercase text-black tracking-wider">Projects</h2>
        <div className="mt-2 w-12 h-1 mx-auto bg-purple-600 rounded-full" />
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Here you will find some of the personal and client projects I created, each with its own case study.
        </p>
      </motion.div>

      {/* Projects List */}
      <div className="flex flex-col gap-20 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-12 lg:flex-row"
          >
            {/* Laptop with Screenshot */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 180 }}
              className="relative w-full max-w-2xl mx-auto lg:mx-0"
            >
              {/* Laptop frame */}
              <img
                src="/laptop.png"
                alt="Laptop mockup"
                className="w-full relative z-10"
              />

              {/* Coming Soon Screenshot */}
              <img
                src={placeholderScreenshot}
                alt="Coming Soon"
                className="absolute top-[25.5%] left-[16.5%] w-[67%] h-[45%] object-cover rounded-sm z-0"
              />
            </motion.div>

            {/* Project Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 + 0.2 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 text-center lg:text-left"
            >
              <h3 className="text-2xl font-bold text-black mb-4">{project.title}</h3>
              <p className="text-gray-700 text-base mb-6">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition"
              >
                Case Study →
              </a>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
