import React, {useContext} from "react";
import { useFormik } from "formik";
import {withRouter, Redirect} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { Container } from '../../../Styles/Styled';
import '../../../Styles/LoginStyle/LoginStyle.scss';
import ResetForm from "../../Form/ResetForm/ResetForm";
import ButtonComponent from '../../Button/ButtonComponent';
import app from "../../../config/base";
import { AuthContext } from '../Auth/Auth';

function PasswordReset({history}) {

    const validate  = values => {
        const errors = {};
        if (!values.email) {
            errors.email = 'Required';
        } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(values.email)) {
            errors.email = 'Wrong email';
        }
        return errors;
    };
    const formik = useFormik({
        initialValues: {
            email: ''
        },
        validate,
        onSubmit: async values => {
            try {
                await app
                    .auth()
                    .sendPasswordResetEmail(values.email);
                alert('We have sen a reset password email. Please click the reset password link to set your new password');
                history.push('/login');
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
                <Card.Header>
                    <h4>Forgot your password?</h4>
                    <p>Please enter your email to resset password!</p>
                </Card.Header>
                <Card.Body>
                    <ResetForm
                        //action
                        submit={formik.handleSubmit}
                        clicked={formik.handleSubmit}
                        changed={formik.handleChange}
                        // values
                        email={formik.values.email}
                        // errors
                        emailError={formik.errors.email}
                        // labels (placeholder)
                        emailLabel={"Enter email"}
                    />
                </Card.Body>
                <Card.Footer>
                    <p style={{ textAlign: 'center'}}>
                        Back to Login
                        <ButtonComponent
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
export default withRouter(PasswordReset);