import { SIGNUP_USER, LOGIN_USER, LOGOUT_USER} from "./actions"

const initialState = {
    user: null
}

export const userAuthReducer = (state = initialState, action)=> {
    switch(action.type){
        case(SIGNUP_USER): {
            return {
                user:action.payload
            }
        }
        case(LOGIN_USER): {
            return {
                user:action.payload
            }
        }

        case(LOGOUT_USER): {
            return {
                user: null
            }
        }

        default : {
            return state
        }
    }
}