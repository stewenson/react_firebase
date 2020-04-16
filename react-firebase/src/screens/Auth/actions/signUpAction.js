import firebase from "../../../config/base";
export const USER_REGISTER = "USER_REGISTER";
export const ERROR = "ERROR";


export const SignUpAction = query => {
    return async dispatch => {
        await firebase.auth().createUserWithEmailAndPassword(query.email, query.password)
            .then((resp) => {
                return firebase.firestore().collection('users').doc(resp.user.uid).set({
                    firstName: query.firstName,
                    lastName: query.lastName,
                    email: query.email,
                    nickName: query.nickName
                }).then(() =>{
                    firebase.auth().currentUser.updateProfile({
                        displayName: query.displayName,
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
                alert(e.message)
            })
    };
};
