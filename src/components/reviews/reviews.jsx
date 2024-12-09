import styles from "./reviews.module.css";
import { ReviewContainer } from "../review-container/review-container";

export const Reviews = ({ reviews }) => {
  return (
    <div className={styles.reviews}>
      <h3 className={styles.header}>Отзывы</h3>
      <ul>
        {reviews.map((id) => (
          <li className={styles.listItem} key={id}>
            <ReviewContainer id={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};
