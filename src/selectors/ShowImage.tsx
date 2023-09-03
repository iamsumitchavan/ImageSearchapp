import { State } from "../Reducer/Store";

export const ShowQuerySelector = (state: State) => {
  return state.Images?.query;
};

export const ShowImagesSelectors = (state: State) => {
  return state.Images?.Images;
};
