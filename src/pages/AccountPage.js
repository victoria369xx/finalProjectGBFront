import React from "react";
import {useSelector} from 'react-redux';
import { getUser } from "../store/userAuth/selectors";



export const AccountPage = () => {
    const user = useSelector(getUser);
    return <>
    <h1>Личный кабинет</h1>
    <p>{user.email}</p>
    </>
}