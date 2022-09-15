import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  LinearProgress,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  changeAccountPassword,
  deleteAccount,
  editIdle,
} from "../../store/account/actions";
import {
  selectAccount,
  selectAccountError,
  selectEditError,
  selectEditLoading,
  selectEditSuccess,
} from "../../store/account/selector";
import { getToken } from "../../store/userAuth/selectors";

export const AccountSettings = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = useSelector(getToken);
  const account = useSelector(selectAccount);

  const editSuccess = useSelector(selectEditSuccess);
  const editLoading = useSelector(selectEditLoading);
  const editError = useSelector(selectEditError);
  const errorDB = useSelector(selectAccountError);

  const [changePassword, setChangePassword] = useState("Изменить");
  const [formPassword, setFormPassword] = useState({ display: "none" });
  const [passwords, setPasswords] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [errorConfirm, setErrorConfirm] = useState();
  const [errorStyle, setErrorStyle] = useState();
  const [error, setError] = useState();
  const [successAnswer, setSuccessAnswer] = useState("");
  const [open, setOpen] = useState();

  const clearForm = () => {
    setPasswords({
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  const clearError = () => {
    setErrorStyle(undefined);
    setErrorConfirm(undefined);
    setError(undefined);
  };

  useEffect(() => {
    dispatch(editIdle());
  }, []);

  useEffect(() => {
    if (editSuccess) {
      clearForm();
      setSuccessAnswer("Пароль успешно изменен");
    }
  }, [editSuccess]);

  useEffect(() => {
    if (editError) {
      setError(errorDB);
      setErrorStyle({ borderColor: "red" });
      setErrorConfirm({ borderColor: "red" });
    }
  }, [editError, errorDB]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const clickPasswordHandler = (event) => {
    setChangePassword(
      event.target.value === "Изменить" ? "Отмена" : "Изменить"
    );
    setFormPassword(
      event.target.value === "Изменить"
        ? { display: "flex" }
        : { display: "none" }
    );
    clearForm();
    clearError();
    setSuccessAnswer(undefined);
  };

  const oldPasswordChangeHandler = (event) => {
    clearError();
    setPasswords({
      ...passwords,
      oldPassword: event.target.value,
    });
  };
  const newPasswordChangeHandler = (event) => {
    clearError();
    setPasswords({
      ...passwords,
      newPassword: event.target.value,
    });
  };
  const confirmationChangeHandler = (event) => {
    clearError();
    setPasswords({
      ...passwords,
      confirmPassword: event.target.value,
    });
  };

  const passwordSubmitHandler = (event) => {
    event.preventDefault();
    if (passwords.oldPassword === passwords.newPassword) {
      setErrorStyle({ borderColor: "red" });
      setError("Введите новый пароль");
      return;
    }

    if (passwords.confirmPassword !== passwords.newPassword) {
      setPasswords({
        ...passwords,
        confirmPassword: "",
      });
      setErrorConfirm({ borderColor: "red" });
      setError("Пароли не совпадают, попробуйте еще раз");
      return;
    }
    dispatch(changeAccountPassword(token, passwords, account.id));
  };

  const accountDeleteHandler = () => {
    dispatch(deleteAccount(token, account.id));
    navigate("/");
  };

  return (
    <section className="page-wrapper">
      <div className="login-page settings-page">
        <h1 className="text-lev2 text-center">Настройки</h1>
        <div className="form-hor settings">
          <h4 className="text-lev3 text-settings">Пароль</h4>
          <button
            className="btn-settings"
            onClick={clickPasswordHandler}
            value={changePassword}
          >
            {changePassword}
          </button>
        </div>
        <form
          className="form form-settings"
          style={formPassword}
          onSubmit={passwordSubmitHandler}
        >
          <div className="text-field">
            <label className="text-field__label" htmlFor="oldPassword">
              Старый пароль
            </label>
            <input
              className="text-field__input"
              type="password"
              placeholder="Введите пароль"
              id="oldPassword"
              name="oldPassword"
              value={passwords.oldPassword}
              onChange={oldPasswordChangeHandler}
              required
              style={errorStyle}
            />
          </div>
          <div className="text-field">
            <label className="text-field__label" htmlFor="newPassword">
              Новый пароль
            </label>
            <input
              className="text-field__input"
              type="password"
              placeholder="Введите пароль"
              id="newPassword"
              name="newPassword"
              value={passwords.newPassword}
              onChange={newPasswordChangeHandler}
              required
              style={errorStyle}
            />
          </div>
          <div className="text-field">
            <label className="text-field__label" htmlFor="confirmPassword">
              Повторите пароль
            </label>
            <input
              className="text-field__input"
              type="password"
              placeholder="Повторите пароль"
              id="confirmPassword"
              name="confirmPassword"
              value={passwords.confirmPassword}
              onChange={confirmationChangeHandler}
              required
              style={errorConfirm}
            />
          </div>
          {editLoading && <LinearProgress color="warning" />}
          {error && <p style={{ color: "red" }}>{error}</p>}
          {/* {errorDB && <p style={{ color: "red" }}>{errorDB}</p>} */}
          {editSuccess && (
            <p
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "green",
              }}
            >
              {successAnswer}
            </p>
          )}
          <input className="btn" type="submit" value="Изменить пароль" />
        </form>
        <hr style={{ color: "#7d818e" }} />
        <div className="form-hor settings">
          <h4 className="text-lev3 text-settings">Профиль</h4>
          <button className="btn-settings" onClick={handleClickOpen}>
            Удалить
          </button>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
          >
            <DialogTitle id="alert-dialog-title">
              {"Вы уверены, что хотите удалить профиль на Pet Booking?"}
            </DialogTitle>
            <DialogActions
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                color="warning"
                variant="outlined"
                onClick={accountDeleteHandler}
              >
                Да
              </Button>
              <Button color="warning" onClick={handleClose} variant="outlined">
                Нет
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </section>
  );
};
