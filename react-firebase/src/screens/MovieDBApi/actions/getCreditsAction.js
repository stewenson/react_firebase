import axios from "axios";
export const GET_CREDITS = "GET_CREDITS";
export const ERROR = "ERROR";


export const getCreditsAction = id =>  {
    return  dispatch => {
        axios
            .get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=3005d94c9609dfff31bb87e2643367b4`)
            .then(res =>
                dispatch({
                    type: GET_CREDITS,
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
