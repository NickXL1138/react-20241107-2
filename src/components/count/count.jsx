import { Button } from "../button/button";

import styles from "./count.module.css";

export const Count = ({ value, increase, decrease }) => {
  return (
    <div className={styles.count}>
      <Button onClick={increase}>+</Button>
      <span className={styles.spanStyle}>{value}</span>
      <Button onClick={decrease}>-</Button>
    </div>
  );
};
