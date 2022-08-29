import { GET_REVIEWS, ERR_REVIEWS } from "./actionTypes";


const baseURL = "http://l7933yx2.beget.tech/api/v1";

const getReviews = (reviews) => ({
    type: GET_REVIEWS,
    payload: reviews,
})

const errReviews = (error) => ({
    type: ERR_REVIEWS,
    payload: error,
})

export const getReviewsFromDB = (id) => async (dispatch) => {
    try {
        fetch(baseURL + `/reviews/${id}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            },
        }).then((response) => response.json()
        ).then((data) => {
            const result = data.data.reviews
            console.log(result)
            dispatch(getReviews(result))
        })

    } catch (e) {
        console.log(e.message)
        dispatch(errReviews(e.message))
    }
};