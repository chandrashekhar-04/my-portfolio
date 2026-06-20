import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
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
      className="px-6 py-16 bg-gradient-to-br from-white via-purple-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-500"
    >
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-12 max-w-xl mx-auto"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold uppercase text-black dark:text-white tracking-wide">
          Contact
        </h2>
        <div className="mt-3 w-16 h-1 mx-auto bg-purple-600 dark:bg-purple-400 rounded-full" />
        <p className="mt-4 text-gray-700 dark:text-gray-300 text-lg sm:text-xl">
          Feel free to reach out by filling the form below.
        </p>
      </motion.div>

      {/* Form Container */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-90 shadow-xl rounded-3xl p-8 transition-colors duration-500"
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
              <label className="block mb-2 text-gray-800 dark:text-gray-200 font-semibold capitalize">
                {field}
              </label>
              {field === "message" ? (
                <textarea
                  name="message"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-5 py-3 border border-gray-300 dark:border-gray-600 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-600 dark:bg-gray-700 dark:text-gray-200 transition-all duration-300 hover:shadow-lg"
                  placeholder="Type your message..."
                />
              ) : (
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  required
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full px-5 py-3 border border-gray-300 dark:border-gray-600 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-600 dark:bg-gray-700 dark:text-gray-200 transition-all duration-300 hover:shadow-lg"
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
              className="w-full bg-purple-700 dark:bg-purple-600 text-white py-3 rounded-2xl hover:bg-purple-800 dark:hover:bg-purple-500 transition duration-300 shadow-md hover:shadow-lg font-semibold"
            >
              Send Message
            </button>
          </motion.div>

          {status && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-sm text-gray-700 dark:text-gray-300 mt-4"
            >
              {status}
            </motion.p>
          )}
        </form>
      </motion.div>
    </section>
  );
}
