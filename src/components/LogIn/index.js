import React from 'react';
import { Card, FormGroup, TextField, FormControlLabel, Checkbox, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';


export const LogIn = () => {
    return (
        <>
            <Card sx={{ maxWidth: 400, p: 4, boxShadow: 2, mt: 4 }}>
                <Typography sx={{ fontWeight: 'medium' }}>ВХОД </Typography>
                <FormGroup>
                    <TextField id="standard-basic" label="Эл.почта" variant="outlined" sx={{ mt: 2 }} />
                    <TextField id="standard-basic" label="Пароль" variant="outlined" sx={{ mt: 2 }} />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Запомнить меня" sx={{ mt: 2 }} />
                    <Link to='/profile' style={{ textDecoration: 'none' }}><Button variant="contained">Войти </Button></Link>
                </FormGroup>
                <Link to='/signup' style={{ textDecoration: 'none' }}><Button sx={{ mt: 2 }}>Создать аккаунт</Button></Link>
            </Card>
        </>
    )
}