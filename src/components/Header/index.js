
import * as React from 'react';
import {AppBar, Box, Toolbar,Button, Container} from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo_transparent.png';
import { useDispatch, useSelector} from 'react-redux';
import { logOutUserAction} from '../../store/userAuth/actions';
import { getIsAuth } from '../../store/userAuth/selectors';

export const Header = () => {
    const dispatch = useDispatch();
    function logOutHandler () {
        dispatch(logOutUserAction)
      }
      const authed = useSelector(getIsAuth)

    return (
        <AppBar position="static" sx={{backgroundColor: 'white', p:2, boxShadow:0 }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between'}} >

                   <Box><Link style={{textDecoration:'none'}} to='/'><img src={logo} alt="logo"/></Link></Box>
                    <Box sx={{ display: "flex", justifyContent: "right", alignItems: 'center' }}>
                        {
                            authed ? <Link to="/" style={{textDecoration: 'none'}}><Button color='warning' onClick={logOutHandler}>Выйти</Button></Link>: <Link to="/login" style={{textDecoration: 'none'}} ><Button color='warning'>Войти</Button></Link>
                        }
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

