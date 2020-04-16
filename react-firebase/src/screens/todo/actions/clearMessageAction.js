export const CLEAR_MESSAGE = "CLEAR_MESSAGE";

export const clearMessageAction = () =>  {
    return  dispatch => {
        dispatch({
            type: CLEAR_MESSAGE,
            payload: ''
        })
    };
};
