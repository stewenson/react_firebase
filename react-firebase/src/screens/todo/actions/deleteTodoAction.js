import firebase from "../../../config/base";

export const DELETE_TODO = "DELETE_TODO";
export const ERROR = "ERROR";
export const MESSAGE = "MESSAGE";


export const deleteTodoAction = id => {
    return dispatch => {
        firebase.firestore()
            .collection('todos')
            .doc(id)
            .delete()
            .then(
                dispatch({
                    type: DELETE_TODO,
                    payload: id
                }))
            .then(() => {
                dispatch({
                    type: MESSAGE,
                    payload: "Todo was deleted"
                })
            })
            .catch(e =>
                dispatch({
                    type: ERROR,
                    payload: "Something is wrong"
                })
            );
    };
};
