import firebase from "../../../config/base";

export const FETCH_COMPLETE_TODO = "FETCH_COMPLETE_TODO";
export const ERROR = "ERROR";

export const GetCompleteAction = (uid) => {
    return dispatch => {
        firebase.firestore()
            .collection("todos")
            .where('author', '==', uid)
            .where('complete', '==', true)
            .get()
            .then(res => {
                dispatch({
                    type: FETCH_COMPLETE_TODO,
                    payload: res.docs.map(doc => ({...doc.data(), id: doc.id}))
                });
            }).catch(function(error) {
            alert(error.message);
        });
    };
};
