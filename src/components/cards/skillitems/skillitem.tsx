import styles from "./skillitems.module.css";

const GridItem = ({ item }: any) => {
  return (
    <div className={`${styles["griditem"]} skillbox`}>
      <i className={`${item.icon} colored`}></i>
      <h5 className={styles[item.rank]}>{item.name}</h5>
    </div>
  );
};

export default GridItem;
