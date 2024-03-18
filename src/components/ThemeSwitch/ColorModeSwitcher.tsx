"use client";

import { FiSun, FiMoon } from "react-icons/fi";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import styles from "./themeswitch.module.css";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <div>
        <Image
          src={""}
          width={72}
          height={72}
          alt={"loading Light/Dark Toggle"}
          title="Loading Light/Dark Toggle"
          priority={false}
        ></Image>
        {/* This is a filler Image to prevent content shift */}
      </div>
    );

  if (resolvedTheme === "dark") {
    return (
      <div>
        <FiSun className={styles.icon} onClick={() => setTheme("light")} />
      </div>
    );
  }
  if (resolvedTheme === "light") {
    return (
      <div>
        <FiMoon className={styles.icon} onClick={() => setTheme("dark")} />
      </div>
    );
  }
}
