import axios from "axios";
export const GET_REVIEWS = "GET_REVIEWS";
export const ERROR = "ERROR";


export const getReviews = (id, type) =>  {
    return async dispatch => {
        await axios
            .get(`https://api.themoviedb.org/3/${type}/${id}/reviews?api_key=3005d94c9609dfff31bb87e2643367b4&language=en-US&page=1`)
            .then(res =>
                dispatch({
                    type: GET_REVIEWS,
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
