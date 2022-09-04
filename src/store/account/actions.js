import {
  CLEAR_ACCOUNT,
  SET_ACCOUNT,
  SET_ERROR,
  ACCOUNT_PENDING,
  ALL_CITIES_PENDING,
  SET_ALL_CITIES,
  SET_ERROR_ALL_CITIES,
} from "./actionTypes";
import { API_URL } from "../storeConstants";

const baseURL = API_URL;

const setAccount = (account) => ({
  type: SET_ACCOUNT,
  payload: account,
});

const setError = (errorAccount) => ({
  type: SET_ERROR,
  payload: errorAccount,
});

export const clearAccount = () => ({
  type: CLEAR_ACCOUNT,
});

const getAccountPending = () => ({
  type: ACCOUNT_PENDING,
});

const getAllCitiesPending = () => ({
  type: ALL_CITIES_PENDING,
});

const setAllCities = (allCities) => ({
  type: SET_ALL_CITIES,
  payload: allCities,
});

const setErrorAllCities = (errorCities) => ({
  type: SET_ERROR_ALL_CITIES,
  payload: errorCities,
});

export const getAccountFromDB = (token) => async (dispatch) => {
  dispatch(getAccountPending());
  try {
    const response = await fetch(baseURL.slice(0, -3) + `/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`);
    }
    const data = await response.json();
    dispatch(setAccount(data.data));
  } catch (e) {
    console.log(e.message);
    dispatch(setError(e.message));
  }
};

export const getAllCities = () => async (dispatch) => {
  dispatch(getAllCitiesPending());
  try {
    const response = await fetch(baseURL + `/locations`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`);
    }
    const data = await response.json();
    const result = data.data.cities;
    dispatch(setAllCities(result));
  } catch (e) {
    console.log(e.message);
    dispatch(setErrorAllCities(e.message));
  }
};

export const editAccount = (newAccount, formData) => async (dispatch) => {
  try {
    //тут будет отправка запроса на бэк
    //это пример для отправки файла
    // const url = 'http://localhost:3000/uploadFile';
    // const config = {
    //   headers: {
    //     'content-type': 'multipart/form-data',
    //   },
    // };
    // axios.post(url, formData, config).then((response) => {
    //   console.log(response.data);
    // });
    // const response = await fetch(baseURL + `/users/${newAccount.id}`, {
    //   method: "PUT",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    // if (!response.ok) {
    //   throw new Error(`Request failed: ${response.status}`);
    // }
    dispatch(setAccount(newAccount));
  } catch (e) {
    console.log(e.message);
    dispatch(setError(e.message));
  }
};
