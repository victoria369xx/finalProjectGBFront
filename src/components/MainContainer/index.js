import classnames from 'classnames';
import styles from './main_container.module.css'
import { BottomNavigation, BottomNavigationAction, Container, Paper } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { Header } from '../Header';

// здесь основной контейнер с разметкой страницы: по порядку идут 
// Header, потом все остальное содержимое(оно будет указано в роутах и помещено 
// в Outlet) и footer
export const MainContainer = () => {

    // let classNameFooter = classnames(styles.footer)
    let containerStyle = classnames(styles.container_style)

    return (
        <Container className={containerStyle}>
            <Header />
            <Outlet />
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation showLabels>
                    <BottomNavigationAction label="2022 Pet Booking" />
                </BottomNavigation>
            </Paper>

        </Container>

    )
}