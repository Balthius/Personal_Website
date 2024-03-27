"use client";

import CoverLetter from "@/components/coverletter/CoverLetter";
import styles from "./coverletter.module.css";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const CoverLetterPage = () => {
  const searchParams = useSearchParams();

  const details = {
    positiontemplate: searchParams.get("positiontemplate"),
    businesstemplate: searchParams.get("businesstemplate"),
    industry: searchParams.get("industry"),
    company: searchParams.get("company"),
    position: searchParams.get("position"),
    companypurpose: searchParams.get("companypurpose")
  };
  return (
    <section className={styles.container}>
      <CoverLetter props={details}></CoverLetter>
    </section>
  );
};

export default CoverLetterPage;

// 3 variables, template, company, posiiton
