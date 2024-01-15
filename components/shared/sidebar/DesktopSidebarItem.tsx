import Link from "next/link";
import { FC } from "react";

interface DesktopSidebarItemProps {}

const DesktopSidebarItem: FC<DesktopSidebarItemProps> = () => {
  return <Link href={"/"}></Link>;
};

export default DesktopSidebarItem;
