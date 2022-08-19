import React, {useState} from 'react';
import {Card,FormGroup, TextField, Button, Typography} from '@mui/material';
import {Link, useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signUpUserThunk } from '../../store/userAuth/actions';


export const SignUp = () => {
    
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 
    const dispatch = useDispatch(); 
    const navigate = useNavigate();

    function emailSubmitHandler (event) {
        setEmail(event.target.value)
    }

    function passwordSubmitHandler (event) {
        setPassword(event.target.value)
    }

    function clearForm () {
        setEmail("");
        setPassword("");
    }

   async function signUpHandler (event) {
        event.preventDefault();
       await dispatch(signUpUserThunk(email,password));
        navigate('/account/1');
        clearForm();
    }

    return (
        <>
        <Card sx={{ maxWidth: 400, p: 4, boxShadow: 2, mt:4 }}>
        <Typography sx={{fontWeight: 'medium'}}>РЕГИСТРАЦИЯ</Typography>
        <form onSubmit={signUpHandler}>
        <FormGroup>
        <TextField id="standard-basic" label="Эл. почта" variant="outlined" sx={{mt:2}} onChange={emailSubmitHandler} required/>
        <TextField id="standard-basic" label="Пароль" variant="outlined" sx={{mt:2}} onChange={passwordSubmitHandler} required/>
        <Button type='submit' variant="contained" sx={{mt:2}}>СОЗДАТЬ АККАУНТ</Button>
        </FormGroup>
        </form>
        <Typography sx={{mt:2}}> Уже есть аккаунт? <Link to='/login'> Войти </Link></Typography>
        </Card>
        </>
    )
}
