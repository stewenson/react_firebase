import firebase from "../../../config/base";
export const FETCH_ALL_TODO = "FETCH_ALL_TODO";
export const ERROR = "ERROR";

export const getAllTodoAction = (uid) => {
    return dispatch => {
        firebase.firestore()
            .collection("todos")
            .where('author', '==', uid)
            .where('complete', '==', false)
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
