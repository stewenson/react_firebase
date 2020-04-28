import axios from "axios";
export const GET_DETAIL_SERIES = "GET_DETAIL_SERIES";
export const ERROR = "ERROR";


export const getDetailSeriesAction = id =>  {
    return  dispatch => {
        axios
            .get(`https://api.themoviedb.org/3/tv/${id}?api_key=3005d94c9609dfff31bb87e2643367b4&language=en-US`)
            .then(res =>
                dispatch({
                    type: GET_DETAIL_SERIES,
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
