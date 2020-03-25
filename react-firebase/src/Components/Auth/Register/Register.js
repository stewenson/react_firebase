import React, {useContext} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { Container } from '../../../Styles/Styled';
import '../../../Styles/RegisterStyle/RegisterStyle.scss';
import RegisterForm from './Form/RegisterForm/RegisterForm';
import ButtonComponents from "../../Button/ButtonComponent";
import {AuthContext} from "../Auth/Auth";
import {Redirect} from "react-router-dom";

function Register({ history }) {

    const { currentUser } = useContext(AuthContext);
    if (currentUser) {
        return <Redirect to='/dashboard' />
    }

    return (
        <Container>
            <Card>
                <Card.Header>Registration</Card.Header>
                <Card.Body>
                    <RegisterForm />
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
