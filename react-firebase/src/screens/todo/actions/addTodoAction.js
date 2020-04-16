import firebase from "../../../config/base";

export const ADD_TODO = "ADD_TODO";
export const ERROR = "ERROR";
export const MESSAGE = "MESSAGE";

export const addTodoAction = query => {
    return dispatch => {
        firebase.firestore().collection('todos')
            .doc()
            .set({
                author: query.userId,
                todo: query.todo,
                complete: query.complete,
                created: new Date()
            }).then(
            dispatch({
                type: ADD_TODO,
                payload: query
            })
        ).then(
            dispatch({
                type: MESSAGE,
                payload: "Todo was added"
            })
        ).catch(e => {
                dispatch({
                    type: ERROR,
                    payload: e.message
                })
        });
    };
};
