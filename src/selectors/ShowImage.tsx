import { State } from "../Reducer/Store";
import { createSelector } from "@reduxjs/toolkit";

const ShowSelector = (state: State) => state.Images;
export const ShowQuerySelector = createSelector(
  ShowSelector,
  (ShowQuery) => ShowQuery.query
);

export const ShowImagesSelectors = createSelector(
  ShowSelector,
  (ShowImages) => ShowImages.Images
);

export const ShowNotFoundSelector = (state: State) => {
  return state.Images.imgUrl;
};
