"use client";
import Link from "next/link";
import NavLink from "./navlink/NavLink";
import styles from "./links.module.css";
import { useState } from "react";

const links = [
  {
    title: "Homepage",
    path: "/"
  },
  {
    title: "About",
    path: "/about"
  },
  {
    title: "Skills",
    path: "/skills"
  }
  // {
  //   title: "Contact",
  //   path: "/contact"
  // },
  //Doesnt work on Github pages, might as well not display it intil I find a solution.
  // {
  //   title: "Projects",
  //   path: "/projects"
  // }
];

const Links = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.container}>
      {/* Desktop */}
      <div className={` ${styles.defaultlinks}`}>
        {links.map((link) => (
          <NavLink item={link} key={link.title}></NavLink>
        ))}
      </div>
      {/* Mobile */}
      <button
        className={styles.mobileMenuButton}
        onClick={() => setOpen((isOpen) => !isOpen)}
      >
        {open ? "-" : "+"}
      </button>
      {open && (
        <div className={`${styles.mobilelinks} `}>
          {links.map((link) => (
            <NavLink item={link} key={link.title}></NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
