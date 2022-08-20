import { SET_CITIES, SET_SEARCH_ERROR, SET_SEARCH_RESULT } from "./actionTypes";
const initialState = {
  searchResult: {},
  error: null,
  cities: [],
};

export const searchResultReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case SET_SEARCH_RESULT: {
      return {
        ...state,
        searchResult: payload,
        error: null,
      };
    }
    case SET_SEARCH_ERROR: {
      return {
        ...state,
        error: payload,
      };
    }
    case SET_CITIES: {
      return {
        ...state,
        cities: payload,
        error: null,
      };
    }
    default:
      return state;
  }
};
