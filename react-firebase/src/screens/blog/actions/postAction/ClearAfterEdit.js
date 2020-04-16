export const CLEAR_DATA_AFTER_EDIT = "CLEAR_DATA_AFTER_EDIT";
export const ERROR = "ERROR";


export const ClearAfterEdit = () =>  {
    return  dispatch => {
        dispatch({
            type: CLEAR_DATA_AFTER_EDIT,
            data: {}
        })
    };
};
