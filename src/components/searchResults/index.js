import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  selectSearchResult,
  selectSearchResultLoading,
  selectSearchError,
} from "../../store/search/selector";
import { useNavigate, useParams, Link } from "react-router-dom";
import { getSearchResult } from "../../store/search/actions";
import { CircularProgress } from "@mui/material";
import avatar from "../../assets/images/avatar.jpg";
import { API_URL } from "../../store/storeConstants";

export const RenderSearchResultsBlock = () => {
  // const { cityId } = useParams();
  const params = useParams();
  const cityId = params.cityId;
  const pet_size = params.pet_size;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const sitters = useSelector(selectSearchResult);
  const loading = useSelector(selectSearchResultLoading);
  const error = useSelector(selectSearchError);

  const baseURL = API_URL.slice(0, -6);

  useEffect(() => {
    dispatch(getSearchResult(cityId, pet_size));
  }, [cityId, pet_size]);

  if (isNaN(Number(cityId)) || (pet_size && isNaN(Number(pet_size)))) {
    navigate("*");
  }

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

  if (sitters.length === 0) {
    return (
      <section className="page-wrapper">
        <h2 className="text-lev2 text-center">Нет догситтеров в этом городе</h2>
      </section>
    );
  }

  if (!sitters || error) {
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
    <section className="page-wrapper search-wrapper">
      <h2 className="text-center text-lev2">Наши догситтеры</h2>
      <div className="flex-card">
        {sitters.map((sitter) => (
          <Link to={`/profile/${sitter.id}`} className="card" key={sitter.id}>
            {sitter.img ? (
              <img
                src={
                  sitter.img.includes("storage/")
                    ? baseURL + sitter.img
                    : sitter.img
                }
                alt={sitter.name}
              />
            ) : (
              <img src={avatar} alt={sitter.name} />
            )}
            <div className="card-content">
              <h3 className="text-lev3">{sitter.name}</h3>
              <p>{sitter.description ? sitter.description : ""}</p>
              <span>
                <div className="address text-additional">
                  {sitter.locations}
                </div>
                <div className="address text-additional">{sitter.address}</div>
              </span>
            </div>
            <div className="card-info">
              <div className="rating">
                <span>
                  {/* <img src={ratingStar} alt="" />
                  {sitter.rating} */}
                </span>
                <span>
                  <svg
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {sitter.numberReviews === 0 ? (
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
                  {sitter.rating}
                </span>
              </div>
              <div className="price">{sitter.price ? sitter.price : ""}</div>
              {/* <button className="btn">{sitter.phone}</button> */}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
