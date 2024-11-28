import { Count } from "../count/count";
import { useForm } from "./use-form";

export const ReviewForm = () => {
  const { form, setName, setText, increaseRating, decreaseRating, clearForm } =
    useForm();
  const { name, text, rating } = form;

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <h3>Отавить отзыв</h3>
      <div>
        <span>Имя</span>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        ></input>
      </div>
      <div>
        <span>Текст</span>
        <input
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        ></input>
      </div>
      <div>
        <span>Оценка</span>
        <Count
          value={rating}
          increase={increaseRating}
          decrease={decreaseRating}
        />
      </div>
      <div>
        <button onClick={clearForm}>clear</button>
      </div>
    </form>
  );
};
