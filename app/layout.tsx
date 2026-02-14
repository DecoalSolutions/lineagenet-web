import "./globals.css";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata = {
  title: "LineageNet",
  description: "Lineage & Network Tracking Simplified",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${playfair.className} bg-[#0B1F1E] text-white`}>
        {children}
      </body>
    </html>
  );
}