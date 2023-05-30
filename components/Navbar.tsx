import Link from "next/link";
import React, { useState } from "react";

type NavItemProps = {
  text: string;
  href: string;
  active: boolean;
};

const NavItem = ({ text, href, active }: NavItemProps) => {
  return (
    <Link href={href} className={`nav_item ${active ? "active" : ""}`}>
      {text}
    </Link>
  );
};

const Navbar = () => {
  const navItems: NavItemProps[] = [
    { text: "About", href: "/about", active: false },
    { text: "Experience", href: "/experience", active: false },
    { text: "Projects", href: "/projects", active: false },
  ];

  return (
    <header>
      <nav className="nav">
        <Link href={"/"}>
          <h1 className="logo">michelle li</h1>
        </Link>
        {navItems.map((d: NavItemProps) => {
          return (
            <NavItem
              key={d.href}
              text={d.text}
              href={d.href}
              active={d.active}
            />
          );
        })}
      </nav>
    </header>
  );
};

export default Navbar;
