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
import { API_URL } from "../../store/storeConstants";
import { resetReviewsAction } from "../../store/reviews/actions";

export const Profile = () => {
  const { userId } = useParams();
  const authed = useSelector(getIsAuth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const profile = useSelector(selectProfile);
  const error = useSelector(selectProfileError);
  const loading = useSelector(selectProfileLoading);

  const baseURL = API_URL.slice(0, -6);

  useEffect(() => {
    dispatch(resetReviewsAction);
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
    return (
      <div
        className="page-wrapper container"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <h3>Упс, что-то пошло не так...</h3>
      </div>
    );
  }

  return (
    <section className="page-wrapper">
      <div className="flex-card-profile">
        <div className="profile-aside">
          {profile.img ? (
            <img
              src={
                profile.img.includes("storage/")
                  ? baseURL + profile.img
                  : profile.img
              }
              alt={profile.name}
            />
          ) : (
            <img src={avatar} alt={profile.name} />
          )}
        </div>
        <div className="profile-content">
          <h1 className="text-lev2">{profile.name}</h1>
          <div className="card-info">
            {profile.role === 2 && (
              <div className="rating">
                <span>
                  <svg
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {profile.numberReviews === 0 ? (
                      <path
                        d="M7.04897 0.926987C7.34897 0.00598657 8.65197 0.00598657 8.95097 0.926987L10.021 4.21899C10.0863 4.41948 10.2134 4.59417 10.384 4.71809C10.5547 4.84202 10.7601 4.90883 10.971 4.90899H14.433C15.402 4.90899 15.804 6.14899 15.021 6.71899L12.221 8.75299C12.05 8.87702 11.9227 9.052 11.8573 9.25284C11.7919 9.45368 11.7918 9.67007 11.857 9.87099L12.927 13.163C13.227 14.084 12.172 14.851 11.387 14.281L8.58697 12.247C8.41618 12.123 8.21053 12.0562 7.99947 12.0562C7.78842 12.0562 7.58277 12.123 7.41197 12.247L4.61197 14.281C3.82797 14.851 2.77397 14.084 3.07297 13.163L4.14297 9.87099C4.20815 9.67007 4.20803 9.45368 4.14264 9.25284C4.07725 9.052 3.94994 8.87702 3.77897 8.75299L0.979974 6.71999C0.196974 6.14999 0.599974 4.90999 1.56797 4.90999H5.02897C5.24002 4.91004 5.44568 4.84332 5.6165 4.71938C5.78732 4.59544 5.91455 4.42064 5.97997 4.21999L7.04997 0.927987L7.04897 0.926987Z"
                        fill="#94A3B8"
                      />
                    ) : (
                      <path
                        d="M7.04897 0.926987C7.34897 0.00598657 8.65197 0.00598657 8.95097 0.926987L10.021 4.21899C10.0863 4.41948 10.2134 4.59417 10.384 4.71809C10.5547 4.84202 10.7601 4.90883 10.971 4.90899H14.433C15.402 4.90899 15.804 6.14899 15.021 6.71899L12.221 8.75299C12.05 8.87702 11.9227 9.052 11.8573 9.25284C11.7919 9.45368 11.7918 9.67007 11.857 9.87099L12.927 13.163C13.227 14.084 12.172 14.851 11.387 14.281L8.58697 12.247C8.41618 12.123 8.21053 12.0562 7.99947 12.0562C7.78842 12.0562 7.58277 12.123 7.41197 12.247L4.61197 14.281C3.82797 14.851 2.77397 14.084 3.07297 13.163L4.14297 9.87099C4.20815 9.67007 4.20803 9.45368 4.14264 9.25284C4.07725 9.052 3.94994 8.87702 3.77897 8.75299L0.979974 6.71999C0.196974 6.14999 0.599974 4.90999 1.56797 4.90999H5.02897C5.24002 4.91004 5.44568 4.84332 5.6165 4.71938C5.78732 4.59544 5.91455 4.42064 5.97997 4.21999L7.04997 0.927987L7.04897 0.926987Z"
                        fill="#F0BD66"
                      />
                    )}
                  </svg>
                  {profile.rating}
                </span>
              </div>
            )}
          </div>
          <h4 className="text-lev3">Обо мне</h4>
          <div>{profile.description ? profile.description : "Не указано."}</div>
          {profile.role === 2 && (
            <>
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
            </>
          )}
          <h4 className="text-lev3">Адрес</h4>
          {profile.locations ? (
            <p>
              {profile.locations}
              {profile.address ? `, ${profile.address}` : ""}
            </p>
          ) : (
            <p>Не указан</p>
          )}
          <h4 className="text-lev3">Телефон</h4>
          <p>{profile.phone ? profile.phone : "Не указан"}</p>
        </div>
        <div className="profile-aside">
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
        <div className="profile-content">
          <Reviews></Reviews>
        </div>
      </div>
    </section>
  );
};
