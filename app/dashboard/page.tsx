"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function Dashboard() {
  const { user, loading } = useAuth();
  const router = useRouter();

  if (loading) return null;

  if (!user) {
    router.push("/login");
    return null;
  }

  return (
    <div className="min-h-screen bg-[#0B1F1E] text-white flex">

      {/* Sidebar */}
      <aside className="w-64 bg-black/30 backdrop-blur-xl border-r border-white/10 p-6">
        <h2 className="text-xl text-teal-400 mb-6">LineageNet</h2>
        <p className="text-sm text-gray-400">{user.email}</p>

        <button
          onClick={() => {
            signOut(auth);
            router.push("/");
          }}
          className="mt-6 bg-teal-500 px-4 py-2 rounded-xl"
        >
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <h1 className="text-3xl text-teal-400 mb-4">
          Welcome to Your Dashboard
        </h1>

        <p className="text-gray-300">
          This is where your lineage canvas will live.
        </p>
      </main>
    </div>
  );
}