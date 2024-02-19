import { DesktopSidebarItems } from "@/components/shared/sidebar";
import { adminItems } from "@/constants/sidebar";

const DesktopSidebar = () => {
  return (
    <aside className="w-[240px] bg-secondary border-2 border-primary pt-1 pl-2 rounded-md">
      <h4 className="text-xl font-bold">Dashboard</h4>
      <DesktopSidebarItems items={adminItems} />
    </aside>
  );
};

export default DesktopSidebar;
