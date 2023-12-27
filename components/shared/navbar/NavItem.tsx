"use client";

import { FC } from "react";

interface NavItemProps {
  label: string;
  onClick: () => void;
}

const NavItem: FC<NavItemProps> = ({ label, onClick }) => {
  return (
    <li
      onClick={onClick}
      className="px-4 py-1 rounded-lg hover:bg-secondary hover:text-primary transition duration-300 font-semibold cursor-pointer"
    >
      {label}
    </li>
  );
};

export default NavItem;
