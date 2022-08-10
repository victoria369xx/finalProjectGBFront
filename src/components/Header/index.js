
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import styles from './header.module.css'

let linkStyle = classnames(styles.link_style)


export const Header = () => {

    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }} >

                    {/* ______________ LOGO________________ */}
                    {/* Какой компонент из MUI нужен для картинки LOGO? Avatar не 
                    подгружает */}
                    <Box sx={{ display: "flex", justifyContent: "left", alignItems: 'center' }}>
                        <Avatar alt="R" src="../../../public/logo_transparent.png" />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                ml: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Pet Booking
                        </Typography>
                    </Box>


                    {/* В этом блоке предлагаю в зависимости от авторизации показывать
                            либо SignUp/SignIn, либо аватарку с ниспадающим меню, где будет
                            ссылка на профиль и возможность выйти из аккаунта */}

                    <Box sx={{ display: "flex", justifyContent: "right", alignItems: 'center' }}>
                        <Typography
                            variant="h10"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 1,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 200,
                                letterSpacing: '.01rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            SignUp/SignIn
                        </Typography>

                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>

                                    {/* _______________ Аватарка_______________ */}
                                    <Avatar alt="" src="" />

                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                <Box sx={{ display: "flex", flexDirection: "column", alignItems: 'start' }}>
                                    <MenuItem onClick={handleCloseUserMenu} sx={{ width: "100%" }}>
                                        <Link to="/profile" className={linkStyle}>Личный кабинет</Link>
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseUserMenu} sx={{ width: "100%" }}>
                                        <Link to="/" className={linkStyle}>Выйти</Link>
                                    </MenuItem>
                                </Box>
                            </Menu>
                        </Box>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

