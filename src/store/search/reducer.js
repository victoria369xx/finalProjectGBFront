import { SET_SEARCH_ERROR, SET_SEARCH_RESULT } from './actionTypes'
const initialState = {
    searchResult: {},
    error: null,
};

export const searchResultReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_SEARCH_RESULT: {
            return {
                ...state,
                searchResult: payload,
            };
        }
        case SET_SEARCH_ERROR: {
            return {
                ...state,
                error: payload,
            };
        }
        default:
            return state;
    }
};