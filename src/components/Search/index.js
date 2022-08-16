
import * as React from 'react';
import { Box, Button, Grid, MenuItem, TextField } from "@mui/material"
import { Link } from "react-router-dom"
import { getCityArrFromDB } from "../../helpers/getData"
import { useState } from "react"
import { getSearchResult } from "../../store/search/actions"


export const Search = () => {

    const cities = getCityArrFromDB()
    console.log(cities)
    const [currencyCity, setCurrencyCity] = useState({});

    const handleChange = (event) => {
        const elTarget = event.target.value
        console.log(`elTarget: ${elTarget.id}`)
        setCurrencyCity(elTarget)
        console.log(currencyCity)
    }
    // React.useEffect(() => {
    //     handleChange()

    // }, [currencyCity])


    const path = `/search/${currencyCity.id}`
    console.log(currencyCity.id)
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
                    value={currencyCity.city}
                    onChange={handleChange}
                    variant="filled"

                >
                    {/* ___________ Исправить, когда появится Api ____________*/}

                    {cities.map((city) => (
                        <MenuItem key={city.id} value={city}>
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
