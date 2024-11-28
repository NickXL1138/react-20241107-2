import { Count } from "../count/count";
import { useForm } from "./use-form";

import styles from "./review-form.module.css";
import classNames from "classnames";

export const ReviewForm = () => {
  const { form, setName, setText, increaseRating, decreaseRating, clearForm } =
    useForm();
  const { name, text, rating } = form;

  return (
    <form
      className={classNames(styles.form)}
      onSubmit={(e) => e.preventDefault()}
    >
      <h3 className={classNames(styles.header)}>Оcтавить отзыв</h3>
      <div>
        <span className={classNames(styles.span)}>Имя</span>
        <input
          className={classNames(styles.input)}
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        ></input>
      </div>
      <div>
        <span className={classNames(styles.span)}>Текст</span>
        <input
          className={classNames(styles.input)}
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        ></input>
      </div>
      <div className={classNames(styles.rating)}>
        <span className={classNames(styles.spanRating)}>Оценка</span>
        <Count
          value={rating}
          increase={increaseRating}
          decrease={decreaseRating}
        />
      </div>
      <div>
        <button className={classNames(styles.button)} onClick={clearForm}>
          clear
        </button>
      </div>
    </form>
  );
};
