import { SET_ACCOUNT, SET_ERROR } from "./actionTypes";

const initialState = {
  //account will be like this {id, name, info, phone, img, city}
  account: {},
  error: null,
};

export const accountReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ACCOUNT: {
      return {
        ...state,
        error: null,
        account: payload,
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
