"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav
      className="
        fixed top-0 left-0 w-full z-50
        backdrop-blur
        border-b border-white/10
        flex items-center justify-between
        px-6 md:px-10
        py-4
      "
    >
      {/* LEFT — Logo Icon */}
      <div className="flex items-center">
        <Image
          src="/logo-icon.png"
          alt="LineageNet Logo"
          width={40}
          height={40}
          priority
        />
      </div>

      {/* CENTER — Brand Name (Hidden on Mobile) */}
      <div className="
        absolute left-1/2 transform -translate-x-1/2
        hidden md:block
      ">
        <h1 className="
          text-2xl
          font-medium
          tracking-wide
          bg-gradient-to-r
          from-teal-300
          via-teal-400
          to-teal-500
          bg-clip-text
          text-transparent
        ">
          LineageNet
        </h1>
      </div>

      {/* RIGHT — Login */}
      <motion.a
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        href="/login"
        className="
          bg-teal-500
          hover:bg-teal-600
          text-white
          px-5 md:px-6
          py-2
          rounded-xl
          text-sm md:text-base
          transition duration-300
        "
      >
        Login
      </motion.a>
    </nav>
  );
}