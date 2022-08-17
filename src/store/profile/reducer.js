import { SET_ERROR, SET_PROFILE } from "./actioinTypes";

const initialState = {
  //profile will be like this {id, name, info, phone, img}
  profile: {},
  error: null,
};

export const profileReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PROFILE: {
      return {
        ...state,
        profile: payload,
      };
    }
    case SET_ERROR: {
      return {
        ...state,
        error: payload,
      };
    }
    default:
      return state;
  }
};
