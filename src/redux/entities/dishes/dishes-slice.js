import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getMenuByRestaurantId } from "./get-menu-by-restaurant-id";
import { getDishById } from "./get-dish-by-id";

const entityAdapter = createEntityAdapter();

export const dishesSlice = createSlice({
  name: "dishes",
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) =>
    builder
      .addCase(getMenuByRestaurantId.fulfilled, (state, { payload }) => {
        entityAdapter.setAll(state, payload);
      })
      .addCase(getDishById.fulfilled, (state, { payload }) => {
        entityAdapter.setOne(state, payload);
      }),
});

export const { selectById: selectDishById, selectIds: selectDishesIds } =
  entityAdapter.getSelectors((state) => state.dishes);
