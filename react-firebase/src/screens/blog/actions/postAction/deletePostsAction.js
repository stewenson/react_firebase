import firebase from "../../../../config/base";
export const DELETE_POST = "DELETE_POST";
export const ERROR = "ERROR";

export const DeletePostsAction = id => {
    return  dispatch => {
        firebase.firestore()
            .collection("blog").doc(id)
            .delete()
            .then(() => {
                dispatch({
                    type: DELETE_POST,
                    payload: id
                })
            })
            .catch(e =>  {
            dispatch({
                type: ERROR,
                msg: e.message
            })
        });
    };
};
