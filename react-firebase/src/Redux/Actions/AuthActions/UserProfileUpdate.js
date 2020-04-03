import app from "../../../config/base";
export const USER_PROFILE_UPDATE = "USER_PROFILE_UPDATE";
export const ERROR = "ERROR";


export const UserProfileUpdate = query => {
    return async dispatch => {
        await app.firestore().collection('users')
            .doc(query[7])
            .update({
               firstName: query[1],
                lastName: query[2],
                nickName: query[3],
                email: query[0],
                city: query[4],
                state: query[5],
                phoneNumber: query[6],
                intro: query[8]
            }).then(() => {
                return app.auth().currentUser.updateEmail(query[0])
                    .then(() => {
                        app.auth().currentUser.updateProfile({
                            displayName: query[3],
                        })
                    })
            })
            .then(() => {
                dispatch({
                    type: USER_PROFILE_UPDATE,
                    data: {
                        firstName: query[1],
                        lastName: query[2],
                        nickName: query[3],
                        email: query[0],
                        city: query[4],
                        state: query[5],
                        phoneNumber: query[6]
                    },
                    message: 'Profile was Updated;'
                });
            }).catch(e => {
                dispatch({
                    type: ERROR,
                    msg: e.message
                })
            })
    };
};
