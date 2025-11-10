import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Web Design for EcoMart E-commerce",
    category: "E-commerce Platform",
    image:
      "https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlfGVufDF8fHx8MTc2Mjc1ODI1OHww&ixlib=rb-4.1.0&q=80&w=1080",
    color: "from-orange-400 to-orange-600",
  },
  {
    title: "Web Design for Dealership Platform",
    category: "Automotive Portal",
    image:
      "https://images.unsplash.com/photo-1707836868495-3307d371aba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwZGVzaWduJTIwbW9ja3VwfGVufDF8fHx8MTc2MjY4NDM5N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    color: "from-green-400 to-green-600",
  },
  {
    title: "UI/UX Design for Mobile Website",
    category: "Mobile Experience",
    image:
      "https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYyNjk0ODE0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    color: "from-blue-400 to-blue-600",
  },
];

export function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="portfolio"
      className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-fuchsia-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(217,70,239,0.08),transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-fuchsia-100 text-purple-600 mb-6"
          >
            Our Portfolio
          </motion.div>
          <h2 className="text-5xl sm:text-6xl text-gray-900 mb-6 leading-tight">
            Our work describe why
            <br />
            we are the{" "}
            <span className="bg-gradient-to-r from-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
              best in business
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of successful projects and
            transformative solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className="group cursor-pointer"
            >
              <motion.div
                whileHover={{ y: -15 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative h-full rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all bg-white border border-gray-100"
              >
                {/* Image Container */}
                <div className="relative h-80 overflow-hidden bg-gray-100">
                  {/* Image with subtle zoom */}
                  <motion.div
                    className="h-full"
                    whileHover={{ scale: 1.08 }}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                    }}
                  >
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Subtle gradient overlay - always visible */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

                  {/* Glass morphism overlay on hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />

                  {/* Animated border on hover */}
                  <motion.div className="absolute inset-0 border-2 border-purple-500/0 group-hover:border-purple-500/50 transition-all duration-500 rounded-3xl" />

                  {/* View Project Button - Bottom Right */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                      x: 20,
                      y: 20,
                    }}
                    className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="bg-white/95 backdrop-blur-md text-gray-900 px-6 py-3 rounded-full shadow-2xl flex items-center gap-2 border border-purple-200">
                      <span className="font-medium">
                        View Project
                      </span>
                      <ArrowUpRight
                        size={18}
                        className="text-purple-600"
                      />
                    </div>
                  </motion.div>

                  {/* Category Badge - Top Left */}
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.15 + 0.3 }}
                    className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-gray-200/50"
                  >
                    <p className="text-xs bg-gradient-to-r from-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
                      {project.category}
                    </p>
                  </motion.div>

                  {/* Decorative corner accent */}
                  <motion.div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/20 group-hover:to-transparent transition-all duration-500 rounded-bl-full" />
                </div>

                {/* Content Section */}
                <div className="p-8 relative">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : {}
                    }
                    transition={{
                      duration: 0.6,
                      delay: index * 0.15 + 0.3,
                    }}
                  >
                    <h3 className="text-2xl text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                      {project.title}
                    </h3>

                    {/* Description text */}
                    <p className="text-gray-600 mb-4">
                      A comprehensive solution designed to
                      enhance user experience and drive results.
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Design",
                        "Development",
                        "Strategy",
                      ].map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-xs border border-purple-100"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>

                  {/* Link Icon - Bottom Right of Card */}
                  <motion.div
                    className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ rotate: 45, scale: 1.2 }}
                  >
                    <ExternalLink
                      className="text-purple-400"
                      size={20}
                    />
                  </motion.div>
                </div>

                {/* Bottom accent line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                />
              </motion.div>

              {/* Subtle glow effect */}
              <motion.div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-400/0 to-fuchsia-400/0 group-hover:from-purple-400/20 group-hover:to-fuchsia-400/20 blur-2xl transition-all duration-500 -z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}