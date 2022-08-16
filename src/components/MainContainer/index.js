import classnames from 'classnames';

import { BottomNavigation, BottomNavigationAction, Container, Paper } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { Header } from '../Header';
import { Search } from '../Search';

// здесь основной контейнер с разметкой страницы: по порядку идут 
// Header, Search потом все остальное содержимое(оно будет указано в роутах и помещено 
// в Outlet) и footer
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