import {auth} from '../../firebase/index';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth';


export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";

export const logInUser = (user) => ({
    type: LOGIN_USER,
    payload: user
});

export const logOutUser = () => ({
    type: LOGOUT_USER,
});

export const signUpUserThunk = (email, password) => async () => {
   try {
    await createUserWithEmailAndPassword(auth, email, password)
   }
   catch (e) {
    console.log(e)
}
}

export const logInUserThunk = (email, password) => async () => {
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