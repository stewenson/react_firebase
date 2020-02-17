import React, {useContext} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from "react-bootstrap";
import {Container} from "../../../Styles/Styled";
import ButtonComponents from "../../Button/ButtonComponent";
import {AuthContext} from "../../Auth/Auth/Auth";
import {Redirect} from "react-router-dom";

const Home = props => {
    const { currentUser } = useContext(AuthContext);
    if (currentUser) {
        return <Redirect to='/dashboard' />
    }
    return <Container>
        <Card>
            <Card.Header>Firebase Hooks Tutorial</Card.Header>
            <Card.Body>
                <Card.Body>
                    <ButtonComponents
                        clicked={() => props.history.push('/registration')}
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