import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-gray-900 to-gray-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(168,85,247,0.2),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(217,70,239,0.15),transparent_50%)]" />
      </div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.05)_1px,transparent_1px)] bg-[size:64px_64px] opacity-30" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Info */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl mb-6"
            >
              Get in Touch
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl text-purple-200 mb-12"
            >
              Ready to transform your business with innovative software solutions? 
              Let's start a conversation.
            </motion.p>

            <div className="space-y-6">
              {[
                { icon: Mail, text: "contact@eliqus.com" },
                { icon: Phone, text: "+1 (555) 123-4567" },
                { icon: MapPin, text: "123 Innovation Drive, Tech City, TC 12345" }
              ].map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: 10, scale: 1.05 }}
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-14 h-14 rounded-2xl bg-purple-500/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-purple-500/30 transition-colors shadow-lg border border-purple-500/30"
                  >
                    <item.icon size={24} />
                  </motion.div>
                  <span className="text-lg">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-purple-500/30">
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <label className="block text-gray-300 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-xl border border-purple-500/30 focus:border-purple-400 focus:ring-2 focus:ring-purple-500/50 outline-none transition-all bg-gray-900/60 text-white placeholder:text-gray-500 focus:bg-gray-900"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <label className="block text-gray-300 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 rounded-xl border border-purple-500/30 focus:border-purple-400 focus:ring-2 focus:ring-purple-500/50 outline-none transition-all bg-gray-900/60 text-white placeholder:text-gray-500 focus:bg-gray-900"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <label className="block text-gray-300 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                    className="w-full px-6 py-4 rounded-xl border border-purple-500/30 focus:border-purple-400 focus:ring-2 focus:ring-purple-500/50 outline-none transition-all bg-gray-900/60 text-white placeholder:text-gray-500 focus:bg-gray-900"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <label className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    rows={4}
                    className="w-full px-6 py-4 rounded-xl border border-purple-500/30 focus:border-purple-400 focus:ring-2 focus:ring-purple-500/50 outline-none transition-all resize-none bg-gray-900/60 text-white placeholder:text-gray-500 focus:bg-gray-900"
                    required
                  />
                </motion.div>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="relative w-full bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 text-white py-5 rounded-xl overflow-hidden flex items-center justify-center gap-3 shadow-2xl shadow-purple-500/30 group"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Send Message
                    <Send size={20} />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 via-violet-600 to-purple-600"
                    initial={{ x: "100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}