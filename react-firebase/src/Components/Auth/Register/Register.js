import React, {useContext} from "react";
import { useFormik } from 'formik'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { Container } from '../../../Styles/Styled';
import '../../../Styles/RegisterStyle/RegisterStyle.scss';
import app from '../../../config/base';
import RegisterForm from '../../Form/RegisterForm/RegisterForm';
import ButtonComponents from "../../Button/ButtonComponent";
import {AuthContext} from "../Auth/Auth";
import {Redirect} from "react-router-dom";

function Register({ history }) {

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
        if (!values.password) {
            errors.password = 'Required';
        } else if (!values.password.length > 6) {
            errors.password = 'Password must 6 or more character';
        }
        if (!values.email) {
            errors.email = 'Required';
        } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(values.email)) {
            errors.email = 'Wrong email';
        }
        if (!values.password_confirm) {
            errors.password_confirm = 'Required';
        } else if (values.password !== values.password_confirm) {
            errors.password_confirm = 'Password do not mach';
        }

        return errors;
    };

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            nickName: '',
            email: '',
            password: '',
            password_confirm: ''
        },
        validate,
        onSubmit: async values => {
            try {
                await app.auth().createUserWithEmailAndPassword(values.email, values.password)
                    .then((resp) => {
                        return app.firestore().collection('users').doc(resp.user.uid).set({
                            firstName: values.firstName,
                            lastName: values.lastName,
                            email: values.email,
                            nickName: values.nickName
                        }).then(() =>{
                            app.auth().currentUser.updateProfile({
                                displayName: values.nickName
                            })
                        }).then(() => {
                            history.push('/login');
                        })
                    }).catch(e => {
                        alert(e.message);
                    })
            } catch (e) {
                alert(e.message);
            }

        }
    });
    const { currentUser } = useContext(AuthContext);
    if (currentUser) {
        return <Redirect to='/profile' />
    }

    return (
        <Container>
            <Card>
                <Card.Header>Registration</Card.Header>
                <Card.Body>
                    <RegisterForm
                    //action
                    submit={formik.handleSubmit}
                    clicked={formik.handleSubmit}
                    changed={formik.handleChange}
                    // values
                    firstName={formik.values.firstName}
                    lastName={formik.values.lastName}
                    nickName={formik.values.nickName}
                    email={formik.values.email}
                    password={formik.values.password}
                    password_confirm={formik.values.password_confirm}
                    // errors
                    firstNameError={formik.errors.firstName}
                    lastNameError={formik.errors.lastName}
                    nickNameError={formik.errors.nickName}
                    emailError={formik.errors.email}
                    passwordError={formik.errors.password}
                    password_confirmError={formik.errors.password_confirm}
                    // labels (placeholder)
                    firstNameLabel={"Enter First name"}
                    lastNameLabel={"Enter Last name"}
                    nickNameLabel={"Enter Nick name"}
                    emailLabel={"Enter email"}
                    passwordLabel={"Enter password"}
                    password_confirmLabel={"Password_confirm"}
                    />
                </Card.Body>
                <Card.Footer>
                    <p style={{ textAlign: 'center'}}>
                        You are already registered?
                        <ButtonComponents
                            clicked={() => history.push('/login')}
                            color={"secondary"}
                            text={"Log In"}
                        />
                    </p>
                </Card.Footer>
            </Card>
        </Container>
    );
}
export default Register;
