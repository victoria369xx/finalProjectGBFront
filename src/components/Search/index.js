
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getCities, getSearchResult } from "../../store/search/actions";
import { selectCities } from "../../store/search/selector";

import "../../css/style.css"
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

  return (<section>
    <div className="container">
      <div className="home-content">
        <div className="home-page">
          <div className="home-title">
            <h1>Сервис поиска догситтеров</h1>
          </div>
          <div className="home-img">
            <div className="home-img">
              <img className="page-img" src={dog} alt="picture" />
            </div>
          </div>
        </div>
        <form className="index-form" onSubmit={handleSubmit}>
          <div class="header-btn-town">
            <label for="town">Город</label>
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
          </div>
          <div class="header-btn-date">
            <label for="date">Дата</label>
            <div>
              <input id="date" type="date"></input>

            </div>
          </div>
          <div class="header-btn-size">
            <label for="size">Размер</label>
            <select id="size">
              <option value="" disabled selected hidden>Введите размер</option>
              <option value="">Mini (до 3 кг)</option>
              <option value="">Small (3-5 кг)</option>
              <option value="">Medium (5-10 кг)</option>
              <option value="">Big (более 10 кг)</option>
            </select>
          </div>
          <input type="submit" className="search-btn" value="Найти" />
        </form>
      </div>
    </div>
  </section>
  );
}