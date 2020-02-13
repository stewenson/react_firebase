import React from "react";
import { useFormik } from 'formik'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { Container } from '../../../Styles/Styled';
import '../../../Styles/RegisterStyle/RegisterStyle.scss';
import app from '../../../config/base';
import RegisterForm from '../../Form/RegisterForm/RegisterForm';
import ButtonComponents from "../../Button/ButtonComponent";

function Register({ history }) {

    const validate = values => {

        const errors = {};
        if (!values.firstName) {
            errors.firstName = 'Required';
        } else if (!/^[a-žA-Ž ]+(.+)*$/.test(values.firstName)) {
            errors.firstName = 'First Name must contain only text';
        }
        if (!values.password) {
            errors.password = 'Required';
        } else if (!values.password.length > 6) {
            errors.password = 'Password must 6 or more character';
        }
        if (!values.email) {
            errors.email = 'Required';
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
            email: '',
            password: '',
            password_confirm: ''
        },
        validate,
        onSubmit: async values => {
            try {
                await app
                    .auth()
                    .createUserWithEmailAndPassword(values.email, values.password)
                    .then(() => {
                        const user = app.auth().currentUser;
                        user
                            .updateProfile({
                                displayName: values.firstName
                            })
                            .then(() => {
                                history.push('/login');
                            }).catch(error => {
                            alert(error.message);
                        });
                    }).catch(error => {
                        alert(error.message);
                    })
            } catch (e) {
                alert(e.message);
            }

        }
    });

    return (
        <Container>
            <Card>
                <Card.Header>Register</Card.Header>
                <Card.Body>
                    <RegisterForm
                    //action
                    submit={formik.handleSubmit}
                    clicked={formik.handleSubmit}
                    changed={formik.handleChange}
                    // values
                    firstName={formik.values.firstName}
                    email={formik.values.email}
                    password={formik.values.password}
                    password_confirm={formik.values.password_confirm}
                    // errors
                    firstNameError={formik.errors.firstName}
                    emailError={formik.errors.email}
                    passwordError={formik.errors.password}
                    password_confirmError={formik.errors.password_confirm}
                    // labels (placeholder)
                    nameLabel={"Enter name"}
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
