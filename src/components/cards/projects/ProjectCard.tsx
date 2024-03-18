"use client";
import Image from "next/image";
import styles from "./projectcard.module.css";
import Link from "next/link";

const ProjectCard = ({ item }: any) => {
  return (
    <div className={styles.container}>
      <Link href={item.path}>
        <Image
          className={styles.projectimage}
          src={item.image}
          width={200}
          height={200}
          alt="Picture of the project"
        />
      </Link>
      <div className={styles.projecttext}>
        <Link href={item.path}>
          <h1>{item.title}</h1>
        </Link>
        <p>{item.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
