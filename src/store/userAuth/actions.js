import {auth} from '../../firebase/index';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth';

const signUpUrl = 'http://localhost/api/v1/register';
//const logInUrl = 'http://localhost/api/v1/login'; 

export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER"; 

export const logInUser = (user) => ({
    type: LOGIN_USER,
    payload: user
});

export const logOutUser = () => ({
    type: LOGOUT_USER,
});

export const signUpUserThunk = (name,email, password, confirmation) => async () => {
 fetch(signUpUrl, {
    method: 'POST',
    headers: {
        'Content-Type':'application/json'
    },
    body: JSON.stringify({
        "name": name,
        "email": email,
        "password": password,
        "password_confirmation": confirmation
    })
 }).then(data=> console.log(data))
   /* try {
    await createUserWithEmailAndPassword(auth, name, email, password)
   }
   catch (e) {
    console.log(e)
}*/
}

export const logInUserThunk = (email, password) => async () => {
    /*sendRequest('POST', logInUrl, {
        email: email,
        password:password,
        })
        .then(data=> console.log(data))
        .catch(err=> console.log(err)) 
    */
    try {
        await signInWithEmailAndPassword(auth,email,password);
    } catch (e) {
        console.log(e)
    }
}

export const logOutUserThunk = async () => {
    await signOut(auth)
}


export const initAuthAction = (dispatch) => {
     onAuthStateChanged(auth,(user)=> {
        if (user){
            dispatch(logInUser(user))
        } else {
            dispatch(logOutUser())
        }
    })
};