import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 100]);
  const y2 = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="home" className="relative pt-32 pb-32 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(217,70,239,0.1),transparent_50%)]" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <motion.div style={{ opacity }} className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-purple-200/50 shadow-lg shadow-purple-100/50 mb-8"
          >
            <Sparkles className="text-purple-600" size={16} />
            <span className="text-sm text-gray-700">Transforming Ideas into Reality</span>
          </motion.div>

          {/* Main Heading with Gradient */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h1 className="text-6xl sm:text-7xl lg:text-8xl text-gray-900 mb-6 leading-tight">
              Building{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                  Smarter
                </span>
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-purple-400 to-fuchsia-400 rounded-full blur-xl opacity-40"
                />
              </span>
              <br />
              <span className="relative">
                Software Solutions
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 origin-left rounded-full"
                />
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            We craft innovative digital experiences that transform businesses
            and empower growth in the modern world
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 text-white px-10 py-5 rounded-full overflow-hidden shadow-2xl shadow-purple-500/50"
            >
              <span className="relative z-10 flex items-center gap-3">
                Get Started
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight size={20} />
                </motion.div>
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 via-violet-600 to-purple-600"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
            
            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-10 py-5 rounded-full border-2 border-purple-600 text-purple-600 hover:text-white overflow-hidden transition-colors shadow-lg"
            >
              <span className="relative z-10 flex items-center gap-2">
                See Works
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles size={18} />
                </motion.div>
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-violet-600"
                initial={{ y: "100%" }}
                whileHover={{ y: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </motion.div>
        </div>

        {/* Floating Elements with Parallax */}
        <motion.div
          style={{ y: y1 }}
          className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-br from-purple-400 to-violet-400 rounded-full opacity-20 blur-2xl"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-fuchsia-400 to-pink-400 rounded-full opacity-20 blur-2xl"
        />
        <motion.div
          style={{ y: y1 }}
          className="absolute bottom-20 right-40 w-20 h-20 bg-gradient-to-br from-violet-400 to-purple-400 rounded-full opacity-20 blur-2xl"
        />

        {/* Animated Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-purple-600 rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-purple-600 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
