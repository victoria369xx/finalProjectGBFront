import {
  CLEAR_ACCOUNT,
  SET_ACCOUNT,
  SET_ERROR,
  ACCOUNT_PENDING,
} from "./actionTypes";
import { API_URL } from "../storeConstants";

const baseURL = API_URL.slice(0, -3);

const setAccount = (account) => ({
  type: SET_ACCOUNT,
  payload: account,
});

const setError = (error) => ({
  type: SET_ERROR,
  payload: error,
});

export const clearAccount = () => ({
  type: CLEAR_ACCOUNT,
});

const getAccountPending = () => ({
  type: ACCOUNT_PENDING,
});

export const getAccountFromDB = (token) => async (dispatch) => {
  dispatch(getAccountPending());
  try {
    const response = await fetch(baseURL + `/user`, {
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
    dispatch(setAccount(data));
  } catch (e) {
    console.log(e.message);
    dispatch(setError(e.message));
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
    dispatch(setAccount(newAccount));
  } catch (e) {
    console.log(e.message);
    dispatch(setError(e.message));
  }
};
