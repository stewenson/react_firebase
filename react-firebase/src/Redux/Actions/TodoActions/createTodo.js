import app from "../../../config/base";

export const ADD_TODO = "ADD_TODO";
export const ERROR = "ERROR";
export const MESSAGE = "MESSAGE";


export const createTodo = query => {
    return dispatch => {
        app.firestore().collection('todos')
            .doc()
            .set({
                author: query[1],
                todo: query[0],
                complete: query[2],
                created: new Date()
            }).then(
            dispatch({
                type: ADD_TODO,
                data: query
            })
        ).then(e =>
            dispatch({
                type: MESSAGE,
                msg: "Todo was added"
            })
        ).catch(e =>
            dispatch({
                type: ERROR,
                msg: "Something is wrong"
            })
        );
    };
};
