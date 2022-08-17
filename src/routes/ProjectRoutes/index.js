
import React, {useEffect} from 'react';
import { Routes, Route } from 'react-router-dom'
import { LogInPage, SignUpPage, HomePage, ProfilePage, AccountPage, NotFound } from '../../pages';
import { ProtectedRoute } from '../ProtectedRoute';
import {useDispatch,useSelector} from 'react-redux';
import {initAuthAction} from '../../store/userAuth/actions';
import { getIsAuth } from '../../store/userAuth/selectors';


export const ProjectRoutes = () => {
    const dispatch = useDispatch();
    const authState = useSelector(getIsAuth);
    
    useEffect(()=>{
        dispatch(initAuthAction)
    })
    
    return (
        <Routes>
            <Route path='/' element={<HomePage/>}>
            <Route path='/login' element={<LogInPage/>}/>
            <Route path='/signup' element={<SignUpPage/>}/>
            <Route exact path={'/profile'} element={<ProfilePage />} />
            <Route element={<ProtectedRoute authed={authState}/>}>
                <Route path='/account' element={<AccountPage/>}/>
            </Route> 
            </Route>
                <Route path={'*'} element={<NotFound />} />

        </Routes>

    )
}