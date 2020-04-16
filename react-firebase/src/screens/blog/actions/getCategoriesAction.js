import firebase from "../../../config/base";
export const FETCH_CATEGORIES = "FETCH_CATEGORIES";
export const ERROR = "ERROR";

export const GetCategoriesAction = () => {
    return dispatch => {
        firebase.firestore()
            .collection("Categories")
            .get()
            .then(res => {
                dispatch({
                    type: FETCH_CATEGORIES,
                    data: res.docs.map(doc => ({...doc.data(), id: doc.id}))
                });
            }).catch(function(error) {
            alert(error.message);
        });
    };
};
