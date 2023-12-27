"use client";

import { useRouter } from "next/navigation";
import { NavItem } from ".";
import { Button } from "@/components/ui/button";

interface INavItem {
  label: string;
  href: string;
}

const navItems: INavItem[] = [
  { label: "Doctors", href: "/" },
  { label: "Medicine", href: "/" },
  { label: "Contact", href: "/" },
];

const Navbar = () => {
  const { push } = useRouter();

  return (
    <nav className="border-2 border-primary h-12 flex flex-row items-center justify-between">
      <h2
        onClick={() => push("/")}
        className="text-3xl font-bold py-1 pr-2 cursor-pointer hover:opacity-80 transition duration-300"
      >
        Heal
      </h2>
      <ul className="list-none flex flex-row items-center justify-center gap-2">
        {navItems.map(({ label, href }: INavItem) => (
          <NavItem key={label} onClick={() => {}} label={label} />
        ))}
        <Button onClick={() => push("/signup")} variant="default">
          Sign Up
        </Button>
      </ul>
    </nav>
  );
};

export default Navbar;
