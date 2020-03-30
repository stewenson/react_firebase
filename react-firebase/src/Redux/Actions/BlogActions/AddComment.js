import app from "../../../config/base";

export const ADD_NEW_COMMENT = "ADD_NEW_COMMENT";
export const ERROR = "ERROR";
export const MESSAGE = "MESSAGE";


export const AddComment = query => {
    return dispatch => {
        app.firestore().collection('comments')
            .doc()
            .set({
                userId: query[0],
                userName: query[1],
                postId: query[2],
                comment: query[3],
                created: Date.now()
            }).then(
            dispatch({
                type: ADD_NEW_COMMENT,
                data: query
            })
        ).then(() =>
            dispatch({
                type: MESSAGE,
                msg: "Comment added"
            })
        ).then(() => {
            alert('Comment added');
        }).catch(e =>
            dispatch({
                type: ERROR,
                msg: "Something is wrong"
            })
        );
    };
};
