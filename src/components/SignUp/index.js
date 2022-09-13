import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signUpUserThunk } from "../../store/userAuth/actions";

export const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function nameSubmitHandler(event) {
    setName(event.target.value);
  }

  function emailSubmitHandler(event) {
    setEmail(event.target.value);
  }

  function passwordSubmitHandler(event) {
    setPassword(event.target.value);
  }

  function confirmationSubmitHandler(event) {
    setConfirmation(event.target.value);
  }
  function clearForm() {
    setName("");
    setEmail("");
    setPassword("");
    setConfirmation("");
  }

  async function signUpHandler(event) {
    event.preventDefault();
    await dispatch(signUpUserThunk(name, email, password, confirmation));
    navigate("/account");
    clearForm();
  }

  return (
    <section className="page-wrapper">
      <div className="login-page">
        <form onSubmit={signUpHandler}>
        <div class="text-lev3 text-center">Регистрация</div>
          <div className="form">
          <div class="text-field">
          <label class="text-field__label" for="name">Имя</label>
            <input class="text-field__input" id="name" type="text" placeholder="Ваше имя"
              onChange={nameSubmitHandler}
              required
            />
            </div>
            <div class="text-field">
            <label class="text-field__label" for="email">Email</label>
            <input class="text-field__input" id="email" type="email" placeholder="Введите email"
              onChange={emailSubmitHandler}
              required
            />
            </div>
            <div class="text-field">
            <label class="text-field__label" for="password">Пароль</label>
            <input class="text-field__input" id="password" type="password" placeholder="Введите пароль"
              onChange={passwordSubmitHandler}
              required
            />
            </div>
            <div class="text-field">
            <label class="text-field__label" for="_repeat">Повторить пароль</label>
            <input class="text-field__input" id="password_repeat" type="password" placeholder="Повторите пароль"
              onChange={confirmationSubmitHandler}
              required
            />
          </div>
          <div class="remember-me">
                        <div class="text-login">
                        <Link to="/login"> 
                            <p>Уже есть аккаунт?</p>
                            </Link>
                        </div>
                    </div>
                    <input class="btn" type="submit" value="Создать аккаунт"/>
          </div>
        </form>
      </div>
    </section>
  );
};
