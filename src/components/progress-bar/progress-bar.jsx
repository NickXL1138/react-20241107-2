import { useProgressBar } from "./use-progress-bar";
import styles from "./progress-bar.module.css";
import classNames from "classnames";

export const ProgressBar = () => {
  const widthPercent = useProgressBar();

  return (
    <div
      className={classNames(styles.progressBar)}
      style={{
        width: widthPercent,
      }}
    />
  );
};
