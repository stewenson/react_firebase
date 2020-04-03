import app from "../../../config/base";
export const DELETE_POST = "DELETE_POST";
export const ERROR = "ERROR";

export const DeletePost = id => {
    return  dispatch => {
        app.firestore()
            .collection("blog").doc(id)
            .delete()
            .then(
                dispatch({
                    type: DELETE_POST,
                    data: id
                })
            ).catch(e =>  {
            dispatch({
                type: ERROR,
                msg: e.message
            })
        });
    };
};
