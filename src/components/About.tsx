import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const achievements = [
  "Award-winning design and development team",
  "Agile methodology for faster delivery",
  "24/7 technical support and maintenance",
  "Proven track record across 50+ industries"
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-purple-950/30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.12),transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-2 rounded-full bg-purple-900/50 text-purple-400 mb-6 border border-purple-500/30"
            >
              Who We Are
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl sm:text-6xl text-white mb-6"
            >
              About{" "}
              <span className="bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                Ellipza
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl text-gray-300 mb-6"
            >
              We are a team of passionate developers, designers, and strategists dedicated 
              to building innovative software solutions that drive business growth.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-gray-400 mb-8"
            >
              Since our founding, we've helped businesses of all sizes transform their 
              operations through cutting-edge technology and user-centered design. Our 
              commitment to excellence and innovation sets us apart in the industry.
            </motion.p>

            {/* Team Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-3 gap-6 mb-8 p-6 rounded-2xl bg-gray-800/40 border border-purple-500/20"
            >
              <div className="text-center">
                <div className="text-3xl bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent mb-1">
                  50+
                </div>
                <div className="text-sm text-gray-400">Team Members</div>
              </div>
              <div className="text-center border-x border-gray-700/50">
                <div className="text-3xl bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent mb-1">
                  200+
                </div>
                <div className="text-sm text-gray-400">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent mb-1">
                  98%
                </div>
                <div className="text-sm text-gray-400">Client Satisfaction</div>
              </div>
            </motion.div>

            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CheckCircle2 className="text-purple-400 flex-shrink-0" size={24} />
                  </motion.div>
                  <span className="text-gray-300">{achievement}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative group">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl overflow-hidden shadow-2xl border border-purple-500/20"
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1637073849667-91120a924221?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BlcnMlMjBjb2xsYWJvcmF0aW5nfGVufDF8fHx8MTc2Mjc3MzYyM3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="About Ellipza"
                  className="w-full h-[600px] object-cover"
                />
              </motion.div>

              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500 to-fuchsia-500 opacity-0 group-hover:opacity-30 blur-2xl transition-opacity -z-10"
              />

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="absolute -bottom-8 -left-8 bg-gradient-to-br from-purple-600 via-violet-600 to-fuchsia-600 text-white rounded-3xl p-8 shadow-2xl"
              >
                <div className="text-5xl mb-2">16+</div>
                <div className="text-sm opacity-90">Years of Excellence</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}