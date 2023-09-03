import { AnyAction } from "@reduxjs/toolkit";
import ImageModel from "../models";
import { GETIMAGES, GETQUERY } from "../action";
import { produce } from "immer";

export type state = {
  Images: ImageModel[];
  query: string;
};

export const initialState: state = {
  Images: [],
  query: "",
};

const ShowImages = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case GETQUERY:
      return produce(state, (draft) => {
        draft.query = action.payload;
      });

    case GETIMAGES:
      return produce(state, (draft) => {
        draft.Images = action.payload;
      });

    default:
      return state;
  }
};

export default ShowImages;
