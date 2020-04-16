export const CLEAR_MESSAGE = "CLEAR_MESSAGE";
export const ERROR = "ERROR";

export const ClearMessageAction = () =>  {
    return  dispatch => {
        dispatch({
            type: CLEAR_MESSAGE,
            msg: ''
        })
    };
};
