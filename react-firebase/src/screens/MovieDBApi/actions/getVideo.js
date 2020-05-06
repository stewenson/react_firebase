import axios from "axios";
export const GET_VIDEO = "GET_VIDEO";
export const ERROR = "ERROR";

export const getVideo = (id, type) =>  {
    return async dispatch => {
        await axios
            .get(`https://api.themoviedb.org/3/${type}/${id}/videos?api_key=3005d94c9609dfff31bb87e2643367b4&language=en-US`)
            .then(res =>
                dispatch({
                    type: GET_VIDEO,
                    payload: res.data,
                    token: res.data.id
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
