"use client";
import React from "react";
import { PlusCircle } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

const Header = () => {
  const router = useRouter();

  const onClick = () => {
    router.push("/users/create");
  };

  return (
    <div className="flex items-center justify-between space-y-2">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">USers</h2>
        <p className="text-muted-foreground">Manage your users</p>
      </div>
      <div className="flex items-center space-x-2">
        <Button onClick={onClick}>
          <PlusCircle className="mr-2 h-4 w-4" /> Add users
        </Button>
      </div>
    </div>
  );
};

export default Header;
