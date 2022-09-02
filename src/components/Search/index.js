import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getCities } from "../../store/search/actions";
import {
  selectCities,
  selectCitiesError,
  selectCitiesLoading,
} from "../../store/search/selector";
import "./search.css";
import dog from "../../assets/images/home-dog.svg";
import { CircularProgress } from "@mui/material";

export const Search = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { cityId } = useParams();
  const selectedCity = cityId ? cityId : "";
  const [city, setCity] = useState(selectedCity);

  const cities = useSelector(selectCities);
  const loading = useSelector(selectCitiesLoading);
  const error = useSelector(selectCitiesError);

  const handlerChange = (event) => {
    setCity(event.target.value);
  };

  const handlerSubmit = (event) => {
    event.preventDefault();
    navigate(`/search/${city}`);
  };

  useEffect(() => {
    dispatch(getCities());
  }, [cityId]);

  if (!cities || error) {
    return <h3>Проблемы со списком городов на сервере</h3>;
  }

  return (
    <div className="home-content container">
      <div className="home-page">
        <div className="home-title">
          <h1>Сервис поиска догситтеров</h1>
          {!!loading ? (
            <CircularProgress />
          ) : (
            <form className="title-btn" onSubmit={handlerSubmit}>
              <select
                className="left-side-btn"
                name={city}
                id={city}
                onChange={handlerChange}
                defaultValue={
                  cities.find((el) => el.id === Number(cityId))
                    ? city
                    : "Выберите город"
                }
              >
                <option value="Выберите город" disabled hidden>
                  Выберите город
                </option>
                {cities.map((city) => (
                  <option key={city.id} value={city.id}>
                    {city.city}
                  </option>
                ))}
              </select>
              <input type="submit" className="right-side-btn" value="Найти" />
            </form>
          )}
        </div>
        <div className="home-img">
          <img className="page-img" src={dog} alt="dog" />
        </div>
      </div>
    </div>
  );
};
