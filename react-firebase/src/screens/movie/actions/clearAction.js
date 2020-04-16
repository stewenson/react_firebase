export const CLEAR_DETAIL_MOVIE_DATA = "CLEAR_DETAIL_MOVIE_DATA";
export const ERROR = "ERROR";


export const clearDetailData = () =>  {
    return  dispatch => {
        dispatch({
            type: CLEAR_DETAIL_MOVIE_DATA,
            detailData: []
        })
    };
};
