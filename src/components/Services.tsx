import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Smartphone, Palette, ShoppingCart, Database, Cloud, Shield, Megaphone, Network } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Create powerful, user-friendly mobile applications for iOS and Android platforms.",
    color: "from-purple-500 to-purple-700"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Design stunning, intuitive interfaces that engage users and enhance experiences.",
    color: "from-blue-500 to-blue-700"
  },
  {
    icon: ShoppingCart,
    title: "Cloud & DevOps Solutions",
    description: "Scalable cloud infrastructure and streamlined DevOps practices for your business.",
    color: "from-pink-500 to-pink-700"
  },
  {
    icon: Database,
    title: "Custom Integration",
    description: "Seamlessly integrate third-party services and APIs into your existing systems.",
    color: "from-indigo-500 to-indigo-700"
  },
  {
    icon: Cloud,
    title: "AI-Powered Solutions",
    description: "Leverage artificial intelligence to automate processes and gain insights.",
    color: "from-teal-500 to-teal-700"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Robust security solutions to protect your data and maintain compliance.",
    color: "from-orange-500 to-orange-700"
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Strategic digital marketing campaigns to boost your online presence and drive growth.",
    color: "from-green-500 to-green-700"
  },
  {
    icon: Network,
    title: "Network Solutions",
    description: "Reliable network infrastructure design, implementation, and management services.",
    color: "from-cyan-500 to-cyan-700"
  }
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="services" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-purple-950/50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(168,85,247,0.15),transparent_50%)]" />
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
            className="inline-block px-4 py-2 rounded-full bg-purple-900/50 text-purple-400 mb-6 border border-purple-500/30"
          >
            What We Offer
          </motion.div>
          <h2 className="text-5xl sm:text-6xl text-white mb-6">
            Our <span className="bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">Software Solutions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive technology services tailored to your business needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -15, transition: { duration: 0.3 } }}
              className="relative group"
            >
              <div className="relative bg-gray-800/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all border border-purple-500/30 overflow-hidden">
                {/* Gradient Overlay on Hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity`}
                />

                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg`}
                >
                  <service.icon className="text-white" size={36} />
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-white"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.2 }}
                  />
                </motion.div>

                <h3 className="text-2xl text-white mb-4 group-hover:text-purple-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>

                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4 }}
                  className={`h-1.5 bg-gradient-to-r ${service.color} mt-8 rounded-full origin-left`}
                />
              </div>

              {/* Glow Effect */}
              <motion.div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity -z-10`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}