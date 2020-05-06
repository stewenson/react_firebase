import axios from "axios";
export const GET_POPULAR_SERIES = "GET_POPULAR_SERIES";
export const ERROR = "ERROR";

export const getPopuparSeries =()=> {
    return async dispatch => {
       await axios
            .get(`https://api.themoviedb.org/3/tv/popular?api_key=3005d94c9609dfff31bb87e2643367b4&language=en-US&page=1`)
            .then(res =>
                dispatch({
                    type: GET_POPULAR_SERIES,
                    payload: res.data,
                })
            )
            .catch( e => {
                dispatch({
                    type: ERROR,
                    msg: e.message
                })
            });
    };
};
