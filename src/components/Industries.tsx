import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Store, Heart, GraduationCap, Building2, Plane, Briefcase } from "lucide-react";

const industries = [
  {
    icon: Store,
    title: "E-Commerce",
    description: "Powerful online retail solutions"
  },
  {
    icon: Heart,
    title: "Healthcare",
    description: "HIPAA-compliant medical software"
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Interactive learning platforms"
  },
  {
    icon: Building2,
    title: "Real Estate",
    description: "Property management systems"
  },
  {
    icon: Plane,
    title: "Travel & Hospitality",
    description: "Booking and reservation systems"
  },
  {
    icon: Briefcase,
    title: "Finance & Banking",
    description: "Secure financial applications"
  }
];

export function Industries() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="industries" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-violet-600 to-fuchsia-700">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.1),transparent_50%)]" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:64px_64px]" />

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
            className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white mb-6 border border-white/30"
          >
            Industries We Serve
          </motion.div>
          <h2 className="text-5xl sm:text-6xl text-white mb-6">
            Solutions for Every Industry
          </h2>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Specialized software tailored to your industry's unique challenges
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.08, y: -10, transition: { duration: 0.3 } }}
              className="relative group cursor-pointer"
            >
              <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/20 hover:bg-white/20 transition-all overflow-hidden">
                {/* Gradient Overlay on Hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                />

                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="relative w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6 group-hover:bg-white/30 transition-colors shadow-lg"
                >
                  <industry.icon className="text-white" size={36} />
                </motion.div>

                <h3 className="text-2xl text-white mb-3">{industry.title}</h3>
                <p className="text-purple-100 text-lg">{industry.description}</p>

                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4 }}
                  className="h-1.5 bg-white/50 mt-6 rounded-full origin-left"
                />
              </div>

              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-3xl bg-white opacity-0 group-hover:opacity-10 blur-xl transition-opacity -z-10"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
