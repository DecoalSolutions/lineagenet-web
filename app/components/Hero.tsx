"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative text-center pt-44 pb-28 px-6 text-white md:pt-32 md:pb-32">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="
          backdrop-blur
          border border-white/20
          max-w-3xl mx-auto 
          p-10 md:p-14
          rounded-3xl 
          shadow-2xl
        "
      >

        {/* Logo Icon */}
        <div className="flex justify-center mb-8">
          <Image
            src="/logo-icon.png"
            alt="LineageNet Icon"
            width={80}
            height={80}
            className="opacity-90"
            priority
          />
        </div>

        {/* Heading */}
        <h2 className="
          text-4xl md:text-5xl
          font-medium
          leading-tight
          mb-6
          text-teal-400
        ">
          Preserve Your Lineage. <br />
          Build Your Network. <br />
          Visualize Your Legacy.
        </h2>

        {/* Subtext */}
        <p className="text-gray-300 mb-10 text-lg">
          LineageNet enables structured lineage tracking today and 
          intelligent network expansion tomorrow.
        </p>

        {/* CTA */}
        <motion.a
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          href="/login"
          className="
            bg-teal-500 
            hover:bg-teal-600 
            text-white 
            px-8 
            py-3 
            rounded-xl 
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