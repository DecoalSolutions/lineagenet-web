"use client";

import { Menu } from "lucide-react";
import Image from "next/image";

export default function TopNavbar({
  toggleSidebar,
}: {
  toggleSidebar: () => void;
}) {
  return (
    <div className="h-16 flex items-center justify-between px-6 border-b border-white/10 bg-black/30 backdrop-blur-xl">

      <div className="flex items-center gap-4">
        <button onClick={toggleSidebar}>
          <Menu className="text-teal-400" />
        </button>

        <Image
          src="/logo-icon.png"
          alt="LineageNet"
          width={32}
          height={32}
        />

        <h1 className="text-xl text-teal-400 font-medium">
          LineageNet
        </h1>
      </div>

      <div className="text-sm text-gray-400">
        Lineage Mode
      </div>
    </div>
  );
}