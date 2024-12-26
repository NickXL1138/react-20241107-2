import { createAsyncThunk } from "@reduxjs/toolkit";

export const getMenuByRestaurantId = createAsyncThunk(
  "dishes/getMenuByRestaurantId",
  async (restaurantId) => {
    const response = await fetch(
      `http://localhost:3001/api/dishes?restaurantId=${restaurantId}`
    );

    const result = await response.json();

    return result;
  }
);
