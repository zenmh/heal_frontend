"use client";

import { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-row items-center justify-evenly">
      <div>Sidebar</div>
      <div>{children}</div>
    </div>
  );
};

export default DashboardLayout;
