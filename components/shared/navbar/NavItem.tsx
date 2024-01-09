"use client";

import { useRouter } from "next/navigation";
import { FC } from "react";

interface NavItemProps {
  label: string;
  href: string;
}

const NavItem: FC<NavItemProps> = ({ label, href }) => {
  const { push } = useRouter();

  return (
    <li
      onClick={() => push(href)}
      className="px-4 py-1 rounded-lg hover:bg-secondary hover:text-primary transition duration-300 font-semibold cursor-pointer"
    >
      {label}
    </li>
  );
};

export default NavItem;
