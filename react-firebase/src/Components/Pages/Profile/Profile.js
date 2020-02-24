import React, {useContext} from "react";
import {useFormik} from "formik";
import ProfileGrid from "./ProfileGrid";
import app from "../../../config/base";
import {AuthContext} from "../../Auth/Auth/Auth";


function Profile({history}) {

    const updateData = async values => {
        try {
            await app.firestore().collection('users')
                .doc(currentUser.uid)
                .update({
                    firstName: values.firstName,
                    lastName: values.lastName,
                    nickName: values.nickName,
                    email: values.email
                }).then(() => {
                    return app.auth().currentUser.updateEmail(values.email)
                        .then(() => {
                            app.auth().currentUser.updateProfile({
                                displayName: values.nickName
                            })
                        })
                })
                .then(() => {
                    alert('Profile was Updated;')
                }).then(() => {
                    history.push('/profile');
                })
        } catch (e) {
            alert(e.message);
        }
    };

    const { currentUser } = useContext(AuthContext);
    const validate = values => {

        const errors = {};
        if (!values.firstName) {
            errors.firstName = 'Required';
        } else if (!/^[a-žA-Ž ]+(.+)*$/.test(values.firstName)) {
            errors.firstName = 'First Name must contain only text';
        }
        if (!values.lastName) {
            errors.lastName = 'Required';
        } else if (!/^[a-žA-Ž ]+(.+)*$/.test(values.lastName)) {
            errors.lastName = 'Last Name must contain only text';
        }
        if (!values.nickName) {
            errors.nickName = 'Required';
        } else if (!/^[a-žA-Ž ]+(.+)*$/.test(values.nickName)) {
            errors.nickName = 'Nick Name must contain only text';
        }
        if (!values.email) {
            errors.email = 'Required';
        }
        return errors;
    };

    const formik = useFormik({
    initialValues: {
            firstName: '',
            lastName: '',
            nickName: '',
            email: '',
        },
        validate,
        onSubmit: updateData
    });
    
    return (
        <div>
            <ProfileGrid
                //action
                submit={formik.handleSubmit}
                clicked={formik.handleSubmit}
                changed={formik.handleChange}
                // values
                firstName={formik.values.firstName}
                lastName={formik.values.lastName}
                nickName={formik.values.nickName}
                email={formik.values.email}
                // errors
                firstNameError={formik.errors.firstName}
                lastNameError={formik.errors.lastName}
                nickNameError={formik.errors.nickName}
                emailError={formik.errors.email}
                // labels (placeholder)
                firstNameLabel={'Enter First Name'}
                lastNameLabel={'Enter Last Name'}
                nickNameLabel={'Enter Nick Name'}
                emailLabel={'Enter Email'}
            />
        </div>
    );
}
export default Profile;