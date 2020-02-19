import React, {useContext} from "react";
import { useFormik } from "formik";
import {withRouter, Redirect} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { Container } from '../../../Styles/Styled';
import '../../../Styles/LoginStyle/LoginStyle.scss';
import LoginForm from "../../Form/LoginForm/LoginForm";
import ButtonComponent from '../../Button/ButtonComponent';
import app from "../../../config/base";
import { AuthContext } from '../Auth/Auth';

function Login({history}) {

    const validate  = values => {
        const errors = {};
        if (!values.email) {
            errors.email = 'Required';
        } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(values.email)) {
            errors.email = 'Wrong email';
        }
        if (!values.password) {
            errors.password = 'Required';
        }
        return errors;
    };
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validate,
        onSubmit: async values => {
            try {
                await app
                    .auth()
                    .signInWithEmailAndPassword(values.email, values.password);

                history.push('/dashboard');
            } catch (e) {
                alert(e.message);
            }

        }
    });

    const { currentUser } = useContext(AuthContext);
    if (currentUser) {
        return <Redirect to='/dashboard' />
    }

    return (
        <Container>
            <Card>
                <Card.Header>Login</Card.Header>
                <Card.Body>
                    <LoginForm
                        //action
                        submit={formik.handleSubmit}
                        clicked={formik.handleSubmit}
                        changed={formik.handleChange}
                        // values
                        email={formik.values.email}
                        password={formik.values.password}
                        // errors
                        emailError={formik.errors.email}
                        passwordError={formik.errors.password}
                        // labels (placeholder)
                        emailLabel={"Enter email"}
                        passwordLabel={"Enter password"}
                    />
                </Card.Body>
                <Card.Footer>
                    <p style={{ textAlign: 'center'}}>
                        You don't have an account?
                        <ButtonComponent
                            clicked={() => history.push('/registration')}
                            color={"secondary"}
                            text={"Register here"}
                        />
                    </p>
                    <p style={{ textAlign: 'center'}}>
                        <ButtonComponent
                            clicked={() => history.push('/password_reset')}
                            color={"primary"}
                            text={"Forgot Password"}
                        />
                    </p>
                </Card.Footer>
            </Card>
        </Container>
    );
}
export default withRouter(Login);