import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  selectSearchResult,
  selectSearchResultLoading,
  selectSearchError,
} from "../../store/search/selector";
import { useNavigate, useParams, Link } from "react-router-dom";
import { getSearchResult } from "../../store/search/actions";
import "./renderSearch_module.css";
import { CircularProgress } from "@mui/material";

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
      <section className="page-wrapper">
        <CircularProgress />
      </section>
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
    return <h3>Проблемы со списком ситтеров на сервере</h3>;
  }

  return (
    <section className="page-wrapper">
      <h2 className="text-lev2 text-center">Наши догситтеры</h2>
      <div className="grid-card">
        {sitters.map((sitter) => (
          <Link to={`/profile/${sitter.id}`} className="card" key={sitter.id}>
            <img src={sitter.img} alt={sitter.name} />
            <div className="card-content">
              <h3 className="text-lev3">{sitter.name}</h3>
              <p>{sitter.description ? sitter.description : ""}</p>
              <span>
                <div className="address text-additional">
                  {sitter.locations}
                </div>
                <div className="address text-additional">{sitter.adress}</div>
              </span>
            </div>
            <div className="card-info">
              <div className="price">{sitter.price ? sitter.price : ""}</div>
              <button className="btn">{sitter.phone}</button>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
