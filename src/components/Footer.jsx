import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-16 shadow-2xl"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        
        {/* Name and Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center md:text-left mb-10 md:mb-0"
        >
          <h1 className="text-2xl font-extrabold tracking-wider text-purple-500 drop-shadow-md">
            Chandrashekhar Billade
          </h1>
          <p className="mt-3 text-gray-300 text-lg max-w-md">
            MERN Stack Developer | Passionate about building user-friendly and scalable web applications.
          </p>
        </motion.div>

        {/* Social Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center md:text-right"
        >
          <p className="mb-4 text-lg font-medium text-gray-300">Connect with me</p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
            className="flex justify-center md:justify-end space-x-8 text-3xl"
          >
            {[{
              icon: <FaGithub />,
              link: "https://github.com/chandrashekhar-04",
            }, {
              icon: <FaLinkedin />,
              link: "https://www.linkedin.com/in/c-billade",
            }, {
              icon: <FaEnvelope />,
              link: "https://mail.google.com/mail/?view=cm&fs=1&to=cbillade@gmail.com",
            }].map((item, idx) => (
              <motion.a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: "#a855f7" }}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="transition-all duration-300"
              >
                {item.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Copyright */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-12 text-center text-sm text-gray-400 tracking-wide"
      >
        © {new Date().getFullYear()}{" "}
        <span className="text-white font-medium">Chandrashekhar Billade</span>. All rights reserved.
      </motion.div>
    </motion.footer>
  );
}
