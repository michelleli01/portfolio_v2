import Link from "next/link";
import React, { useState } from "react";

type NavItemProps = {
  text: string;
  href: string;
};

const NavItem = ({ text, href }: NavItemProps) => {
  return (
    <Link href={href} className={`nav_item`}>
      {text}
    </Link>
  );
};

const MobileNavbar = () => {};

const Navbar = () => {
  const [active, setActive] = useState(false);

  const navItems: NavItemProps[] = [
    { text: "work", href: "/" },
    { text: "projects", href: "/projects" },
    { text: "about", href: "/about" },
  ];

  return (
    <header>
      <nav className="nav">
        <Link href={"/"}>
          <h1 className="logo">michelle li</h1>
        </Link>
        {navItems.map((d: NavItemProps) => {
          return <NavItem key={d.href} text={d.text} href={d.href} />;
        })}
      </nav>
    </header>
  );
};

export default Navbar;
