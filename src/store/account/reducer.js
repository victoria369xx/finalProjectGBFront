import { REQUEST_STATUS } from "../storeConstants";
import {
  ACCOUNT_PENDING,
  CLEAR_ACCOUNT,
  SET_ACCOUNT,
  SET_ERROR,
} from "./actionTypes";

const initialState = {
  //account will be like this {id, name, description, phone, img, locations, address, petSize, otherAnimals}
  account: {},
  error: null,
  statusRequest: REQUEST_STATUS.IDLE,
};

export const accountReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ACCOUNT: {
      return {
        ...state,
        error: null,
        account: payload,
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
    case CLEAR_ACCOUNT: {
      return {
        account: {},
        error: null,
      };
    }
    case ACCOUNT_PENDING: {
      return {
        ...state,
        account: {},
        error: null,
        statusRequest: REQUEST_STATUS.PENDING,
      };
    }
    default:
      return state;
  }
};
