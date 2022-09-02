import React, { useState } from "react";
import { Card, FormGroup, TextField, Button, Typography } from "@mui/material";
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
    <>
      <Card sx={{ maxWidth: 400, p: 4, boxShadow: 2, mt: 4 }}>
        <Typography sx={{ fontWeight: "medium" }}>РЕГИСТРАЦИЯ</Typography>

        <form onSubmit={signUpHandler}>
          <FormGroup>
            <TextField
              id="standard-basic"
              label="Имя"
              variant="outlined"
              sx={{ mt: 2 }}
              onChange={nameSubmitHandler}
              required
            />
            <TextField
              id="standard-basic"
              label="Эл. почта"
              variant="outlined"
              sx={{ mt: 2 }}
              onChange={emailSubmitHandler}
              required
            />
            <TextField
              id="standard-basic"
              label="Пароль"
              variant="outlined"
              sx={{ mt: 2 }}
              onChange={passwordSubmitHandler}
              required
            />
            <TextField
              id="standard-basic"
              label="Подтвердите пароль"
              variant="outlined"
              sx={{ mt: 2 }}
              onChange={confirmationSubmitHandler}
              required
            />
            <Button
              type="submit"
              color="warning"
              variant="contained"
              sx={{ mt: 2 }}
            >
              СОЗДАТЬ АККАУНТ
            </Button>
          </FormGroup>
        </form>
        <Typography sx={{ mt: 2 }}>
          {" "}
          Уже есть аккаунт? <Link to="/login"> Войти </Link>
        </Typography>
      </Card>
    </>
  );
};
