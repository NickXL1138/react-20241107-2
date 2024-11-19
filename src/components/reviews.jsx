export const Reviews = ({ reviews }) => {
  return (
    <>
      <h3>Отзывы</h3>
      <ul>
        {reviews.map((review) => (
          <li key={review.text}>{review.text}</li>
        ))}
      </ul>
    </>
  );
};
