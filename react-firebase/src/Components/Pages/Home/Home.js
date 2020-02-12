import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from "react-bootstrap";
import {Container} from "../../../Styles/HomeStyled/Styled";

const Home = props => {
    return <Container>
        <Card>
            <Card.Body>
                <Card.Header>Firebase Hooks Tutorial</Card.Header>
                <Card.Body>
                    <Button
                        variant="outline-primary"
                        ghost
                        style={{width: '100%', marginBottom: '10px'}}
                        onClick={() => {
                            props.history.push('/register');
                        }}
                    >
                        Register
                    </Button>
                    <Button
                        variant="outline-primary"
                        ghost
                        style={{width: '100%', marginBottom: '10px'}}
                        onClick={() => {
                            props.history.push('/login');
                        }}
                    >
                        Login
                    </Button>
                    <Button
                        variant="outline-primary"
                        ghost
                        style={{width: '100%', marginBottom: '10px'}}
                        onClick={() => {
                            props.history.push('/dashboard');
                        }}
                    >
                        Dashboard
                    </Button>
                </Card.Body>
            </Card.Body>
        </Card>
    </Container>
};

export default Home;