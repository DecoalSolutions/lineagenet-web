"use client";

import { Home, Users, User, LogOut } from "lucide-react";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function Sidebar({
  isOpen,
}: {
  isOpen: boolean;
}) {
  const router = useRouter();

  return (
    <div
      className={`
        transition-all duration-300
        ${isOpen ? "w-64" : "w-0"}
        bg-black/30 backdrop-blur-xl
        border-r border-white/10
        overflow-hidden
      `}
    >
      <div className="p-6 space-y-6">

        <NavItem icon={<Home size={18} />} label="Tree View" />
        <NavItem icon={<Users size={18} />} label="List View" />
        <NavItem icon={<User size={18} />} label="Profile" />

        <button
          onClick={async () => {
            await signOut(auth);
            router.push("/");
          }}
          className="flex items-center gap-3 text-red-400 hover:text-red-300"
        >
          <LogOut size={18} />
          Logout
        </button>

      </div>
    </div>
  );
}

function NavItem({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div className="flex items-center gap-3 text-gray-300 hover:text-teal-400 cursor-pointer">
      {icon}
      {label}
    </div>
  );
}