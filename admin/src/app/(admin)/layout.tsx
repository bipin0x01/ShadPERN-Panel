"use client";
import { Toaster } from "@/components/ui/toaster";
import AppBar from "@/components/layout/appbar";
import Sidebar from "@/components/layout/sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full h-screen">
      <Sidebar />
      <div className="flex flex-col w-full h-full">
        <AppBar />
        <div className="flex flex-col w-full h-full p-7 overflow-scroll">
          {children}
        </div>
        <Toaster />
      </div>
    </div>
  );
}
