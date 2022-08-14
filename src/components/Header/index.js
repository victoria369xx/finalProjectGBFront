
import * as React from 'react';
import {AppBar, Box, Toolbar,Button, Container} from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo_transparent.png';
import { useDispatch, useSelector} from 'react-redux';
import { logOutUserThunk} from '../../store/userAuth/actions';
import { getIsAuth } from '../../store/userAuth/selectors';


export const Header = () => {
    const dispatch = useDispatch();
    function logOutHandler () {
        dispatch(logOutUserThunk)
      }
      const authed = useSelector(getIsAuth)

    return (
        <AppBar position="static" sx={{backgroundColor: 'white', p:2 }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between'}} >
                   <Box> <img src={logo} alt="logo"/></Box>
                    <Box sx={{ display: "flex", justifyContent: "right", alignItems: 'center' }}>
                        {
                            authed ? <Link to="/" style={{textDecoration: 'none'}}><Button onClick={logOutHandler}>Выйти</Button></Link>: <Link to="/login" style={{textDecoration: 'none'}} ><Button>Войти</Button></Link>
                        }
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

