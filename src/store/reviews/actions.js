export const ADD_REVIEW = "ADD_REVIEW";

export const addReview = (userId, newReview) => ({
    type: "ADD_REVIEW",
    payload: {
        userId,
        newReview
    }
});

export const addReviewThunk = (userId, newReview) => (dispatch) => {
    dispatch(addReview(userId, newReview))
}
