"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="relative py-28 px-8 text-white">
      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="
            backdrop-blur
            border border-white/20
            p-12
            rounded-3xl
            shadow-2xl
          "
        >
          <h2 className="text-4xl font-bold mb-8 text-teal-400">
            What is LineageNet?
          </h2>

          <p className="text-gray-200 text-lg mb-6 leading-relaxed">
            LineageNet is a digital platform that enables users to build a
            complete and structured view of their lineage while laying the
            foundation for network connectivity across users.
          </p>

          <p className="text-gray-300 text-lg mb-6 leading-relaxed">
            The platform begins with a powerful interactive family tree
            system and evolves into a relationship intelligence platform.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed">
            Designed in structured phases across web and mobile,
            LineageNet ensures scalability, security, and generational continuity.
          </p>

        </motion.div>
      </div>
    </section>
  );
}