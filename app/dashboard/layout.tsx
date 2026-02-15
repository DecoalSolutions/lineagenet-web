"use client";

import { useState } from "react";
import TopNavbar from "@/components/dashboard/TopNavbar";
import Sidebar from "@/components/dashboard/Sidebar";
import RightPanel from "@/components/dashboard/RightPanel";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [rightPanelOpen, setRightPanelOpen] = useState(true);

  if (loading) return null;

  if (!user) {
    router.push("/login");
    return null;
  }

  return (
    <div className="h-screen flex flex-col bg-[#0B1F1E] text-white">

      <TopNavbar
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      />

      <div className="flex flex-1 overflow-hidden">

        <Sidebar isOpen={sidebarOpen} />

        <main className="flex-1 relative overflow-hidden">
          {children}
        </main>

        <RightPanel
          isOpen={rightPanelOpen}
          toggle={() => setRightPanelOpen(!rightPanelOpen)}
        />

      </div>
    </div>
  );
}