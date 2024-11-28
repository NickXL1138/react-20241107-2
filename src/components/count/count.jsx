import styles from "./count.module.css";
import classNames from "classnames";

export const Count = ({ value, increase, decrease }) => {
  return (
    <div className={classNames(styles.count)}>
      <button className={classNames(styles.button)} onClick={increase}>
        +
      </button>
      <span className={classNames(styles.spanStyle)}>{value}</span>
      <button className={classNames(styles.button, styles)} onClick={decrease}>
        -
      </button>
    </div>
  );
};
