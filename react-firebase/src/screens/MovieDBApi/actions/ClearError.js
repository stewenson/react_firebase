export const CLEAR_DATA = "CLEAR_DATA";
export const CLEAR_ERROR = "CLEAR_ERROR";


export const clearError = () =>  {
    return  dispatch => {
        dispatch({
            type: CLEAR_ERROR,
            payload: ''
        })
    };
};
