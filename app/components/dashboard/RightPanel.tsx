"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

export default function RightPanel({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}) {
  return (
    <div
      className={`
        transition-all duration-300
        ${isOpen ? "w-72" : "w-10"}
        bg-black/30 backdrop-blur-xl
        border-l border-white/10
        relative
      `}
    >
      <button
        onClick={toggle}
        className="absolute -left-4 top-6 bg-teal-500 p-1 rounded-full"
      >
        {isOpen ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
      </button>

      {isOpen && (
        <div className="p-6">
          <h2 className="text-teal-400 mb-4">
            Details Panel
          </h2>

          <p className="text-sm text-gray-400">
            Select a person to view details.
          </p>
        </div>
      )}
    </div>
  );
}