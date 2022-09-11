import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logInUserThunk } from "../../store/userAuth/actions";

export const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function emailSubmitHandler(event) {
    setEmail(event.target.value);
  }

  function passwordSubmitHandler(event) {
    setPassword(event.target.value);
  }

  function clearForm() {
    setEmail("");
    setPassword("");
  }

  async function logInHandler(event) {
    event.preventDefault();
    await dispatch(logInUserThunk(email, password));
    navigate("/account");
    clearForm();
  }
  return (
    <section className="page-wrapper">
      <div className="login-page">
      <form onSubmit={logInHandler}>
        <div className="text-lev3 text-center">Вход на сайт</div>
          <div className="form">
            <div className="text-field">
            <label class="text-field__label" for="email">Email</label>
            <input className="text-field__input"
            type="email" 
            placeholder="Введите email"
              value={email}
              onChange={emailSubmitHandler}
              required
            />
            </div>
            <div className="text-field">
            <label class="text-field__label" for="password">Пароль</label>
            <input className="text-field__input"
            type="password" 
            placeholder="Введите пароль"
              value={password}
              onChange={passwordSubmitHandler}
              required
            />
            </div>
            <div className="text-login">
        <Link to="/signup" style={{ textDecoration: "none" }}>
        <p> Создать аккаунт</p>
        </Link>
        </div>
            <input class="btn" type="submit" value="Войти"></input>
          </div>
        </form>
      </div>
    </section>
  );
};
