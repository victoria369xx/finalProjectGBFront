import { SET_CITIES, SET_SEARCH_ERROR, SET_SEARCH_RESULT } from "./actionTypes";

// const baseURL = "http://localhost:881/api/v1";
const baseURL = "http://localhost/api/v1";

const setSearchResult = (searchResult) => ({
  type: SET_SEARCH_RESULT,
  payload: searchResult,
});

const setSearchError = (error) => ({
  type: SET_SEARCH_ERROR,
  payload: error,
});

const setCities = (cities) => ({
  type: SET_CITIES,
  payload: cities,
});

export const getCities = () => async (dispatch) => {
  try {
    fetch(baseURL + `/locations`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((responce) => responce.json())
      .then((data) => {
        const result = data.data.cities;
        dispatch(setCities(result));
      });
  } catch (e) {
    console.log(e.message);
  }
};

export const getSearchResult = (city) => async (dispatch) => {
  try {
    fetch(baseURL + `/recipients?filters[city_id]=${city}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((responce) => responce.json())
      .then((data) => {
        console.log(data.data.users);
        const result = data.data.users;
        dispatch(setSearchResult(result));
      });
  } catch (error) {
    console.log(error.message);
    dispatch(setSearchError(error.message));
  }
};
