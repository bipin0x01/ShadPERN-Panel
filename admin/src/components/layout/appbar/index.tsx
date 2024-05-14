"use client";

import React from "react";

// import { ModeToggle } from "../theme-toggle";
import { UserMenu } from "./user-menu";
import { ModeToggle } from "../theme-toggle";

const AppBar = () => {
  return (
    <div className="flex w-full border-b p-3 items-center px-7 justify-end">
      <div className="flex flex-row gap-4 items-center">
        <ModeToggle />
        <UserMenu />
      </div>
    </div>
  );
};

export default AppBar;
