import { RenderSearchResultsBlock } from "../../components/searchResults";
import { SET_CITIES, SET_SEARCH_ERROR, SET_SEARCH_RESULT } from "./actionTypes";
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

const setCities = (cities) => ({
  type: SET_CITIES,
  payload: cities,
});

const dogSitter = [
  {
    id: 1,
    name: "Татьяна",
    email: "example@example.ru",
    phone: "+79201234567",
    city: "Москва",
    cityId: 1,
    adress: "ул. Центральная, д. 37",
  },
  {
    id: 2,
    name: "Ирина",
    email: "example@example.ru",
    phone: "+79201234567",
    city: "Пушкино",
    cityId: 3,
    adress: "ул. Центральная, д. 37",
  },
  {
    id: 4,
    name: "Вика",
    email: "example@example.ru",
    phone: "+79201234567",
    city: "Самара",
    cityId: 2,
    adress: "ул. Центральная, д. 37",
  },
];

export const getCities = () => async (dispatch) => {
  try {
    //тут будет потом запрос доступных городов из БД
    const citiesArr = [
      { id: 1, city: "Москва" },
      { id: 2, city: "Самара" },
      { id: 3, city: "Пушкино" },
      { id: 4, city: "Сергиев - Посад" },
      { id: 5, city: "Калининград" },
    ];
    dispatch(setCities(citiesArr));
  } catch (e) {
    console.log(e.message);
  }
};

export const getSearchResult = (city) => async (dispatch) => {
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

    const data = dogSitter.find((el) => el.cityId == Number(city));
    dispatch(setSearchResult(data));

  } catch (error) {
    console.log(error.message);
    dispatch(setSearchError(error.message));
  }
};
