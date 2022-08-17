import { SET_ACCOUNT, SET_ERROR } from "./actionTypes";
import JSONDATA from "../users.json";

const setAccount = (account) => ({
  type: SET_ACCOUNT,
  payload: account,
});

const setError = (error) => ({
  type: SET_ERROR,
  payload: error,
});

export const getAccountFromDB = (id) => async (dispatch) => {
  try {
    const data = JSONDATA["users"].find((el) => el.id === Number(id));
    if (!data) {
      throw new Error(`No such user`);
    }
    dispatch(setAccount(data));
  } catch (e) {
    console.log(e.message);
    dispatch(setError(e.message));
  }
};
