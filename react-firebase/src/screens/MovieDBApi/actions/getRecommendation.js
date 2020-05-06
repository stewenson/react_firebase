import axios from "axios";
export const GET_RECOMMANDATIONS = "GET_RECOMMANDATIONS";
export const ERROR = "ERROR";

export const getRecommendation = (id, category) => {
    return async dispatch => {
        await axios
            .get(`https://api.themoviedb.org/3/${category}/${id}/recommendations?api_key=3005d94c9609dfff31bb87e2643367b4&language=en-US&page=1`)
            .then(res =>
                dispatch({
                    type: GET_RECOMMANDATIONS,
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
