"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer
      className="
        relative
        mt-32
        border-t border-white/10
        backdrop-blur-xl
        bg-black/30
        text-gray-400
        py-16
        px-8
      "
    >
      <div className="max-w-6xl mx-auto text-center">

        {/* Brand */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
            text-3xl
            font-medium
            tracking-wide
            mb-4
            bg-gradient-to-r
            from-teal-300
            via-teal-400
            to-teal-500
            bg-clip-text
            text-transparent
          "
        >
          LineageNet
        </motion.h2>

        {/* Tagline */}
        <p className="text-gray-500 mb-8">
          Lineage & Network Tracking Simplified
        </p>

        {/* Divider */}
        <div className="w-24 h-px bg-teal-500/40 mx-auto mb-8"></div>

        {/* Copyright */}
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} LineageNet. All rights reserved.
        </p>

      </div>
    </footer>
  );
}