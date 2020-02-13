import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from "react-bootstrap";
import {Container} from "../../../Styles/Styled";
import ButtonComponents from "../../Button/ButtonComponent";

const Home = props => {
    return <Container>
        <Card>
            <Card.Body>
                <Card.Header>Firebase Hooks Tutorial</Card.Header>
                <Card.Body>
                    <ButtonComponents
                        clicked={() => props.history.push('/register')}
                        style={{width: '100%', marginTop: '10px'}}
                        text={"Registration"}
                        color={"primary"}
                        variant={"outlined"}
                    />

                    <ButtonComponents
                        style={{width: '100%', marginTop: '10px'}}
                        clicked={() => props.history.push('/login')}
                        text={"Log In"}
                        color={"primary"}
                        variant={"outlined"}
                    />
                </Card.Body>
            </Card.Body>
        </Card>
    </Container>
};

export default Home;