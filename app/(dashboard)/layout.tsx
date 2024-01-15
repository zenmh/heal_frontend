"use client";

import { DesktopSidebar } from "@/components/shared/sidebar";
import { isLoggedIn } from "@/services/authService";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const userLoggedIn = isLoggedIn();
  const { push } = useRouter();

  useEffect(() => {
    if (!userLoggedIn) push("/auth");

    setLoading(true);
  }, [push, userLoggedIn, isLoading]);

  if (!isLoading)
    return (
      <h3 className="text-green-400 text-4xl font-bold text-center">
        Loading....
      </h3>
    );

  return (
    <div className="h-screen flex felx-col justify-start gap-6">
      <DesktopSidebar />
      <main className="w-full border-2 border-primary">{children}</main>
    </div>
  );
};

export default DashboardLayout;
