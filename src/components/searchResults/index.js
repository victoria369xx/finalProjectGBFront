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
import ratingStar from "../../img/star.svg";
import avatar from "../../assets/images/avatar.jpg";

export const RenderSearchResultsBlock = () => {
  const { cityId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const sitters = useSelector(selectSearchResult);
  const loading = useSelector(selectSearchResultLoading);
  const error = useSelector(selectSearchError);

  useEffect(() => {
    dispatch(getSearchResult(cityId));
  }, [cityId]);

  if (isNaN(Number(cityId))) {
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
    return <h2 className>Проблемы со списком ситтеров на сервере</h2>;
  }

  return (
    <section className="page-wrapper">
      <h2 className="text-center">Наши догситтеры</h2>
      <div className="flex-card">
        {sitters.map((sitter) => (
          <Link to={`/profile/${sitter.id}`} className="card" key={sitter.id}>
            <img src={sitter.img ? sitter.img : avatar} alt={sitter.name} />
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
                  <img src={ratingStar} alt="" />
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
