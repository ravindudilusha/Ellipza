import { motion } from "motion/react";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import logo from "figma:asset/9936197110cf9ee3ef1ccc13feaa7e2f9a0cf8d1.png";

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-purple-900 via-violet-900 to-fuchsia-900 text-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_70%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="mb-6"
            >
              <img src={logo} alt="Ellipza" className="h-10 brightness-0 invert" />
            </motion.div>
            <p className="text-purple-200 text-lg leading-relaxed">
              Building smarter software solutions for tomorrow's challenges.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 text-xl">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "Services", "About", "Portfolio", "Contact"].map(link => (
                <motion.li
                  key={link}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a href={`#${link.toLowerCase()}`} className="text-purple-200 hover:text-white transition-colors text-lg">
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-6 text-xl">Services</h4>
            <ul className="space-y-3 text-purple-200 text-lg">
              <li className="hover:text-white transition-colors cursor-pointer">Web Development</li>
              <li className="hover:text-white transition-colors cursor-pointer">Mobile Apps</li>
              <li className="hover:text-white transition-colors cursor-pointer">UI/UX Design</li>
              <li className="hover:text-white transition-colors cursor-pointer">Cloud Solutions</li>
              <li className="hover:text-white transition-colors cursor-pointer">Consulting</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-6 text-xl">Follow Us</h4>
            <div className="flex gap-4">
              {[
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Instagram, href: "#" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -8, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors border border-white/20 group"
                >
                  <social.icon size={22} />
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-400 to-fuchsia-400 opacity-0 group-hover:opacity-20 blur-lg transition-opacity"
                  />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-purple-200 text-lg">&copy; 2025 Ellipza. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
