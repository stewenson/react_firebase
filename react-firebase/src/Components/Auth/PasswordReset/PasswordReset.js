import React, {useContext} from "react";
import {withRouter, Redirect} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { Container } from '../../../Styles/Styled';
import '../../../Styles/LoginStyle/LoginStyle.scss';
import ButtonComponent from '../../Button/ButtonComponent';
import { AuthContext } from '../Auth/Auth';
import ResetPasswordForm from "./Form/ResetPasswordForm";

function PasswordReset({history}) {

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
                    <ResetPasswordForm />
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