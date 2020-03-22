import app from "../../../config/base";

export const FETCH_COMPLETE_TODO = "FETCH_COMPLETE_TODO";
export const ERROR = "ERROR";

export const fetchCompleteTodo = (uid) => {
    return dispatch => {
        app.firestore()
            .collection("todos")
            .where('author', '==', uid)
            .where('complete', '==', true)
            .get()
            .then(res => {
                dispatch({
                    type: FETCH_COMPLETE_TODO,
                    data: res.docs.map(doc => ({...doc.data(), id: doc.id}))
                });
            }).catch(function(error) {
            alert(error.message);
        });
    };
};
