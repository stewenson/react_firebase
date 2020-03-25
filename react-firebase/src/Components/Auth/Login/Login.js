import React, {useContext} from "react";
import {withRouter, Redirect} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { Container } from '../../../Styles/Styled';
import '../../../Styles/LoginStyle/LoginStyle.scss';
import LoginForm from "./Form/LoginForm/LoginForm";
import ButtonComponent from '../../Button/ButtonComponent';
import { AuthContext } from '../Auth/Auth';

function Login({history}) {
    const { currentUser } = useContext(AuthContext);
    
    if (currentUser) {
        return <Redirect to='/dashboard' />
    }

    return (
        <Container>
            <Card>
                <Card.Header>Login</Card.Header>
                <Card.Body>
                    <LoginForm />
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