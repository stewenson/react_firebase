export const CLEAR_DATA = "CLEAR_DATA";
export const ERROR = "ERROR";


export const clearDetail = () =>  {
    return  dispatch => {
        dispatch({
            type: CLEAR_DATA,
            payload: []
        })
    };
};
