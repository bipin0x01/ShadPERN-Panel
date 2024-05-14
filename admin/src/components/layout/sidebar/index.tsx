"use client";
import { LayoutGrid, Users } from "lucide-react";
import Image from "@/components/image";
import SidebarItem from "./item";
import Logo from "@/components/Logo";

const Sidebar = () => {
  const items = [
    {
      label: "Dashboard",
      url: "/",
      icon: LayoutGrid,
    },
    {
      label: "Students",
      url: "/students",
      icon: Users,
    },
  ];
  return (
    <div className="flex flex-col border-r text-center">
      <div className="p-4">
        <Logo />
      </div>
      <div className="flex flex-col p-3 w-64 space-y-2 ">
        {items.map((item) => (
          <SidebarItem key={item.label} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
