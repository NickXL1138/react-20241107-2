import { ReviewForm } from "../components/review-form/review-form";
import { useAuth } from "../components/auth-context/use-auth";
import { ReviewsContainer } from "../components/reviews/reviews-container";

export const ReviewsPage = () => {
  const { isAuth } = useAuth();

  return (
    <>
      <ReviewsContainer />
      {isAuth.name && <ReviewForm />}
    </>
  );
};
