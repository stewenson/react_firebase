import app from "../../../config/base";

export const ADD_NEW_POST = "ADD_NEW_POST";
export const ERROR = "ERROR";
export const MESSAGE = "MESSAGE";


export const AddNewPost = query => {
    return dispatch => {
        app.firestore().collection('blog')
            .doc()
            .set({
                userId: query[0],
                title: query[1],
                content: query[2],
                created: Date.now(),
                like: query[3],
                author: query[4]

            }).then(
            dispatch({
                type: ADD_NEW_POST,
                data: query
            })
        ).then(() =>
            dispatch({
                type: MESSAGE,
                msg: "Post was created"
            })
        ).then(() => {
            alert('Post was created');
        }).catch(e =>
            dispatch({
                type: ERROR,
                msg: "Something is wrong"
            })
        );
    };
};
