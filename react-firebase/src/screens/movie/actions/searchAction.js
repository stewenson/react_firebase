import axios from "axios";
export const FETCH_DATA_BY_ID = "FETCH_DATA_BY_ID";
export const ERROR = "ERROR";

export const searchAction = (query) => {
    return dispatch => {
        axios
            .get(`http://www.omdbapi.com/?s=${query}&apikey=63f2aa9f&page`)
            .then(res =>
                dispatch({
                    type: FETCH_DATA_BY_ID,
                    data: res.data,
                    title: query
                })
            )
            .catch(
                dispatch({
                    type: ERROR,
                    msg: "Movie not Found"
                })
            );
    };
};
