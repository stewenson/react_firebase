import axios from "axios";
export const GET_DOCUMENT_MOVIES = "GET_DOCUMENT_MOVIES";
export const ERROR = "ERROR";

export const getDocumMovieAction = () => {
    return async dispatch => {
       await axios
            .get(`https://api.themoviedb.org/3/discover/movie?api_key=3005d94c9609dfff31bb87e2643367b4&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=99`)
            .then(res =>
                dispatch({
                    type: GET_DOCUMENT_MOVIES,
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
