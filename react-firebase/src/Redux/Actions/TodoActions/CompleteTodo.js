import app from "../../../config/base";

export const COMPLETE_TODO = "COMPLETE_TODO";
export const ERROR = "ERROR";

export const CompleteTodo = ([key, data, id]) => {
    return dispatch => {
        app.firestore()
            .collection("todos")
            .doc(key)
            .update({
                author: id,
                todo: data,
                complete: true
            })
            .then(() => {
                return app.firestore()
                    .collection("todos")
                    .where('author', '==', id)
                    .get()
                    .then(
                        dispatch({
                            type: COMPLETE_TODO,
                            data: key
                        })
                    );
            })
            .catch(function(error) {
                alert(error.message);
            });
    };
};
