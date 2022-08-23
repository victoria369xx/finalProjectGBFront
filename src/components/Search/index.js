
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getCities, getSearchResult } from "../../store/search/actions";
import { selectCities } from "../../store/search/selector";
import "./search.css";
import dog from "../../assets/images/home-dog.svg";

export const Search = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { cityId } = useParams();
  const selectedCity = cityId ? cityId : "";
  const [city, setCity] = useState(selectedCity);

  const cities = useSelector(selectCities);

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getSearchResult(city));
    navigate(`/search/${city}`);
  };

  useEffect(() => {
    dispatch(getCities());
  }, [cityId]);

  return (
    <div className="home-content container">
      <div className="home-page">
        <div className="home-title">
          <h1>Сервис поиска догситтеров</h1>
          <form className="title-btn" onSubmit={handleSubmit}>
            <select
              className="left-side-btn"
              name={city}
              id={city}
              onChange={handleChange}
            >
              <option value="Выберите город" selected disabled hidden>
                Выберите город
              </option>
              {cities.map((city) => (
                <option
                  key={city.id}
                  value={city.id}
                  selected={city.id == cityId}
                >
                  {city.city}
                </option>
              ))}
            </select>
            <input type="submit" className="right-side-btn" value="Найти" />
          </form>
        </div>
        <div className="home-img">
          <img className="page-img" src={dog} alt="picture" />
        </div>
      </div>
    </div>
  );
}