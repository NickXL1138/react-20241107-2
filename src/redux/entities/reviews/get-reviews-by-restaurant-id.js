import { createAsyncThunk } from "@reduxjs/toolkit";

export const getReviewsByRestaurantId = createAsyncThunk(
  "reviews/getReviewsByRestaurantId",
  async (restaurantId) => {
    const response = await fetch(
      `http://localhost:3001/api/reviews?restaurantId=${restaurantId}`
    );

    const result = await response.json();

    return result;
  }
);
