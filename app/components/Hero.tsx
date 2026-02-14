"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative text-center py-32 text-white px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="
          backdrop-blur-xl 
          bg-white/10 
          border border-white/20
          max-w-3xl mx-auto 
          p-12 
          rounded-3xl 
          shadow-2xl
        "
      >
        <h2 className="text-5xl font-bold leading-tight mb-6 text-teal-400">
          Preserve Your Lineage. <br />
          Build Your Network. <br />
          Visualize Your Legacy.
        </h2>

        <p className="text-gray-300 mb-10 text-lg">
          LineageNet enables structured lineage tracking today and 
          intelligent network expansion tomorrow.
        </p>

        <motion.a
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          href="/login"
          className="
            bg-teal-500 
            hover:bg-teal-600 
            text-white 
            px-8 
            py-4 
            rounded-2xl 
            text-lg 
            transition duration-300
          "
        >
          Get Started
        </motion.a>
      </motion.div>
    </section>
  );
}