import styles from "./reviews.module.css";
import classNames from "classnames";

export const Reviews = ({ reviews }) => {
  return (
    <div className={classNames(styles.reviews)}>
      <h3 className={classNames(styles.header)}>Отзывы</h3>
      <ul>
        {reviews.map(({ id, text }) => (
          <li className={classNames(styles.listItem)} key={id}>
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
};
