import React from "react";
import { useFormik } from "formik";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button, Card} from 'react-bootstrap';
import { Container } from '../../../Styles/HomeStyled/Styled';
import '../../../Styles/LoginStyle/LoginStyle.scss';

function Login(props) {

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
        onSubmit: values => {
            console.log(values)
        }
    });

    return (
        <Container>
            <Card>
                <Card.Header>Login</Card.Header>
                <Card.Body>
                    <Form
                        style={{ width: '300px'}}
                        onSubmit={formik.handleSubmit}>
                        <Form.Group>
                            <Form.Control
                                type="email"
                                id="email"
                                placeholder="Enter email"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            />
                            <Form.Text className="text-muted">
                                {formik.errors.email ? <div>{formik.errors.email}</div> : null}
                            </Form.Text>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control
                                type="password"
                                id="password"
                                placeholder="Enter password"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.password}
                            />
                            <Form.Text className="text-muted">
                                {formik.errors.password ? <div>{formik.errors.password}</div> : null}
                            </Form.Text>
                        </Form.Group>
                        <Button
                            style={{width: '100%', marginBottom: '10px'}}
                            type="submit">
                            Submit
                        </Button>
                        <p style={{ textAlign: 'center'}}>Or</p>
                        <Button
                            style={{width: '100%', marginBottom: '10px'}}
                            type="submit"
                            onClick={() => {
                                props.history.push('/register');
                            }}
                        >
                            Register
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
}
export default Login;