import { useSelector } from "react-redux";
import { selectReviewById } from "../../redux/entities/reviews/reviews-slice";
import { Review } from "./review";
import { UserContainer } from "../user-container/user-container";

export const ReviewContainer = ({ id }) => {
  const review = useSelector((state) => selectReviewById(state, id));

  if (!review) {
    return null;
  }

  return (
    <>
      <UserContainer id={review.userId} />
      <Review text={review.text} />
    </>
  );
};
