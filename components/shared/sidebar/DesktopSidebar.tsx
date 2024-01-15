import { ReactNode } from "react";

const DesktopSidebar = ({ children }: { children: ReactNode }) => {
  return (
    <aside className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-40 lg:w-20 xl:px-6 lg:overflow-y-auto lg:bg-white lg:border-r-[1px] lg:pb-4 lg:flex lg:flex-col justify-between">
      {children}
    </aside>
  );
};

export default DesktopSidebar;
