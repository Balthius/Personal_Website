import Links from "./links/Links";
import styles from "./navbar.module.css";
const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Josh Folsom</div>
      <div className={styles.linkGroup}>
        <Links />
      </div>
    </div>
  );
};

export default NavBar;
