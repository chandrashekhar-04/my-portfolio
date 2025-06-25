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
      className="px-6 py-16 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://static.vecteezy.com/system/resources/previews/010/405/542/non_2x/modern-white-abstract-background-white-abstract-use-for-business-corporate-institution-poster-template-party-festive-seminar-white-futuristic-gradient-eps10-illustration-free-vector.jpg')",
      }}
    >
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-12 max-w-xl mx-auto backdrop-blur-md"
      >
        <h2 className="text-4xl font-bold uppercase text-gray-900 tracking-wider">
          Contact
        </h2>
        <div className="mt-2 w-12 h-1 mx-auto bg-purple-700 rounded-full" />
        <p className="mt-4 text-gray-700 text-base">
          Feel free to reach out by filling the form below.
        </p>
      </motion.div>

      {/* Form Container */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto bg-white bg-opacity-95 shadow-xl rounded-lg p-8"
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
              <label className="block mb-2 text-gray-700 font-semibold capitalize">
                {field}
              </label>
              {field === "message" ? (
                <textarea
                  name="message"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="Type your message..."
                ></textarea>
              ) : (
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  required
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder={
                    field === "email" ? "you@example.com" : "Your full name"
                  }
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
              className="w-full bg-purple-700 text-white py-2 px-4 rounded-lg hover:bg-purple-800 transition duration-300"
            >
              Send Message
            </button>
          </motion.div>

          {status && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-sm text-gray-600 mt-4"
            >
              {status}
            </motion.p>
          )}
        </form>
      </motion.div>
    </section>
  );
}
