"use client";

import { motion } from "framer-motion";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center 
                    bg-slate-900 text-white">
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="backdrop-blur-xl bg-white/10 border border-white/20 
                   p-12 rounded-3xl shadow-2xl w-full max-w-md"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">
          Login to LineageNet
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 rounded-xl bg-white/20 
                     border border-white/20 outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-6 rounded-xl bg-white/20 
                     border border-white/20 outline-none"
        />

        <button className="w-full bg-blue-600 py-3 rounded-xl">
          Login
        </button>
      </motion.div>
    </div>
  );
}