import axios from "axios";
export const FETCH_DATA_BY_ID = "FETCH_DATA_BY_ID";
export const ERROR = "ERROR";

export const getData = query => {
    return dispatch => {
        axios
            .get(`http://www.omdbapi.com/?s=${query}&apikey=63f2aa9f`)
            .then(res =>
                dispatch({
                    type: FETCH_DATA_BY_ID,
                    data: res.data.Search
                })
            )
            .catch(e =>
                dispatch({
                    type: ERROR,
                    msg: "Something is wrong"
                })
            );
    };
};
