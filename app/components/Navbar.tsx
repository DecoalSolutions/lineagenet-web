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
        px-8 py-4
      "
    >
      {/* LEFT — Icon */}
      <div className="flex items-center">
        <Image
          src="/logo-icon.png"
          alt="LineageNet Logo"
          width={50}
          height={50}
          priority
        />
      </div>

      {/* CENTER — Brand Name Styled Like Logo */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <h1
          className="
            text-3xl
            font-medium
            tracking-wide
            bg-gradient-to-r
            from-teal-300
            via-teal-400
            to-teal-500
            bg-clip-text
            text-transparent
          "
        >
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
          px-6 py-2
          rounded-xl
          transition duration-300
        "
      >
        Login
      </motion.a>
    </nav>
  );
}