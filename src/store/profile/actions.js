import { SET_ERROR, SET_PROFILE } from "./actioinTypes";
import JSONDATA from "../users.json";

const setProfile = (profile) => ({
  type: SET_PROFILE,
  payload: profile,
});

const setError = (error) => ({
  type: SET_ERROR,
  payload: error,
});

export const getProfileFromDB = (id) => async (dispatch) => {
  //   const settings = {
  //     method: "POST",
  //     headers: {
  //       userId: id,
  //     },
  //   };
  try {
    // const fetchResponse = await fetch(API, settings);
    // const data = await fetchResponse.json();
    // заглушка пока нет данных с БД
    const data = JSONDATA["users"].find((el) => el.id === id);
    dispatch(setProfile(data));
  } catch (e) {
    console.log(e.message);
    dispatch(setError(e.message));
  }
};
