import { Button } from "../button/button";

import styles from "./count.module.css";

export const Count = ({ value, increase, decrease }) => {
  return (
    <div className={styles.countContainer}>
      <Button onClick={increase}>+</Button>
      <span className={styles.valueStyle}>{value}</span>
      <Button onClick={decrease}>-</Button>
    </div>
  );
};
