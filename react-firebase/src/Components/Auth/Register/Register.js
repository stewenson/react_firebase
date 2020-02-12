import React from "react";
import { useFormik } from 'formik'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button, Card} from 'react-bootstrap';
import { Container } from '../../../Styles/HomeStyled/Styled';
import '../../../Styles/RegisterStyle/RegisterStyle.scss';
import app from '../../../config/base';

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
        onSubmit: values => {
            app
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
        }
    });

    return (
        <Container>
            <Card>
                <Card.Header>Register</Card.Header>
                <Card.Body>
                    <Form
                        style={{ width: '300px'}}
                        onSubmit={formik.handleSubmit}
                    >
                        <Form.Group>
                            <Form.Control
                                id="firstName"
                                name="firstName"
                                type="text"
                                placeholder="Enter firstName"
                                onChange={formik.handleChange}
                                value={formik.values.firstName}
                            />
                            <Form.Text className="text-muted">
                                {formik.errors.firstName ? <div>{formik.errors.firstName}</div>: null}
                            </Form.Text>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Enter email"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            />
                            <Form.Text className="text-muted">
                                {formik.errors.email ? <div>{formik.errors.email}</div>: null}
                            </Form.Text>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Enter password"
                                onChange={formik.handleChange}
                                value={formik.values.password}
                            />
                            <Form.Text className="text-muted">
                                {formik.errors.password ? <div>{formik.errors.password}</div>: null}
                            </Form.Text>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control
                                id="password_confirm"
                                name="password_confirm"
                                type="password"
                                placeholder="Confirm password"
                                onChange={formik.handleChange}
                                value={formik.values.password_confirm}
                            />
                            <Form.Text className="text-muted">
                                {formik.errors.password_confirm ? <div>{formik.errors.password_confirm}</div>: null}
                            </Form.Text>
                        </Form.Group>
                        <Button
                            style={{width: '100%', marginBottom: '10px'}}
                            type="submit"
                        >
                            Submit
                        </Button>
                        <p style={{ textAlign: 'center'}}>Or</p>
                        <Button
                            style={{width: '100%', marginBottom: '10px'}}
                            type="submit"
                            onClick={() => {
                                history.push('/login');
                            }}
                        >
                            Login
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
}
export default Register;
