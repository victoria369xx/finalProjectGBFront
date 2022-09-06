import { REQUEST_STATUS } from "../storeConstants";
import {
  ACCOUNT_PENDING,
  ALL_CITIES_PENDING,
  CLEAR_ACCOUNT,
  SET_ACCOUNT,
  SET_ALL_CITIES,
  SET_ERROR,
  SET_ERROR_ALL_CITIES,
} from "./actionTypes";

const initialState = {
  //account will be like this {id, name, description, phone, img, locations, address, petSize, otherAnimals}
  account: {},
  errorAccount: null,
  statusRequest: REQUEST_STATUS.IDLE,
  allCities: [],
  errorCities: null,
  statusRequestCities: REQUEST_STATUS.IDLE,
};

export const accountReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ACCOUNT: {
      return {
        ...state,
        errorAccount: null,
        account: payload,
        statusRequest: REQUEST_STATUS.SUCCESS,
      };
    }
    case SET_ERROR: {
      return {
        ...state,
        errorAccount: payload,
        statusRequest: REQUEST_STATUS.ERROR,
      };
    }
    case CLEAR_ACCOUNT: {
      return {
        account: {},
        errorAccount: null,
        allCities: [],
        errorCities: null,
      };
    }
    case ACCOUNT_PENDING: {
      return {
        ...state,
        account: {},
        errorAccount: null,
        statusRequest: REQUEST_STATUS.PENDING,
      };
    }
    case ALL_CITIES_PENDING: {
      return {
        ...state,
        allCities: [],
        errorCities: null,
        statusRequestCities: REQUEST_STATUS.PENDING,
      };
    }
    case SET_ALL_CITIES: {
      return {
        ...state,
        errorCities: null,
        allCities: payload,
        statusRequestCities: REQUEST_STATUS.SUCCESS,
      };
    }
    case SET_ERROR_ALL_CITIES: {
      return {
        ...state,
        errorCities: payload,
        statusRequestCities: REQUEST_STATUS.ERROR,
      };
    }
    default:
      return state;
  }
};
