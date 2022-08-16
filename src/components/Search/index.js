import { Box, Button, Grid, MenuItem, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { getCityArrFromDB } from "../../helpers/getData";
import { getSearchResult } from "../../store/search/actions";
import { useInput } from "../../utils/useInput";

export const Search = () => {
  const cities = getCityArrFromDB();

  const { value: cityId, handleChange: changeId, reset: resetId } = useInput(1);

  const handleSubmit = (event) => {
    getSearchResult(cityId);
  };

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
          //   value={cityId}
          onChange={changeId}
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
          <Link to={`search/${cityId}`} style={{ textDecoration: "none" }}>
            Поиск{" "}
          </Link>
        </Button>
      </Box>
    </Grid>
  );
};
