import { ADD_REVIEW } from "./actions";

const initialState = {
    reviewList: {}
}

export const reviewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case(ADD_REVIEW): {
            const {userId, newReview} = action.payload;
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

        default: {
            return state;
        }
    }
}