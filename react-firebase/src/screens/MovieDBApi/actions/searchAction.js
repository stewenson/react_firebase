import axios from "axios";
export const SEARCH_MOVIE = "SEARCH_MOVIE";
export const SEARCH_ERROR = "SEARCH_ERROR";


export const searchAction = (title, page) =>  {
    return async dispatch => {
        await axios
                .get(`https://api.themoviedb.org/3/search/multi?api_key=3005d94c9609dfff31bb87e2643367b4&language=en-US&query=${title}&page=${page}&include_adult=false`)
            .then(res =>
                dispatch({
                    type: SEARCH_MOVIE,
                    payload: res.data,
                    title: title,
                    msg: ''
                })
            )
            .catch(
                dispatch({
                type: SEARCH_ERROR,
                msg: "Movie not Found"
                })
            )
    };
};
