"use client";

import { motion } from "framer-motion";

const phases = [
  {
    title: "Phase 1 – Web App: Lineage Tracking",
    points: [
      "Interactive lineage canvas",
      "Add & manage family members",
      "Define structured relationships",
      "Save & reload lineage data",
      "Graph-based relationship engine foundation",
    ],
  },
  {
    title: "Phase 2 – Network Tracking",
    points: [
      "Connect with other LineageNet users",
      "Secure lineage sharing",
      "Merge related family trees",
      "Cross-family relationship visualization",
      "Expansion into relationship intelligence",
    ],
  },
  {
    title: "Phase 3 – Android Application",
    points: [
      "Flutter-based Android app",
      "Mobile-first lineage building",
      "Offline-first storage",
      "Cloud synchronization",
      "Optimized large-tree performance",
    ],
  },
  {
    title: "Phase 4 – iOS Application",
    points: [
      "Full iOS support",
      "Secure mobile authentication",
      "Seamless cross-platform experience",
      "Complete lineage & network tracking",
      "Unified digital relationship infrastructure",
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
            Product Roadmap
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Built in structured phases to ensure scalability and long-term innovation.
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