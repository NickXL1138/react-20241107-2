import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantsIds } from "./restaurants-slice";

export const getOneRestaurantById = createAsyncThunk(
  "restaurants/getOneRestaurantById",
  async (restaurantId) => {
    const response = await fetch(
      `http://localhost:3001/api/restaurant/${restaurantId}`
    );

    const result = await response.json();

    return result;
  },
  {
    condition: (restaurantId, { getState }) => {
      const isRestaurantIncluded = selectRestaurantsIds(getState()).includes(
        restaurantId
      );

      return !isRestaurantIncluded;
    },
  }
);
