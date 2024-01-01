"use client";

import { NavDropdown, NavItem } from ".";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { isLoggedIn } from "@/services/authService";

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
    <nav className="mt-1 h-12 flex flex-row items-center justify-between">
      <Image
        src="/images/logo.jpg"
        alt="logo"
        height={100}
        width={100}
        onClick={() => push("/")}
        className="cursor-pointer"
      />

      <ul className="list-none flex flex-row items-center justify-center gap-2">
        {navItems.map(({ label, href }: INavItem) => (
          <NavItem key={label} onClick={() => {}} label={label} />
        ))}

        {isLoggedIn() ? (
          <NavDropdown />
        ) : (
          <Button onClick={() => push("/auth")} variant="default">
            Sign Up
          </Button>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
