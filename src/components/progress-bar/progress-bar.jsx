import { useProgressBar } from "./use-progress-bar";
import styles from "./progress-bar.module.css";

export const ProgressBar = () => {
  const widthPercent = useProgressBar();

  return (
    <div
      className={styles.progressBar}
      style={{
        width: widthPercent,
      }}
    />
  );
};
