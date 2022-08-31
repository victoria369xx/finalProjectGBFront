
import { GET_REVIEWS, ERR_REVIEWS, ADD_REVIEW } from "./actionTypes";

const initialState = {
    reviewList: {},
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
        case ADD_REVIEW: {
            const {userId, newReview} = payload;
            return {
            reviewList: {
                    ...state.reviewList,
                    [userId] : [
                        ...(state.reviewList[userId] || []),
                        newReview
                    ]
            }
            }
        }
        default:
            return state;
    }
}