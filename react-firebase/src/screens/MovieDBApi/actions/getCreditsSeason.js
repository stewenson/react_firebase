import axios from "axios";
export const GET_CREDITS_SEASON = "GET_CREDITS_SEASON";
export const ERROR = "ERROR";


export const getCreditsSeason = id =>  {
    return async dispatch => {
       await axios
            .get(`https://api.themoviedb.org/3/tv/${id}/season/{season_number}/credits?api_key=3005d94c9609dfff31bb87e2643367b4&language=en-US`)
            .then(res =>
                dispatch({
                    type: GET_CREDITS_SEASON,
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
