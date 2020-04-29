import axios from "axios";
export const GET_DETAIL_MOVIE = "GET_DETAIL_MOVIE";
export const ERROR = "ERROR";


export const getDetailMovieAction = id =>  {
    return async dispatch => {
       await axios
            .get(`https://api.themoviedb.org/3/movie/${id}?api_key=3005d94c9609dfff31bb87e2643367b4&language=en-US`)
            .then(res =>
                dispatch({
                    type: GET_DETAIL_MOVIE,
                    payload: res.data
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
