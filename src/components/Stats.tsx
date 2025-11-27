import { motion, useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

function CountUp({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-purple-950/30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.15),transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative group">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl overflow-hidden shadow-2xl border border-purple-500/20"
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1748346918817-0b1b6b2f9bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtd29ya3xlbnwxfHx8fDE3NjI3MzE5NTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Team collaboration"
                  className="w-full h-[500px] object-cover"
                />
              </motion.div>

              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500 to-violet-500 opacity-0 group-hover:opacity-30 blur-2xl transition-opacity -z-10"
              />
              
              {/* Stats Overlay Card */}
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800/95 backdrop-blur-sm rounded-3xl shadow-2xl p-10 w-[90%] max-w-lg border border-purple-500/30"
              >
              <h3 className="text-center text-2xl text-white mb-8">
                Our <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">Achievement Gallery</span>
              </h3>
              
              <div className="grid grid-cols-3 gap-6">
                {[
                  { value: 15, suffix: "K", label: "Happy Clients" },
                  { value: 75, suffix: "%", label: "Success Rate" },
                  { value: 16, suffix: "+", label: "Years Experience" }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-5xl bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent mb-2">
                      <CountUp end={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-2 rounded-full bg-purple-900/50 text-purple-400 mb-6 border border-purple-500/30"
            >
              Our Impact
            </motion.div>

            <h2 className="text-5xl text-white mb-6">
              Trusted by{" "}
              <span className="bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                Industry Leaders
              </span>{" "}
              Worldwide
            </h2>
            <p className="text-xl text-gray-300 mb-6">
              We've been delivering exceptional software solutions for over 16 years, 
              helping businesses transform their digital presence and achieve remarkable results.
            </p>
            <p className="text-lg text-gray-400">
              Our proven track record speaks for itself - with thousands of satisfied clients 
              and a success rate that sets us apart in the industry.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}