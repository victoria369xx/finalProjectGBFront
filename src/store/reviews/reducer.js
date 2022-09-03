
import { GET_REVIEWS, ERR_REVIEWS} from "./actionTypes";

const initialState = {
    reviews: [],
    error: null,
}

export const reviewsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_REVIEWS: {
            return {
                ...state,
                error: null,
                reviews: payload
            }
        }
        case ERR_REVIEWS: {
            return {
                ...state,
                error: payload
            }
        }
        default:
            return state;
    }
}