
import React, {useState} from 'react';
import { Box, Button, Grid, MenuItem, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getCities, getSearchResult } from "../../store/search/actions";
import { selectCities } from "../../store/search/selector";
import { Link } from "react-router-dom"
import { getCityArrFromDB } from "../../helpers/getData"

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
    navigate(`/search/${city}`);
  };

  useEffect(() => {
    dispatch(getCities());
    if (cityId) {
      dispatch(getSearchResult(cityId));
    }
  }, [cityId]);

  return (
    <Grid item xs={12} md={12}>
      <Box
        component="form"
        sx={{
          display: "flex",
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          id="filled-select-currency"
          select
          label="Выберите город"
          value={city}
          onChange={handleChange}
          variant="filled"
        >
          {/* ___________ Исправить, когда появится Api ____________*/}

          {cities.map((city) => (
            <MenuItem key={city.id} value={city.id}>
              {city.city}
            </MenuItem>
          ))}
        </TextField>

        <Button id="search-btn" type="submit" variant="outlined">
          Поиск
        </Button>
      </Box>
    </Grid>
  );
};


export const Search = () => {

    const cities = getCityArrFromDB()
    console.log(cities)

    const [cityName, setCityName] = useState('Москва')

    const handleChange = (event) => {
        const elTarget = event.target.value
        setCityName(elTarget)
    }
    let currencyCity = {}
    cities.filter(el => {
        if (el.city == cityName) { currencyCity = el }

    })

    const path = `/search/${currencyCity.id}`

    return (

        <Grid item xs={12} md={12}>
            <Box
                component="form"
                sx={{
                    display: "flex",
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >

                <TextField
                    id="filled-select-currency"
                    select
                    label="Выберите город"
                    value={cityName}
                    onChange={handleChange}
                    variant="filled"

                >
                    {/* ___________ Исправить, когда появится Api ____________*/}

                    {cities.map((city) => (
                        <MenuItem key={city.id} value={city.city}>
                            {city.city}
                        </MenuItem>
                    ))}
                </TextField>


                <Button id="search-btn" type="submit" variant="outlined" onClick={getSearchResult(currencyCity.id)}>
                    <Link to={path} style={{ textDecoration: 'none' }}>Поиск </Link></Button>

            </Box>
        </Grid >

    )
}

