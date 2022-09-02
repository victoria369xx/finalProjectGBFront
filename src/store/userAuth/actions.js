import { clearAccount } from "../account/actions";
import { API_URL } from "../storeConstants";

const baseURL = API_URL;

const signUpUrl = baseURL + "/register";
const logInUrl = baseURL + "/login";

export const SIGNUP_USER = "SIGNUP_USER";
export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";

function sendRequest(method, url, body = null) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responseType = "json";
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response);
      } else {
        resolve(xhr.response);
      }
    };
    xhr.onerror = () => {
      reject(xhr.response);
    };
    xhr.send(JSON.stringify(body));
  });
}

export const signUpUser = (user) => ({
  type: SIGNUP_USER,
  payload: user,
});
export const logInUser = (user) => ({
  type: LOGIN_USER,
  payload: user,
});

export const logOutUser = () => ({
  type: LOGOUT_USER,
});

export const signUpUserThunk =
  (name, email, password, confirmation) => (dispatch) => {
    const body = {
      name: name,
      email: email,
      password: password,
      password_confirmation: confirmation,
    };
    sendRequest("POST", signUpUrl, body)
      .then((response) => {
        const token = response.data.token;
        const user = {
          name: name,
          email: email,
          password: password,
          password_confirmation: confirmation,
          token: token,
        };
        dispatch(signUpUser(user));
      })
      .catch((err) => alert(err.message));
  };

export const logInUserThunk = (email, password) => (dispatch) => {
  const body = {
    email: email,
    password: password,
  };
  sendRequest("POST", logInUrl, body)
    .then((response) => {
      const token = response.data.token;
      const user = {
        email: email,
        password: password,
        token: token,
      };
      dispatch(logInUser(user));
    })
    .catch((err) => alert(err.message));
};

export const logOutUserAction = (dispatch) => {
  dispatch(logOutUser());
  dispatch(clearAccount());
};

export const initAuthAction = (user) => (dispatch) => {
  if (user !== null) {
    dispatch(logInUser(user));
  } else {
    dispatch(logOutUser());
    dispatch(clearAccount());
  }
};
