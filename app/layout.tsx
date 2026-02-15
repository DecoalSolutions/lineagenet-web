import "./globals.css";
import { Playfair_Display } from "next/font/google";
import { AuthProvider } from "@/context/AuthContext";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata = {
  title: "LineageNet",
  description: "Lineage & Network Tracking Simplified",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${playfair.className} bg-[#0B1F1E] text-white`}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}