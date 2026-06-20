import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact({ darkMode }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const googleFormUrl =
      "https://docs.google.com/forms/u/0/d/e/1FAIpQLScNIgyiBE83Z8A4fzrxIC-RCWlKSIVPhC9rvdNr-qpkDJU8tw/formResponse";

    const formBody = new URLSearchParams();
    formBody.append("entry.1945308698", formData.name);
    formBody.append("entry.361887506", formData.email);
    formBody.append("entry.244964050", formData.message);

    try {
      await fetch(googleFormUrl, {
        method: "POST",
        mode: "no-cors",
        body: formBody,
      });

      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error:", error);
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className={`px-6 py-16 transition-colors duration-500 ${
        darkMode
          ? 'bg-gray-900 text-gray-200'
          : 'bg-gradient-to-br from-white via-purple-50 to-white text-gray-800'
      }`}
    >
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-12 max-w-xl mx-auto"
      >
        <h2 className={`text-4xl sm:text-5xl font-extrabold uppercase tracking-wide ${
          darkMode ? 'text-white' : 'text-black'
        }`}>
          Contact
        </h2>
        <div className={`mt-3 w-16 h-1 mx-auto rounded-full ${
          darkMode ? 'bg-purple-400' : 'bg-purple-600'
        }`} />
        <p className={`mt-4 text-lg sm:text-xl ${
          darkMode ? 'text-gray-300' : 'text-gray-700'
        }`}>
          Feel free to reach out by filling the form below.
        </p>
      </motion.div>

      {/* Form Container */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className={`max-w-3xl mx-auto shadow-xl rounded-3xl p-8 transition-colors duration-500 ${
          darkMode
            ? 'bg-gray-800 bg-opacity-90'
            : 'bg-white bg-opacity-90'
        }`}
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          {["name", "email", "message"].map((field, i) => (
            <motion.div
              key={field}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <label className={`block mb-2 font-semibold capitalize ${
                darkMode ? 'text-gray-200' : 'text-gray-800'
              }`}>
                {field}
              </label>
              {field === "message" ? (
                <textarea
                  name="message"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-5 py-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300 hover:shadow-lg ${
                    darkMode
                      ? 'bg-gray-700 text-gray-200 border-gray-600'
                      : 'bg-white text-gray-800 border-gray-300'
                  } border`}
                  placeholder="Type your message..."
                />
              ) : (
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  required
                  value={formData[field]}
                  onChange={handleChange}
                  className={`w-full px-5 py-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300 hover:shadow-lg ${
                    darkMode
                      ? 'bg-gray-700 text-gray-200 border-gray-600'
                      : 'bg-white text-gray-800 border-gray-300'
                  } border`}
                  placeholder={field === "email" ? "you@example.com" : "Your full name"}
                />
              )}
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <button
              type="submit"
              className={`w-full py-3 rounded-2xl transition duration-300 shadow-md hover:shadow-lg font-semibold text-white ${
                darkMode
                  ? 'bg-purple-600 hover:bg-purple-500'
                  : 'bg-purple-700 hover:bg-purple-800'
              }`}
            >
              Send Message
            </button>
          </motion.div>

          {status && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`text-center text-sm mt-4 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              {status}
            </motion.p>
          )}
        </form>
      </motion.div>
    </section>
  );
}
