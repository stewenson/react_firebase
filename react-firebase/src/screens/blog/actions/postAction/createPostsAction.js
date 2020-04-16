import firebase from "../../../../config/base";

export const ADD_NEW_POST = "ADD_NEW_POST";
export const ERROR = "ERROR";
export const MESSAGE = "MESSAGE";


export const CreatePostsAction = query => {
    return dispatch => {
        firebase.firestore()
            .collection('blog')
            .doc()
            .set({
                userId: query.userId,
                title: query.title,
                content: query.content,
                created: Date.now(),
                like: query.like,
                author: query.author,
                category: query.category

            })
            .then(
                dispatch({
                    type: ADD_NEW_POST,
                    data: query
                }))
            .then(
                dispatch({
                    type: MESSAGE,
                    msg: "Post was created"
                }))
            .catch(e =>
                dispatch({
                    type: ERROR,
                    msg: "Something is wrong"
                })
            );
    };
};
