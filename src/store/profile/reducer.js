import { PROFILE_PENDING, SET_ERROR, SET_PROFILE } from "./actioinTypes";

export const REQUEST_STATUS = {
  IDLE: 0,
  PENDING: 1,
  SUCCESS: 2,
  ERROR: 3,
};

const initialState = {
  //profile will be like this {id, name, description, phone, img city}
  profile: {},
  error: null,
  statusRequest: REQUEST_STATUS.IDLE,
};

export const profileReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PROFILE: {
      return {
        ...state,
        error: null,
        profile: payload,
        statusRequest: REQUEST_STATUS.SUCCESS,
      };
    }
    case SET_ERROR: {
      return {
        ...state,
        error: payload,
        statusRequest: REQUEST_STATUS.ERROR,
      };
    }
    case PROFILE_PENDING: {
      return {
        ...state,
        profile: {},
        error: null,
        statusRequest: REQUEST_STATUS.PENDING,
      };
    }
    default:
      return state;
  }
};
