
import * as React from 'react';
import {AppBar, Box, Toolbar,Button, Container} from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo_transparent.png'


export const Header = () => {

    return (
        <AppBar position="static" sx={{backgroundColor: 'white', p:2 }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between'}} >
                   <Box> <img src={logo} alt="logo"/></Box>
                    <Box sx={{ display: "flex", justifyContent: "right", alignItems: 'center' }}>

                       <Link to="/login" style={{textDecoration: 'none'}}><Button>Войти</Button></Link>
                       <Link to="/" style={{textDecoration: 'none'}}><Button>Выйти</Button></Link>

                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

