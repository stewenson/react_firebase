import app from "../../../config/base";

export const FETCH_ALL_TODO = "FETCH_ALL_TODO";
export const ERROR = "ERROR";

export const FetchAllTodo = (uid) => {
    return dispatch => {
        app.firestore()
            .collection("todos")
            .where('author', '==', uid)
            .orderBy('created', 'desc')
            .get()
            .then(res => {
                dispatch({
                    type: FETCH_ALL_TODO,
                    data: res.docs.map(doc => ({...doc.data(), id: doc.id}))
                });
            }).catch(function(error) {
            alert(error.message);
        });
    };
};
