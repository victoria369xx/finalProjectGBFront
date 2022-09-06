import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getCities } from "../../store/search/actions";
import {
  selectCities,
  selectCitiesError,
  selectCitiesLoading,
} from "../../store/search/selector";
import dog4 from "../../assets/images/dog4.png"
import { Autocomplete } from "@mui/material";

export const Search = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { cityId } = useParams();

  const citiesFromDB = useSelector(selectCities);
  const loading = useSelector(selectCitiesLoading);
  const error = useSelector(selectCitiesError);

  const cities = {
    options: citiesFromDB,
    getOptionLabel: (option) => option.city,
  };
  const [city, setCity] = useState(cityId ? cityId : 0);
  const [cityInput, setCityInput] = useState(
    cityId ? citiesFromDB.find((el) => el.id === Number(cityId).city) : ""
  );

  const handlerChangeCity = (event, newValue) => {
    setCity(newValue ? newValue.id : "");
  };
  const handlerOnInputChangeCity = (event, newInputValue) => {
    setCityInput(newInputValue);
  };

  const handlerSubmit = (event) => {
    event.preventDefault();
    navigate(`/search/${city}`);
  };

  useEffect(() => {
    dispatch(getCities());
  }, [cityId]);

  if (!citiesFromDB || error) {
    return <h3>Проблемы со списком городов на сервере</h3>;
  }

  return (
    <section>
      <div className="container">
        <div className="home-content">
          <div className="home-page">
            <div className="home-title">

              <h1 className="home-title__brand">Pet Booking</h1> 
              <h2>Позаботимся о вашем питомце в ваше отсутствие! ❤️</h2>
            </div>
            <div className="home-img">
              <img src={dog4} alt="dog" />

            </div>
          </div>
          <form className="index-form" onSubmit={handlerSubmit}>
            <div className="text-field datalist">
              <label
                className="text-field__label text-caps text-center"
                htmlFor="city"
              >
                Город
              </label>
              <Autocomplete
                {...cities}
                value={cities.options.find((el) => el.id === Number(cityId))}
                onChange={handlerChangeCity}
                inputValue={cityInput}
                onInputChange={handlerOnInputChangeCity}
                id="city"
                loading={loading}
                renderInput={(params) => (
                  <div ref={params.InputProps.ref}>
                    <input
                      type="text"
                      {...params.inputProps}
                      required
                      placeholder="Выберите город"
                      className="text-field__input datalist"
                    />
                  </div>
                )}
              />
            </div>
          

            <div className="text-field">
              <label
                className="text-field__label text-caps text-center"
                htmlFor="size"
              >
                Размер
              </label>
              <select
                className="text-field__select"
                id="size"
                defaultValue={""}
              >
                <option value="" disabled hidden>
                  Введите размер
                </option>
                <option value="">Mini (до 3 кг)</option>
                <option value="">Small (3-5 кг)</option>
                <option value="">Medium (5-10 кг)</option>
                <option value="">Big (более 10 кг)</option>
              </select>
            </div>
            <input type="submit" className="btn" value="НАЙТИ" />
          </form>
        </div>
      </div>
    </section>
  );
};
