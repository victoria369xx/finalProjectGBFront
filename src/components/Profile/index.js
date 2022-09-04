import { Box, CircularProgress } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, Link } from "react-router-dom";
import { getProfileFromDB } from "../../store/profile/actions";
import {
  selectProfile,
  selectProfileError,
  selectProfileLoading,
} from "../../store/profile/selector";
import Reviews from "../Reviews";
import { ReviewForm } from "../ReviewForm";
import { getIsAuth } from "../../store/userAuth/selectors";
import avatar from "../../assets/images/avatar.jpg";
import ratingStar from "../../img/star.svg";

export const Profile = () => {
  const { userId } = useParams();
  const authed = useSelector(getIsAuth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const profile = useSelector(selectProfile);
  const error = useSelector(selectProfileError);
  const loading = useSelector(selectProfileLoading);

  useEffect(() => {
    if (isNaN(Number(userId))) {
      navigate("*");
    } else {
      dispatch(getProfileFromDB(Number(userId)));
    }
  }, [userId]);

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

  if (!profile || error) {
    return <h3>Нет такого ситтера</h3>;
  }

  return (
    <section className="page-wrapper">
      <div className="flex-card profile">
        <div>
          <img src={profile.img ? profile.img : avatar} alt={profile.name} />
          {/* тут в верстке у ребят форма отзыва */}
          <div className="review-block">
            <div className="text-lev2 text-center">Оставьте свой отзыв</div>
            {authed ? (
              <ReviewForm />
            ) : (
              <Box style={{ width: "400px" }}>
                Войдите или зарегистрируйтесь,чтобы оставить отзыв.{" "}
                <Link
                  to="/login"
                  target="_blank"
                  style={{ textDecoration: "none", color: "orange" }}
                >
                  {" "}
                  Войти{" "}
                </Link>
              </Box>
            )}
          </div>
        </div>
        <div className="card-content">
          <h1 className="text-lev2">{profile.name}</h1>
          <div className="card-info">
            <div className="rating">
              <span>
                <img src={ratingStar} alt="rating" />
                {profile.rating}
              </span>
            </div>
          </div>
          <h4 className="text-lev3">Обо мне</h4>
          <div>{profile.description ? profile.description : "Не указано."}</div>
          <h4 className="text-lev3">Спецификация услуги</h4>
          <p>
            - Размер принимаемой собаки:{" "}
            <span className="text-italic">
              {profile.petSize && profile.petSize.length !== 0
                ? profile.petSize
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
              {profile.otherAnimals === 0 ? "нет" : "да"}
            </span>
            .
          </p>
          <h4 className="text-lev3">Адрес</h4>
          {profile.location && profile.address ? (
            <p>
              {profile.locations} {profile.address ? `,${profile.address}` : ""}
            </p>
          ) : (
            <p>Не указан</p>
          )}
          <h4 className="text-lev3">Телефон</h4>
          <p>{profile.phone ? profile.phone : "Не указан"}</p>

          <Reviews></Reviews>
        </div>
      </div>
    </section>
  );
};
