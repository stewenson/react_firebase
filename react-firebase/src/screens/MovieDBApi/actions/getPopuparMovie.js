import axios from "axios";
export const GET_POPULAR_MOVIES = "GET_POPULAR_MOVIES";
export const ERROR = "ERROR";

export const getPopuparMovie = (query) => {
    return async dispatch => {
       await axios
            .get(`https://api.themoviedb.org/3/movie/popular?api_key=3005d94c9609dfff31bb87e2643367b4&language=en-US&page=1`)
            .then(res =>
                dispatch({
                    type: GET_POPULAR_MOVIES,
                    payload: res.data,
                    title: query
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
