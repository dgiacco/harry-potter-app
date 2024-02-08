import { Sidebar } from "@/components";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harry Potter App",
  description: "Created by Damian",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex justify-center">
        <div className="w-5/6">
          <div className="flex">
            <div className="w-1/5">
              <div className="border-r border-white min-h-screen">
                <Sidebar />
              </div>
            </div>
            <div className="flex-1">
              { children }
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
