import styles from "./reviews.module.css";
import { SingleReviewContainer } from "../single-review/single-review-container";

export const Reviews = ({ reviewsIds }) => {
  return (
    <div className={styles.reviewsContainer}>
      <ul>
        {reviewsIds.map((id) => (
          <li className={styles.listItem} key={id}>
            <SingleReviewContainer id={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};
