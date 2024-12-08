import { Count } from "../count/count";
import { Button } from "../button/button";
import { useForm } from "./use-form";
import styles from "./review-form.module.css";

export const ReviewForm = () => {
  const { form, setName, setText, increaseRating, decreaseRating, clearForm } =
    useForm();
  const { name, text, rating } = form;

  return (
    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
      <h3 className={styles.header}>Оcтавить отзыв</h3>
      <div>
        <span className={styles.spanText}>Имя</span>
        <input
          className={styles.input}
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        ></input>
      </div>
      <div>
        <span className={styles.spanText}>Текст</span>
        <input
          className={styles.input}
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        ></input>
      </div>
      <div className={styles.ratingContainer}>
        <span className={styles.spanRatingText}>Оценка</span>
        <Count
          value={rating}
          increase={increaseRating}
          decrease={decreaseRating}
        />
      </div>
      <div>
        <Button onClick={clearForm} viewVariant="reviewForm">
          clear
        </Button>
      </div>
    </form>
  );
};
