import app from "../../../config/base";
export const USER_REGISTER = "USER_REGISTER";
export const ERROR = "ERROR";


export const UserRegistration = query => {
    return async dispatch => {
        await app.auth().createUserWithEmailAndPassword(query[0], query[1])
            .then((resp) => {
                return app.firestore().collection('users').doc(resp.user.uid).set({
                    firstName: query[2],
                    lastName: query[3],
                    email: query[0],
                    nickName: query[4]
                }).then(() =>{
                    app.auth().currentUser.updateProfile({
                        displayName: query[4]
                    })
                }).then(
                    dispatch({
                        type: USER_REGISTER,
                        data: {
                            firstName: query[2],
                            lastName: query[3],
                            email: query[0],
                            nickName: query[4]
                        }
                    }))
            }).catch(e => {
                dispatch({
                    type: ERROR,
                    msg: e.message
                })
            })
    };
};
