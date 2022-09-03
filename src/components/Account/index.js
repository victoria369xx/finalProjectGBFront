import { Container, CircularProgress } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getAccountFromDB } from "../../store/account/actions";
import {
  selectAccount,
  selectAccountError,
  selectAccountLoading,
} from "../../store/account/selector";
import { getToken } from "../../store/userAuth/selectors";
import avatar from "../../assets/images/user.jpg";
import ratingStar from "../../img/star.svg";

export const Account = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const account = useSelector(selectAccount);
  const error = useSelector(selectAccountError);
  const token = useSelector(getToken);
  const loading = useSelector(selectAccountLoading);

  useEffect(() => {
    dispatch(getAccountFromDB(token));
  }, [token]);

  if (loading) {
    return (
      <div
        className="page-wrapper container"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <CircularProgress size={60} />
      </div>
    );
  }

  if (!account || error) {
    return (
      <Container maxWidth="md">
        <h3>Проблема с сервером</h3>
      </Container>
    );
  }

  const handlerClick = () => {
    navigate(`/accountEdit`);
  };

  return (
    <section className="page-wrapper">
      <div className="flex-card profile">
        <div>
          <img src={account.img ? account.img : avatar} alt={account.name} />
          <div className="review-block">
            <input
              className="btn"
              type="submit"
              value="Редактировать профиль"
              onClick={handlerClick}
            />
          </div>
        </div>

        <div className="card-content">
          <h1 className="text-lev2">{account.name}</h1>
          <div className="card-info">
            <div className="rating">
              <span>
                <img src={ratingStar} alt="rating" />
                {account.rating ? account.rating : 0}
              </span>
            </div>
          </div>
          <h4 className="text-lev3">Обо мне</h4>
          <div>{account.description}</div>
          <h4 className="text-lev3">Спецификация услуги</h4>
          <p>
            - Размер принимаемой собаки:
            {/* когда данные будут на бэке, тогда подтяну */}
            {/* <span className="text-italic">
              mini (до 3 кг), big (более 10 кг)
            </span> 
            .*/}
          </p>
          <p>
            - Есть другие животные:
            {/* когда данные будут на бэке, тогда подтяну */}
            {/* <span className="text-italic">да</span>. */}
          </p>
          <h4 className="text-lev3">Адрес</h4>
          <p>
            {account.locations} {account.address ? `,${account.address}` : ""}
          </p>
          <h4 className="text-lev3">Телефон</h4>
          <p>{account.phone}</p>

          <div class="review-block">{/* здесь будут отзывы */}</div>
        </div>
      </div>
    </section>
  );
};
