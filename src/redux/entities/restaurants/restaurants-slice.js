import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getRestaurants } from "./get-restaurants";
import { getOneRestaurantById } from "./get-one-restaurant-by-id";

const entityAdapter = createEntityAdapter();

export const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) =>
    builder
      .addCase(getRestaurants.fulfilled, (state, { payload }) => {
        entityAdapter.setMany(state, payload);
      })
      .addCase(getOneRestaurantById.fulfilled, (state, { payload }) => {
        entityAdapter.setOne(state, payload);
      }),
});

export const {
  selectById: selectOneRestaurantById,
  selectIds: selectRestaurantsIds,
} = entityAdapter.getSelectors((state) => state.restaurants);
