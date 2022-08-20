import { Box, Button, Grid, MenuItem, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getCities, getSearchResult } from "../../store/search/actions";
import { selectCities } from "../../store/search/selector";

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
