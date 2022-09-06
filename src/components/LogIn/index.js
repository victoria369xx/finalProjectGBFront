import React, { useState } from "react";
import {
  Card,
  FormGroup,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Typography,
  Container,
} from "@mui/material";
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
    <Container>
      <Card sx={{ maxWidth: 400, p: 4, boxShadow: 2, mt: 4 }}>
        <Typography sx={{ fontWeight: "medium" }}>ВХОД </Typography>
        <form onSubmit={logInHandler}>
          <FormGroup>
            <TextField
              id="standard-basic"
              label="Эл.почта"
              variant="outlined"
              sx={{ mt: 2 }}
              value={email}
              onChange={emailSubmitHandler}
              required
            />
            <TextField
              id="standard-basic"
              label="Пароль"
              variant="outlined"
              sx={{ mt: 2 }}
              value={password}
              onChange={passwordSubmitHandler}
              required
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Запомнить меня"
              sx={{ mt: 2 }}
            />
            <Button type="submit" variant="contained" color="warning">
              ВОЙТИ
            </Button>
          </FormGroup>
        </form>
        <Link to="/signup" style={{ textDecoration: "none" }}>
          <Button color="warning" sx={{ mt: 2 }}>
            Создать аккаунт
          </Button>
        </Link>
      </Card>
    </Container>
  );
};
