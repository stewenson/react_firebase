import app from "../../../config/base";

export const DELETE_TODO = "DELETE_TODO";
export const ERROR = "ERROR";
export const MESSAGE = "MESSAGE";


export const DeleteTodo = id => {
    return dispatch => {
        app.firestore().collection('blog')
            .doc(id)
            .delete()
            .then(
            dispatch({
                type: DELETE_TODO,
                data: id
            })
        ).then(e =>
            dispatch({
                type: MESSAGE,
                msg: "Todo was deleted"
            })
        ).catch(e =>
            dispatch({
                type: ERROR,
                msg: "Something is wrong"
            })
        );
    };
};
