import firebase from "../../../../config/base";
export const USER_PROFILE_UPDATE = "USER_PROFILE_UPDATE";
export const ERROR = "ERROR";


export const ProfileUpdateAction = query => {
    return async dispatch => {
        await firebase.firestore().collection('users')
            .doc(query.uid)
            .update({
               firstName: query.firstName,
                lastName: query.lastName,
                nickName: query.nickName,
                email: query.email,
                city: query.city,
                state: query.state,
                phoneNumber: query.phoneNumber,
                intro: query.intro,
            }).then(() => {
                return firebase.auth().currentUser.updateEmail(query.email)
                    .then(() => {
                        firebase.auth().currentUser.updateProfile({
                            displayName: query.nickName
                        })
                    })
            })
            .then(() => {
                dispatch({
                    type: USER_PROFILE_UPDATE,
                    data: {
                        firstName: query.firstName,
                        lastName: query.lastName,
                        nickName: query.nickName,
                        email: query.email,
                        city: query.city,
                        state: query.state,
                        phoneNumber: query.phoneNumber,
                        intro: query.intro
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
