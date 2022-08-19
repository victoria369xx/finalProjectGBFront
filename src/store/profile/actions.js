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
  // const settings = {
  //   method: "GET",
  //   headers: {
  //     userId: id,
  //   },
  // };
  try {
    // const fetchResponse = await fetch(
    //   "http://127.0.0.1:8000/api/v1/users/",
    //   settings
    // );
    // const response = await fetch("localhost/api/v1/users/1");
    const response = await fetch("http://127.0.0.1:8000/api/v1/users/1");
    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    // const data = JSONDATA["users"].find((el) => el.id === id);
    // dispatch(setProfile(data));
  } catch (e) {
    // console.log(e.message);
    console.log(e);
    // dispatch(setError(e.message));
  }
};
