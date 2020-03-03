import axios from "axios";
export const FETCH_DETAIL_MOVIE = "FETCH_DETAIL_MOVIE";
export const ERROR = "ERROR";


export const getDetailData = id =>  {
     return  dispatch => {
         axios
            .get(`http://www.omdbapi.com/?i=${id}&apikey=63f2aa9f`)
            .then(res =>
                dispatch({
                    type: FETCH_DETAIL_MOVIE,
                    detailData: res.data
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
