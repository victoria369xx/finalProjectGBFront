import { SET_PROFILE } from "./actioinTypes";

const initialState = {
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
    default:
      return state;
  }
};
