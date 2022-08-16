

import React from 'react';
import { Card, FormGroup, TextField, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const SignUp = () => {
    return (
        <>
            <Card sx={{ maxWidth: 400, p: 4, boxShadow: 2, mt: 4 }}>
                <Typography sx={{ fontWeight: 'medium' }}>РЕГИСТРАЦИЯ</Typography>
                <FormGroup>
                    <TextField id="standard-basic" label="Эл. почта" variant="outlined" sx={{ mt: 2 }} />
                    <TextField id="standard-basic" label="Пароль" variant="outlined" sx={{ mt: 2 }} />
                    <TextField id="standard-basic" label="Подтвердить пароль" variant="outlined" sx={{ mt: 2 }} />
                    <Link to='/login' style={{ textDecoration: 'none' }}><Button variant="contained" sx={{ mt: 2 }}>СОЗДАТЬ АККАУНТ</Button></Link>
                </FormGroup>
                <Typography sx={{ mt: 2 }}> Уже есть аккаунт? <Link to='/login'> Войти </Link></Typography>
            </Card>
        </>
    )
}