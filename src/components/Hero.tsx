import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Sparkles, Play, CheckCircle2 } from "lucide-react";

export function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 100]);
  const y2 = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="home" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center overflow-hidden">
      {/* Animated Gradient Background with Mesh */}
      <div className="absolute inset-0 bg-gray-950">
        {/* Gradient Mesh */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute top-0 -right-4 w-96 h-96 bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(217,70,239,0.1),transparent_50%)]" />
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <motion.div style={{ opacity }} className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-fuchsia-500/10 backdrop-blur-sm border border-purple-500/20 shadow-lg mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              <span className="text-sm text-gray-300">Next-Generation Software Solutions</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white mb-6 leading-tight">
                Transform Your Business with{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                    Intelligent Software
                  </span>
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 via-violet-400 to-fuchsia-400 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  />
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl text-gray-400 mb-8 leading-relaxed max-w-xl"
            >
              Build, deploy, and scale enterprise-grade applications with our comprehensive platform. Accelerate innovation and drive digital transformation.
            </motion.p>

            {/* Feature Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              {["Cloud Native", "API-First", "Secure by Design", "Enterprise Ready"].map((feature, i) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/60 border border-gray-700/50 backdrop-blur-sm"
                >
                  <CheckCircle2 size={16} className="text-purple-400" />
                  <span className="text-sm text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 text-white px-8 py-4 rounded-xl overflow-hidden shadow-2xl shadow-purple-500/30"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Start Free Trial
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 via-violet-600 to-purple-600"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-4 rounded-xl border border-purple-500/30 text-white hover:border-purple-400/50 overflow-hidden transition-all bg-gray-800/40 backdrop-blur-sm"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Play size={18} className="fill-current" />
                  Watch Demo
                </span>
              </motion.button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-12 flex items-center gap-8"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-fuchsia-400 border-2 border-gray-950 flex items-center justify-center text-white text-xs"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <div>
                <div className="text-white">15,000+ Companies</div>
                <div className="text-sm text-gray-400">Trust our platform</div>
              </div>
            </motion.div>
          </div>

          {/* Right - 3D Card Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            {/* Main Card */}
            <motion.div
              style={{ y: y2 }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.02, rotateY: 5 }}
                className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/20 shadow-2xl"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Card Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-fuchsia-500 flex items-center justify-center">
                      <Sparkles className="text-white" size={24} />
                    </div>
                    <div>
                      <div className="text-white">Platform Dashboard</div>
                      <div className="text-sm text-gray-400">Real-time analytics</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                </div>

                {/* Mock Dashboard Content */}
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { label: "API Calls", value: "2.4M", change: "+12%" },
                      { label: "Uptime", value: "99.9%", change: "+0.1%" },
                      { label: "Response", value: "45ms", change: "-5ms" }
                    ].map((stat, i) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className="bg-gray-900/60 rounded-xl p-4 border border-gray-700/50"
                      >
                        <div className="text-2xl text-white mb-1">{stat.value}</div>
                        <div className="text-xs text-gray-400 mb-2">{stat.label}</div>
                        <div className="text-xs text-green-400">{stat.change}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Chart Placeholder */}
                  <div className="h-32 bg-gray-900/60 rounded-xl border border-gray-700/50 p-4 relative overflow-hidden">
                    <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between px-4 pb-4 gap-2">
                      {[40, 60, 45, 70, 55, 80, 65, 90].map((height, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${height}%` }}
                          transition={{ delay: 0.7 + i * 0.1, duration: 0.5 }}
                          className="flex-1 bg-gradient-to-t from-purple-500 to-fuchsia-500 rounded-t"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-3xl opacity-20 blur-2xl -z-10" />
              </motion.div>

              {/* Floating Mini Cards */}
              <motion.div
                style={{ y: y1 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -left-12 top-20 bg-gray-800/90 backdrop-blur-xl rounded-2xl p-4 border border-purple-500/20 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  </div>
                  <div>
                    <div className="text-white text-sm">All Systems</div>
                    <div className="text-xs text-gray-400">Operational</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                style={{ y: y1 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 }}
                className="absolute -right-12 bottom-20 bg-gray-800/90 backdrop-blur-xl rounded-2xl p-4 border border-purple-500/20 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                    <ArrowRight className="text-purple-400" size={20} />
                  </div>
                  <div>
                    <div className="text-white text-sm">Deploy Ready</div>
                    <div className="text-xs text-gray-400">In 2 minutes</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}