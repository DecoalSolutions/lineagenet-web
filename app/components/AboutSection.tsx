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
            LineageNet is a modern digital space designed to help you preserve, organize, and understand your family’s story - while also managing the relationships that shape your present and future.  <br />
            At its core, LineageNet allows you to build an interactive family tree that grows with your family across generations. It helps you visualize connections, document important details, and create a structured view of your lineage in one place.
          </p>
          
          <p className="text-gray-200 text-lg mb-6 leading-relaxed">
            But relationships don’t stop at family.
          </p>

          <p className="text-gray-200 text-lg mb-6 leading-relaxed">  
            LineageNet also enables you to manage your broader network — including friends, business connections, collaborators, and community circles. You can organize people into meaningful groups, track how they connect, and build structured relationship networks that go beyond traditional social platforms. <br />
            <br />
            Whether you’re preserving heritage, strengthening personal bonds, or building professional circles, LineageNet brings clarity and structure to the relationships that matter most.
          </p>  
          

          

        </motion.div>
      </div>
    </section>
  );
}