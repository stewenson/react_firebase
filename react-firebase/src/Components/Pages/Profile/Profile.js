import React from "react";
import {useFormik} from "formik";
import ProfileGrid from "./ProfileGrid";


function Profile() {
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
        } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(values.email)) {
            errors.email = 'Wrong email';
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
        onSubmit: values => {
            console.log(values);
        }
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
                firstNameLabel={"Enter First name"}
                lastNameLabel={"Enter Last name"}
                nickNameLabel={"Enter Nick name"}
                emailLabel={"Enter email"}
            />
        </div>
    );
}
export default Profile;