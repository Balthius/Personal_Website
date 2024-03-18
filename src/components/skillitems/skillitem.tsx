import styles from "./skillitem.module.css";

const GridItem = ({ item }: any) => {
  return (
    <div className={styles.griditem}>
      <i className={`${item.icon} colored`}></i>
      <h5 className={item.rank}>{item.name}</h5>
    </div>
  );
};

export default GridItem;
