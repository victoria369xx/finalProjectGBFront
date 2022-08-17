import classnames from 'classnames';

import { BottomNavigation, BottomNavigationAction, Container, Paper } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { Header } from '../Header';
import { Search } from '../Search';

export const MainContainer = () => {

    return (
        <Container>
            <Header />
            <Search />
            <Outlet />
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation showLabels>
                    <BottomNavigationAction label="2022 Pet Booking" />
                </BottomNavigation>
            </Paper>

        </Container>

    )
}