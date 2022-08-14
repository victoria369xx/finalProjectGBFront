
import { Routes, Route } from 'react-router-dom'
import { Page404 } from '../Page404'
import { LogInPage } from '../../pages/LogInPage';
import {SignUpPage} from '../../pages/SignUpPage';
import { HomePage } from '../../pages/HomePage';
import { ProfilePage } from '../../pages/ProfilePage';
import { PrivateRoute } from '../PrivateRoute';



export const ProjectRoutes = () => {
const authStatus = false
    return (
        <Routes>
            <Route path='/' element={<HomePage/>}>
            <Route path='/login' element={<LogInPage/>}/>
            <Route path='/signup' element={<SignUpPage/>}/>
                <Route element={<PrivateRoute authed={authStatus}/>}>
                <Route exact path={"profile"} element={<ProfilePage />} />
                </Route>
                <Route path={"*"} element={<Page404 />} />

            </Route>
        </Routes>

    )
}