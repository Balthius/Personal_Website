import Link from "next/link";
import styles from "./footer.module.css";
const Footer = () => {
  const external_links = [
    {
      title: "JMDS Consulting",
      href: "https://www.jmds-consulting.com/"
    },
    {
      title: "Github",
      href: "https://github.com/Balthius"
    },
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/josh-folsom-4aa121146/"
    },
    {
      title: "Itch.io",
      href: "https://balthius.itch.io"
    }
  ];
  <div className={styles.footercol}>{/* Template */}</div>;
  return (
    <div>
      <div className={styles.container}>
        {/* Insert New Col Here */}
        {/* Insert New Col Here */}
        <div className={styles.footercol}>
          {/* External Links */}
          <h1>External Sites</h1>
          <div className={`${styles.links}`}>
            <ul>
              {external_links.map((link) => (
                <Link href={link.href} key={link.title} className={styles.link}>
                  {link.title}
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
