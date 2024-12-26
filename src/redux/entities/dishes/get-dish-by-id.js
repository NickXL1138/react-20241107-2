import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDishesIds } from "./dishes-slice";

export const getDishById = createAsyncThunk(
  "dishes/getDishById",
  async (dishId) => {
    const response = await fetch(`http://localhost:3001/api/dish/${dishId}`);

    const result = await response.json();

    return result;
  },
  {
    condition: (dishId, { getState }) => {
      const isDishIncluded = selectDishesIds(getState()).includes(dishId);

      return !isDishIncluded;
    },
  }
);
