import { useSelector } from "react-redux";
import { selectReviewById } from "../../redux/entities/reviews/reviews-slice";
import { SingleReview } from "./single-review";
import { UserContainer } from "../user-container/user-container";

export const SingleReviewContainer = ({ id }) => {
  const review = useSelector((state) => selectReviewById(state, id));

  if (!review) {
    return null;
  }

  return (
    <>
      <UserContainer userId={review.userId} />
      <SingleReview text={review.text} />
    </>
  );
};
