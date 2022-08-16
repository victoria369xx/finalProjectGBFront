import { RenderSearchResultsBlock } from "../../components/searchResults";
import { SET_SEARCH_ERROR, SET_SEARCH_RESULT } from "./actionTypes";
// import { useDispatch } from "react-redux"

// const dispatch = useDispatch()

// const baseURL = 'http://localhost:3030'

const setSearchResult = (searchResult) => ({
    type: SET_SEARCH_RESULT,
    payload: searchResult,
});

const setSearchError = (error) => ({
    type: SET_SEARCH_ERROR,
    payload: error,
});

const dogSitter = [{
    id: 1,
    name: "Наталья",
    email: "example@example.ru",
    phone: "+79201234567",
    city: "Санкт-Петербург",
    adress: "ул. Центральная, д. 37"
}]


export const getSearchResult = (id) => async (dispatch) => {

    try {
        // fetch(baseURL + `/${id}`, {
        //     method: 'GET',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // })
        //     .then(responce => responce.json())
        //     .then(() => {
        //         console.log(result)
        //         dispatch(setSearchResult(result))
        //     })
        //     .then(renderSearchResultsBlock(result))

        dispatch(setSearchResult(dogSitter[0]));
        RenderSearchResultsBlock(dogSitter[0])

    } catch (error) {
        console.log(error.message);
        dispatch(setSearchError(error.message));
    }

};