
import React, {useEffect} from 'react';
import { Routes, Route } from 'react-router-dom'
import { LogInPage } from '../../pages/LogInPage';
import {SignUpPage} from '../../pages/SignUpPage';
import { HomePage } from '../../pages/HomePage';
import { ProfilePage } from '../../pages/ProfilePage';
import { NotFound } from '../../pages/NotFound';
import { PrivateRoute } from '../PrivateRoute';
import {useSelector, useDispatch} from 'react-redux';
import {getIsAuth} from '../../store/userAuth/selectors';
import {initAuthAction} from '../../store/userAuth/actions';


export const ProjectRoutes = () => {
    const authStatus = useSelector(getIsAuth);
    const dispatch = useDispatch();
    useEffect(()=> {
      dispatch(initAuthAction);
    }, [dispatch]);
    
    return (
        <Routes>
            <Route path='/' element={<HomePage/>}>
            <Route path='/login' element={<LogInPage/>}/>
            <Route path='/signup' element={<SignUpPage/>}/>
           
                <Route element={<PrivateRoute authed={authStatus}/>}>
                <Route exact path={"profile"} element={<ProfilePage />} />
                </Route>
                <Route path={"*"} element={<NotFound />} />

            </Route>
        </Routes>

    )
}