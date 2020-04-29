import axios from "axios";
export const GET_FAMILY_MOVIES = "GET_FAMILY_MOVIES";
export const ERROR = "ERROR";

export const getFamilyMovAction = () => {
    return async dispatch => {
       await axios
            .get(`https://api.themoviedb.org/3/discover/movie?api_key=3005d94c9609dfff31bb87e2643367b4&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10751`)
            .then(res =>
                dispatch({
                    type: GET_FAMILY_MOVIES,
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
