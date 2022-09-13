import { CircularProgress } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { getAccountFromDB } from "../../store/account/actions";
import {
  selectAccount,
  selectAccountError,
  selectAccountLoading,
} from "../../store/account/selector";
import { getToken } from "../../store/userAuth/selectors";
import avatar from "../../assets/images/avatar.jpg";
import ratingStar from "../../img/star.svg";
import { API_URL } from "../../store/storeConstants";

export const Account = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const account = useSelector(selectAccount);
  const error = useSelector(selectAccountError);
  const token = useSelector(getToken);
  const loading = useSelector(selectAccountLoading);

  const baseURL = API_URL.slice(0, -6);

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
      <div
        className="page-wrapper container"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <h3>Упс, что-то пошло не так...</h3>
      </div>
    );
  }

  const handlerClick = () => {
    navigate(`/accountEdit`);
  };

  return (
    <section className="page-wrapper">
      <div className="flex-card-profile">
        <div className="profile-aside">
          {account.img ? (
            <img src={baseURL + account.img} alt={account.name} />
          ) : (
            <img src={avatar} alt={account.name} />
          )}
          <div className="review-block">
            <input
              className="btn"
              type="submit"
              value="Редактировать профиль"
              onClick={handlerClick}
            />
          </div>
        </div>

        <div className="profile-content">
          <h1 className="text-lev2">{account.name}</h1>
          <div className="card-info">
            {account.role === 2 && (
              <div className="rating">
                <span>
                  <img src={ratingStar} alt="rating" />
                  {account.rating ? account.rating : 0}
                </span>
              </div>
            )}
          </div>
          <h4 className="text-lev3">Обо мне</h4>
          <div>{account.description ? account.description : "Не указано."}</div>
          {account.role === 2 && (
            <>
              <h4 className="text-lev3">Спецификация услуги</h4>
              <p>
                - Размер принимаемой собаки:{" "}
                <span className="text-italic">
                  {account.petSize && account.petSize.length !== 0
                    ? account.petSize
                        .map((el) => {
                          if (el === "mini") {
                            return "mini (до 3 кг)";
                          } else if (el === "small") {
                            return "small (3-5 кг)";
                          } else if (el === "medium") {
                            return "medium (5-10 кг)";
                          } else if (el === "big") {
                            return "big (более 10 кг)";
                          }
                          return "";
                        })
                        .join(", ")
                    : "не указано"}
                </span>
                .
              </p>
              <p>
                - Есть другие животные:{" "}
                <span className="text-italic">
                  {account.otherAnimals === 0 ? "нет" : "да"}
                </span>
                .
              </p>
            </>
          )}
          <h4 className="text-lev3">Адрес</h4>
          {account.locations ? (
            <p>
              {account.locations}
              {account.address ? `, ${account.address}` : ""}
            </p>
          ) : (
            <p>Не указан</p>
          )}

          <h4 className="text-lev3">Телефон</h4>
          <p>{account.phone ? account.phone : "Не указан"}</p>

          <div style={{ marginTop: "14px" }}>
            <Link
              to={`/profile/${account.id}`}
              style={{
                textDecoration: "none",
                color: "orange",
              }}
            >
              Как выглядит мой профиль на сайте
            </Link>
          </div>

          <div className="review-block">{/* здесь будут отзывы */}</div>
        </div>
      </div>
    </section>
  );
};
