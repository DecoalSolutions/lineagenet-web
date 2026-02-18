"use client";

import { motion } from "framer-motion";

const phases = [
  {
    title: "Build Your Lineage (Web Experience)",
    points: [
      "Create an interactive family tree that grows with your family",
      "Add and manage family members with detailed profiles",
      "Define clear relationships across generations",
      "Save, update, and revisit your lineage anytime",
      "Visualize how every connection fits into your bigger family story",
    ],
  },
  {
    title: "Expand Into Meaningful Networks",
    points: [
      "Connect with other LineageNet users",
      "Share your lineage securely with trusted relatives",
      "Link related family trees when families connect",
      "Visualize relationships across families and communities",
      "Friends, Business Connections, Social circles all at one place",
    ],
  },
  {
    title: "Access Anywhere - Android Experience (Coming Soon)",
    points: [
      "Build and manage your lineage on the go",
      "Add connections instantly from your contacts",
      "Stay synced across devices",
      "Easily update information as life evolves",
      "Experience a smooth, mobile-friendly design",
    ],
  },
  {
    title: "Seamless iOS Experience (Coming Soon)",
    points: [
      "Full support for iPhone and iPad users",
      "Secure access to your lineage and network",
      "Effortless cross-device continuity",
      "Manage both family and professional networks in one place",
      "A unified experience built for long-term connection tracking",
    ],
  },
];

export default function Roadmap() {
  return (
    <section className="relative py-28 px-8 text-white">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold text-teal-400 mb-4">
            What we want to offer?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A relationship intelligence system for families and communities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">

          {phases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 30px rgba(47,168,160,0.4)",
              }}
              className="
                backdrop-blur
                border border-white/20
                p-8
                rounded-3xl
                transition-all duration-300
              "
            >
              <h3 className="text-xl font-bold mb-6 text-teal-400">
                {phase.title}
              </h3>

              <ul className="space-y-3 text-gray-300">
                {phase.points.map((point, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2 text-teal-400">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}