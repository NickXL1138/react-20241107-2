import styles from "./reviews.module.css";

export const Reviews = ({ reviews }) => {
  return (
    <div className={styles.reviews}>
      <h3 className={styles.header}>Отзывы</h3>
      <ul>
        {reviews.map(({ id, text }) => (
          <li className={styles.listItem} key={id}>
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
};
