import React, {useContext} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from "react-bootstrap";
import {Container} from "../../Styles/Styled";
import ButtonComponents from "../../Components/Button/ButtonComponent";
import {AuthContext} from "../Auth/Auth/Auth";
import {useDispatch} from "react-redux";
import {SignOutAction} from "../Auth/actions/signOutAction";

const Home = props => {
    const { currentUser } = useContext(AuthContext);
    const dispatch = useDispatch();

    return <Container>
        <Card>
            <Card.Header>Firebase Hooks Tutorial</Card.Header>
            {currentUser ? (
                <Card.Body>
                    <ButtonComponents
                        style={{width: '100%', marginTop: '10px'}}
                        clicked={() => props.history.push('/todo')}
                        text={"Todo"}
                        color={"primary"}
                        variant={"outlined"}
                    />
                    <ButtonComponents
                        style={{width: '100%', marginTop: '10px'}}
                        clicked={() => props.history.push('/blog/allPosts')}
                        text={"Blog"}
                        color={"primary"}
                        variant={"outlined"}
                    />
                    <ButtonComponents
                        style={{width: '100%', marginTop: '10px'}}
                        clicked={() => props.history.push('/iTunes')}
                        text={"iTunes App"}
                        color={"primary"}
                        variant={"outlined"}
                    />
                    <ButtonComponents
                        style={{width: '100%', marginTop: '10px'}}
                        clicked={() => props.history.push('/movie')}
                        text={"Movie App"}
                        color={"primary"}
                        variant={"outlined"}
                    />
                    <ButtonComponents
                        style={{width: '100%', marginTop: '10px'}}
                        clicked={() => dispatch(SignOutAction())}
                        text={"Sign Out"}
                        color={"secondary"}
                        variant={"outlined"}
                    />
                </Card.Body>
            ) : (
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
                    <ButtonComponents
                        style={{width: '100%', marginTop: '10px'}}
                        clicked={() => props.history.push('/blog/allPosts')}
                        text={"Blog"}
                        color={"primary"}
                        variant={"outlined"}
                    />
                    <ButtonComponents
                        style={{width: '100%', marginTop: '10px'}}
                        clicked={() => props.history.push('/iTunes')}
                        text={"iTunes App"}
                        color={"primary"}
                        variant={"outlined"}
                    />
                    <ButtonComponents
                        style={{width: '100%', marginTop: '10px'}}
                        clicked={() => props.history.push('/movie')}
                        text={"Movie App"}
                        color={"primary"}
                        variant={"outlined"}
                    />
                </Card.Body>
            ) }
        </Card>
    </Container>
};

export default Home;