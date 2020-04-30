import axios from "axios";
export const GET_TOKEN = "GET_TOKEN";
export const ERROR = "ERROR";

export const getTokenAction =()=> {
    return async dispatch => {
        await axios
            .get(`https://api.themoviedb.org/3/authentication/guest_session/new?api_key=3005d94c9609dfff31bb87e2643367b4`)
            .then(res =>
                dispatch({
                    type: GET_TOKEN,
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
