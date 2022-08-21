import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { selectSearchResult, selectCities } from "../../store/search/selector";
import { useNavigate, useParams, Link } from "react-router-dom";
import { getSearchResult } from "../../store/search/actions";
import "./renderSearch_module.css";

export const RenderSearchResultsBlock = () => {
  const { cityId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const sitters = useSelector(selectSearchResult);
  const cities = useSelector(selectCities);
  // console.log(sitters);

  useEffect(() => {
    if (
      isNaN(Number(cityId)) ||
      !cities.find((el) => el.id == Number(cityId))
    ) {
      // если в get-parameters не число или id города, которого нет в cities, то редирект на 404
      navigate("*");
    } else if (!isNaN(Number(cityId)) && sitters.length === 0) {
      // если в поиск попали, вбив руками url
      dispatch(getSearchResult(cityId));
    }
  }, [cityId]);

  // если возвращается пустой массив результатов поиска
  if (sitters.length === 0) {
    return (
      <section className="page-wrapper">
        <h2 className="text-lev2 text-center">Нет догситтеров в этом городе</h2>
      </section>
    );
  }

  return (
    <section className="page-wrapper">
      <h2 className="text-lev2 text-center">Наши догситтеры</h2>
      <div className="grid-card">
        {sitters.map((sitter) => (
          <Link to={`/profile/${sitter.id}`} className="card" key={sitter.id}>
            <img src="https://picsum.photos/200/300" alt={sitter.name} />
            <div className="card-content">
              <h3 className="text-lev3">{sitter.name}</h3>
              <p>{sitter.info ? sitter.info : ""}</p>
              <span>
                <div className="address text-additional">{sitter.city}</div>
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
